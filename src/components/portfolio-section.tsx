import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight } from 'lucide-react';
import { Section } from './section';

const portfolioItems = [
  {
    id: 'portfolio-1',
    title: 'SaaS Analytics Dashboard',
    description: 'A comprehensive analytics platform for a B2B software company, providing deep insights into user engagement and business metrics.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    liveLink: '#',
  },
  {
    id: 'portfolio-2',
    title: 'Aura Fashion E-commerce',
    description: 'An elegant and high-performance e-commerce site for a luxury fashion brand, featuring a seamless shopping experience.',
    tags: ['Shopify', 'React', 'GraphQL', 'Styled Components'],
    liveLink: '#',
  },
  {
    id: 'portfolio-3',
    title: 'Fintech Corporate Hub',
    description: 'A secure and professional corporate website for a financial technology firm, built to instill trust and authority.',
    tags: ['React', 'Gatsby', 'Contentful', 'Framer Motion'],
    liveLink: '#',
  },
  {
    id: 'portfolio-4',
    title: 'Wanderlust Travel Bookings',
    description: 'A user-friendly booking platform for a bespoke travel agency, integrating multiple APIs for flights, hotels, and tours.',
    tags: ['Vue.js', 'Node.js', 'Express', 'Google Maps API'],
    liveLink: '#',
  },
];

const PortfolioSection = () => {
  return (
    <Section id="portfolio" className="bg-background/80">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Work</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/70 mt-4">
          We take pride in the solutions we've delivered. Explore some of our recent projects.
        </p>
      </div>

      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {portfolioItems.map((item) => {
            const image = PlaceHolderImages.find((img) => img.id === item.id);
            return (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="glassmorphism h-full flex flex-col group overflow-hidden">
                    <CardHeader>
                      {image && (
                        <div className="overflow-hidden rounded-lg aspect-video mb-4">
                          <Image
                            src={image.imageUrl}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      )}
                      <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-foreground/70 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary border-none">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={item.liveLink} target="_blank">
                          View Live Site <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="ml-14" />
        <CarouselNext className="mr-14" />
      </Carousel>
    </Section>
  );
};

export default PortfolioSection;
