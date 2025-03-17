import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography
} from "@material-tailwind/react";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    carModel: '',
    year: '',
    mileage: '',
    desiredBudget: '',
    maxBudget: ''
  });

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative min-h-screen pt-24 bg-luxury">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            color: { value: "#C6A969" },
            links: {
              color: "#C6A969",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out"
            },
            size: {
              value: { min: 1, max: 3 },
            },
            opacity: {
              value: 0.3,
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["grab", "bubble"]
              },
              onClick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5
                }
              },
              bubble: {
                distance: 200,
                size: 4,
                duration: 2,
                opacity: 0.3
              },
              push: {
                quantity: 4
              }
            }
          }
        }}
      />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography className="text-center mb-2 text-gold text-sm tracking-[0.3em] uppercase">
            Exclusive Luxury Vehicle Acquisition
          </Typography>
          <Typography className="text-center mb-12 text-5xl md:text-6xl font-playfair">
            Your <span className="gold-gradient-text">Prestige</span> Awaits
          </Typography>

          <Card className="w-full max-w-3xl mx-auto luxury-card">
            <CardHeader className="p-6 m-4 border-b border-gold/20">
              <Typography variant="h4" className="text-gold text-center font-playfair">
                Bespoke Vehicle Negotiation
              </Typography>
            </CardHeader>

            <CardBody className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Input
                    label="Car Model"
                    size="lg"
                    value={formData.carModel}
                    onChange={(e) => setFormData({...formData, carModel: e.target.value})}
                  />
                </div>

                <div>
                  <Input
                    label="Year"
                    size="lg"
                    type="number"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                  />
                </div>

                <div>
                  <Input
                    label="Mileage"
                    size="lg"
                    type="number"
                    value={formData.mileage}
                    onChange={(e) => setFormData({...formData, mileage: e.target.value})}
                  />
                </div>

                <div>
                  <Input
                    label="Desired Budget"
                    size="lg"
                    type="number"
                    value={formData.desiredBudget}
                    onChange={(e) => setFormData({...formData, desiredBudget: e.target.value})}
                  />
                </div>

                <div className="md:col-span-2">
                  <Input
                    label="Maximum Budget"
                    size="lg"
                    type="number"
                    value={formData.maxBudget}
                    onChange={(e) => setFormData({...formData, maxBudget: e.target.value})}
                  />
                </div>

                <div className="md:col-span-2 mt-8">
                  <Button
                    size="lg"
                    className="luxury-button w-full py-4 text-navy font-medium tracking-wider"
                  >
                    Begin Exclusive Search
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
