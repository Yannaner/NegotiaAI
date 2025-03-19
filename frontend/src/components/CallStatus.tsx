import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const CallStatus = () => {
  return (
    <Card className="luxury-card w-full max-w-3xl mx-auto">
      <CardHeader className="p-6 m-4 border-b border-gold/20">
        <Typography variant="h4" className="text-gold text-center font-playfair">
          Call Summary
        </Typography>
      </CardHeader>

      <CardBody className="p-8">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Typography className="text-cream/60">Status:</Typography>
            <Typography className="text-gold">Completed</Typography>
            
            <Typography className="text-cream/60">Duration:</Typography>
            <Typography className="text-gold">5 minutes</Typography>
            
            <Typography className="text-cream/60">Final Price:</Typography>
            <Typography className="text-gold font-bold">$116,500</Typography>
            
            <Typography className="text-cream/60">Savings:</Typography>
            <Typography className="text-gold">$8,500</Typography>
          </div>

          <div className="mt-6 p-4 bg-navy/40 rounded-lg">
            <Typography className="text-gold/80 font-playfair mb-2">
              Negotiation Highlights:
            </Typography>
            <ul className="list-disc list-inside space-y-2 text-cream/80">
              <li>Successfully negotiated extended warranty package</li>
              <li>Included premium maintenance package for first year</li>
              <li>Secured preferential financing rate at 2.9% APR</li>
              <li>Added complementary ceramic coating treatment</li>
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CallStatus;
