import { Retell } from 'retell-sdk';

const RETELL_API_KEY = import.meta.env.VITE_RETELL_API_KEY || '';

// Initialize the Retell SDK
const retellClient = new Retell({
  apiKey: RETELL_API_KEY,
});

interface RetellCallConfig {
  fromNumber: string;
  toNumber: string;
  agentId: string;
  conversationFlowId: string;
}

export async function initiateRetellCall(config: RetellCallConfig) {
  try {
    // Clean and format phone numbers - remove any non-digits and existing "+" prefix
    const cleanFromNumber = config.fromNumber.replace(/^\+|[^\d]/g, '');
    const cleanToNumber = config.toNumber.replace(/^\+|[^\d]/g, '');
    
    console.log('Initiating call with:', {
      fromNumber: `+${cleanFromNumber}`,
      toNumber: `+${cleanToNumber}`,
      agentId: config.agentId
    });

    const response = await fetch('https://api.retellai.com/v2/create-phone-call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_RETELL_API_KEY}`,
      },
      body: JSON.stringify({
        from_number: `+${cleanFromNumber}`,
        to_number: `+${cleanToNumber}`,
        agent_id: config.agentId,
        conversation_flow_id: config.conversationFlowId
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || `API error: ${response.status}`);
    }

    console.log('Call initiated successfully:', data);
    return data;
  } catch (error) {
    console.error('Error details:', error);
    throw error;
  }
}
