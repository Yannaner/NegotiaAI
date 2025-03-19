import { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Typography, Alert } from "@material-tailwind/react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { initiateRetellCall } from '../utils/retellApi';
import CallStatus from './CallStatus';

const NegotiationSummary = () => {
  const [isCallInitiating, setIsCallInitiating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [callCompleted, setCallCompleted] = useState(false);
  const [callId, setCallId] = useState<string | null>(null);
  const dealerInfo = {
    name: "Luxury Motors Beverly Hills",
    contact: "James Anderson",
    vehicle: "2023 Mercedes-Benz S-Class",
    listPrice: "$125,000",
    estimatedDiscount: "$8,000",
    targetPrice: "$117,000",
  };

  const handleInitiateCall = async () => {
    try {
      setError(null);
      setIsCallInitiating(true);
      
      console.log("Initiating call with Retell SDK...");
      
      const result = await initiateRetellCall({
        fromNumber: '16292683092',
        toNumber: '16509351525',
        agentId: 'agent_dcc21571d45271cc936d61e4e0',
        conversationFlowId: 'conversation_flow_fcfc128a6ad7',
      });
      
      console.log('Call initiated successfully with ID:', result.id);
      setCallId(result.id);
      
      // For demo purposes, show call status after a short delay
      setTimeout(() => {
        setCallCompleted(true);
      }, 5000);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to initiate call';
      setError(errorMessage);
      console.error('Call error:', error);
    } finally {
      setIsCallInitiating(false);
    }
  };

  if (callCompleted) {
    return <CallStatus />;
  }

  return (
    <Card className="luxury-card w-full max-w-3xl mx-auto">
      <CardHeader className="p-6 m-4 border-b border-gold/20">
        <Typography variant="h4" className="text-gold text-center font-playfair">
          Negotiation Summary
        </Typography>
      </CardHeader>

      <CardBody className="p-8">
        {error && (
          <Alert
            color="red"
            variant="gradient"
            className="mb-4"
            dismissible={{
              onClose: () => setError(null),
            }}
          >
            {error}
          </Alert>
        )}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Typography className="text-cream/60">Dealer Name:</Typography>
            <Typography className="text-gold">{dealerInfo.name}</Typography>
            
            <Typography className="text-cream/60">Contact Person:</Typography>
            <Typography className="text-gold">{dealerInfo.contact}</Typography>
            
            <Typography className="text-cream/60">Vehicle:</Typography>
            <Typography className="text-gold">{dealerInfo.vehicle}</Typography>
            
            <Typography className="text-cream/60">List Price:</Typography>
            <Typography className="text-gold">{dealerInfo.listPrice}</Typography>
            
            <Typography className="text-cream/60">Potential Discount:</Typography>
            <Typography className="text-gold">{dealerInfo.estimatedDiscount}</Typography>
            
            <Typography className="text-cream/60">Target Price:</Typography>
            <Typography className="text-gold font-bold">{dealerInfo.targetPrice}</Typography>
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="luxury-button w-full py-4 text-navy font-medium tracking-wider flex items-center justify-center gap-2"
              onClick={handleInitiateCall}
              disabled={isCallInitiating}
            >
              <PhoneIcon className="h-5 w-5" />
              {isCallInitiating ? 'Initiating Call...' : 'Initiate Call with Dealer'}
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default NegotiationSummary;
