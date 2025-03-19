import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const CallStatus = () => {
  const dealerInfo = {
    name: "Luxury Motors Beverly Hills",
    contact: "James Anderson",
    vehicle: "2023 Mercedes-Benz S-Class",
    listPrice: "$125,000",
    estimatedDiscount: "$8,000",
    targetPrice: "$117,000",
  };

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
            <Typography className="text-gold">7 minutes</Typography>
            
            <Typography className="text-cream/60">Final Price:</Typography>
            <Typography className="text-gold font-bold">$117,000</Typography>
            
             <Typography className="text-cream/60">Savings:</Typography>
            <Typography className="text-gold">$8,000</Typography>

            <Typography className="text-cream/60">Dealer Name:</Typography>
            <Typography className="text-gold">{dealerInfo.name}</Typography>

            <Typography className="text-cream/60">Contact Person:</Typography>
            <Typography className="text-gold">{dealerInfo.contact}</Typography>

            <Typography className="text-cream/60">Vehicle:</Typography>
            <Typography className="text-gold">{dealerInfo.vehicle}</Typography>

            <Typography className="text-cream/60">List Price:</Typography>
            <Typography className="text-gold">{dealerInfo.listPrice}</Typography>

             <Typography className="text-cream/60">Estimated Discount:</Typography>
            <Typography className="text-gold">{dealerInfo.estimatedDiscount}</Typography>

            <Typography className="text-cream/60">Target Price:</Typography>
            <Typography className="text-gold">{dealerInfo.targetPrice}</Typography>

            <Typography className="text-cream/60">Meetup Location:</Typography>
            <Typography className="text-gold">
              9876 Wilshire Boulevard, Beverly Hills, CA 90210
            </Typography>

            <Typography className="text-cream/60">Meetup Date:</Typography>
            <Typography className="text-gold">2025-03-22</Typography>

            <Typography className="text-cream/60">Contact Number:</Typography>
            <Typography className="text-gold">310-555-7890</Typography>
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

          <div className="mt-6 p-4 bg-navy/40 rounded-lg">
            <Typography className="text-gold/80 font-playfair mb-2">
              Car Status Description:
            </Typography>
            <Typography className="text-cream/80">
              The negotiation resulted in securing the 2023 Mercedes-Benz S-Class
              at the target price of $117,000, reflecting a savings of $8,000 from
              the original list price. The vehicle is in excellent condition,
              equipped with advanced technological features and luxurious amenities.
              The agreement includes an extended warranty and a premium maintenance
              package for the first year, ensuring peace of mind. Additionally, a
              preferential financing rate was secured, along with a complementary
              ceramic coating treatment to protect the vehicle's exterior.
            </Typography>
          </div>

          <div className="mt-6 p-4 bg-navy/40 rounded-lg">
            <Typography className="text-gold/80 font-playfair mb-2">
              Side Note:
            </Typography>
            <Typography className="text-cream/80">
              Please remember to bring all necessary documents for the meetup,
              including your driver's license, proof of insurance, and any pre-approval
              documents from your bank or credit union.
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CallStatus;
