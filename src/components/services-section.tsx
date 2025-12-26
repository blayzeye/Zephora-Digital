'use client';

import Image from 'next/image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Code, Smartphone, Palette, Eye } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Section } from './section';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import CoachingExample from './examples/coaching-example';
import GymExample from './examples/gym-example';

const WebDevCard = ({
  title,
  benefits,
  price,
  exampleComponent,
  preview,
}: {
  title: string;
  benefits: string[];
  price: number;
  exampleComponent: React.ReactNode;
  preview: React.ReactNode;
}) => (
  <Dialog>
    <Card className="glassmorphism group flex flex-col transition-all duration-300 ease-in-out hover:border-primary hover:-translate-y-2">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <DialogTrigger asChild>
          <div className="aspect-[4/3] rounded-lg bg-black/30 p-2 border border-border cursor-pointer relative overflow-hidden">
            <div className="bg-background rounded-t-md p-1.5 flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-white text-black h-full rounded-b-md p-2 overflow-hidden">
              {preview}
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-8 h-8 text-white" />
            </div>
          </div>
        </DialogTrigger>
        <ul className="space-y-2 text-foreground/80">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm text-foreground/60">
          Starts at <span className="font-bold text-primary">${price}</span>
        </p>
        <DialogTrigger asChild>
          <Button variant="outline">View Example</Button>
        </DialogTrigger>
      </CardFooter>
    </Card>
    <DialogContent className="max-w-7xl h-[90vh] flex flex-col">
      <DialogHeader>
        <DialogTitle>{title} - Live Preview</DialogTitle>
      </DialogHeader>
      <div className="flex-grow overflow-auto rounded-lg border">
        {exampleComponent}
      </div>
    </DialogContent>
  </Dialog>
);

const AppDevCard = ({
  title,
  features,
  imageId,
}: {
  title: string;
  features: string[];
  imageId: string;
}) => {
  const image = PlaceHolderImages.find((img) => img.id === imageId);
  return (
    <Card className="glassmorphism group flex flex-col transition-all duration-300 ease-in-out hover:border-primary hover:-translate-y-2 overflow-hidden">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4 flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-2/5 flex-shrink-0">
          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-2xl h-[250px] w-[125px]">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <ul className="space-y-2 text-foreground/80">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Request Demo</Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection = () => {
  return (
    <Section id="services">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">
          Our Services
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/70 mt-4">
          From concept to launch, we provide the expertise to build outstanding
          digital products.
        </p>
      </div>

      <Tabs defaultValue="web" className="w-full">
        <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 bg-background/70 border border-border">
          <TabsTrigger value="web" className="gap-2">
            <Code className="w-4 h-4" /> Web Development
          </TabsTrigger>
          <TabsTrigger value="app" className="gap-2">
            <Smartphone className="w-4 h-4" /> App Development
          </TabsTrigger>
          <TabsTrigger value="ui" className="gap-2">
            <Palette className="w-4 h-4" /> UI/UX & Branding
          </TabsTrigger>
        </TabsList>
        <TabsContent value="web" className="mt-10">
          <div className="grid md:grid-cols-2 gap-8">
            <WebDevCard
              title="Coaching & Consulting"
              benefits={[
                'Appointment Booking',
                'Blog & Content Platform',
                'Payment Integration',
              ]}
              price={1200}
              exampleComponent={<CoachingExample />}
              preview={
                <div className="font-sans text-xs">
                  <div className="font-bold text-gray-800">
                    Jane Doe Coaching
                  </div>
                  <p className="text-gray-500 text-[10px]">
                    Unlock Your Potential
                  </p>
                  <div className="mt-2 p-2 bg-blue-100 text-blue-800 rounded text-center text-[10px]">
                    Book a Free Session
                  </div>
                </div>
              }
            />
            <WebDevCard
              title="Gym & Fitness"
              benefits={[
                'Class Schedules',
                'Membership Management',
                'Trainer Profiles',
              ]}
              price={1500}
              exampleComponent={<GymExample />}
              preview={
                <div className="font-sans text-xs">
                  <div className="font-bold text-red-700">POWER FIT</div>
                  <p className="text-gray-500 text-[10px]">
                    Strength & Endurance
                  </p>
                  <div className="mt-2 p-2 bg-red-500 text-white rounded text-center text-[10px]">
                    Join Now
                  </div>
                </div>
              }
            />
          </div>
        </TabsContent>
        <TabsContent value="app" className="mt-10">
          <div className="grid md:grid-cols-2 gap-8">
            <AppDevCard
              title="E-commerce App"
              features={[
                'Product Catalog',
                'Secure Checkout',
                'Order Tracking',
                'Push Notifications',
              ]}
              imageId="app-mockup-ecommerce"
            />
            <AppDevCard
              title="Food Delivery App"
              features={[
                'Restaurant Listings',
                'Real-time Tracking',
                'In-app Payments',
                'Ratings & Reviews',
              ]}
              imageId="app-mockup-food"
            />
          </div>
        </TabsContent>
        <TabsContent value="ui" className="mt-10">
          <Card className="glassmorphism text-center p-8 md:p-16">
            <CardHeader>
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-3xl">
                UI/UX & Branding
              </CardTitle>
              <CardDescription className="text-lg text-foreground/70 mt-2">
                We design intuitive interfaces and memorable brands that
                resonate with your audience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 max-w-2xl mx-auto">
              <p>
                Our design process is centered around your user. We conduct
                thorough research to understand their needs and behaviors,
                ensuring the final product is not only beautiful but also
                highly functional and easy to use. From wireframes and
                prototypes to a complete brand identity, we craft experiences
                that leave a lasting impression.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button>Discuss Your Design Needs</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Section>
  );
};

export default ServicesSection;
