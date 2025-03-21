// Remove the Retell SDK import and initialization since we'll use the REST API directly
interface RetellCallConfig {
  fromNumber: string;
  toNumber: string;
  agentId: string;
  conversationFlowId: string;
}

export async function initiateRetellCall(config: RetellCallConfig) {
  try {
    // Clean and format phone numbers
    const cleanFromNumber = config.fromNumber.replace(/^\+|[^\d]/g, '');
    const cleanToNumber = config.toNumber.replace(/^\+|[^\d]/g, '');
    
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
        llm_model: 'gpt-4',
        conversation_flow_id: config.conversationFlowId
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Error initiating call:', error);
    throw error;
  }
}
