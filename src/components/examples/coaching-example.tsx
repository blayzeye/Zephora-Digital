import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Clock, Video, Star, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const CoachingExample = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'coaching-hero');
    const testimonial1Image = PlaceHolderImages.find(img => img.id === 'testimonial-1');
    const testimonial2Image = PlaceHolderImages.find(img => img.id === 'testimonial-2');
    const testimonial3Image = PlaceHolderImages.find(img => img.id === 'testimonial-3');


  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Jane Doe Coaching</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Testimonials</a>
          </nav>
          <Button>Book a Session</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 bg-blue-600 text-white">
        {heroImage && 
            <Image 
                src={heroImage.imageUrl}
                alt="Inspirational background" 
                layout="fill"
                objectFit="cover" 
                className="absolute inset-0 z-0 opacity-20"
                data-ai-hint={heroImage.imageHint}
            />
        }
        <div className='relative z-10'>
            <h1 className="text-5xl font-extrabold mb-4">Unlock Your Full Potential</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">Empowering you to achieve your personal and professional goals through tailored coaching sessions.</p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Book a Free Discovery Call
            </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How I Can Help You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-fit mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Personal Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Overcome limiting beliefs, build confidence, and create a life you love.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-fit mb-4">
                  <ChevronRight className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Career Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Navigate career transitions, improve leadership skills, and find more fulfillment at work.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-fit mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Productivity & Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master your time, overcome procrastination, and achieve your most ambitious goals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-600 mb-6">Booking a session is the first step towards transformation. Choose a package that works for you and let's get started.</p>
            <ul className="space-y-4">
              <li className="flex items-center"><Calendar className="w-5 h-5 text-blue-600 mr-3" /><span>Flexible scheduling to fit your life.</span></li>
              <li className="flex items-center"><Video className="w-5 h-5 text-blue-600 mr-3" /><span>Sessions conducted via secure video call.</span></li>
              <li className="flex items-center"><Clock className="w-5 h-5 text-blue-600 mr-3" /><span>60-minute focused sessions.</span></li>
            </ul>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Single Session</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-extrabold mb-4">$150</p>
              <p className="text-gray-600 mb-6">A one-hour session to tackle a specific challenge or goal.</p>
              <Button className="w-full" size="lg">Book Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What My Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
                        </div>
                        <p className="italic text-gray-600 mb-4">"Jane helped me gain clarity and confidence during a major career change. I couldn't have done it without her!"</p>
                        <div className="flex items-center">
                            {testimonial1Image && <Avatar className="h-10 w-10 mr-4">
                                <AvatarImage src={testimonial1Image.imageUrl} alt="Sarah L." data-ai-hint={testimonial1Image.imageHint} />
                                <AvatarFallback>SL</AvatarFallback>
                            </Avatar>}
                            <div>
                                <p className="font-semibold">Sarah L.</p>
                                <p className="text-sm text-gray-500">Marketing Manager</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="pt-6">
                        <div className="flex mb-4">
                             {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
                        </div>
                        <p className="italic text-gray-600 mb-4">"The productivity techniques I learned have been a game-changer. I'm more focused and less stressed."</p>
                        <div className="flex items-center">
                           {testimonial2Image && <Avatar className="h-10 w-10 mr-4">
                                <AvatarImage src={testimonial2Image.imageUrl} alt="Mike R." data-ai-hint={testimonial2Image.imageHint} />
                                <AvatarFallback>MR</AvatarFallback>
                            </Avatar>}
                            <div>
                                <p className="font-semibold">Mike R.</p>
                                <p className="text-sm text-gray-500">Entrepreneur</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="pt-6">
                        <div className="flex mb-4">
                             {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
                        </div>
                        <p className="italic text-gray-600 mb-4">"A truly transformative experience. Jane is an exceptional coach who genuinely cares."</p>
                        <div className="flex items-center">
                            {testimonial3Image && <Avatar className="h-10 w-10 mr-4">
                                <AvatarImage src={testimonial3Image.imageUrl} alt="Emily C." data-ai-hint={testimonial3Image.imageHint}/>
                                <AvatarFallback>EC</AvatarFallback>
                            </Avatar>}
                            <div>
                                <p className="font-semibold">Emily C.</p>
                                <p className="text-sm text-gray-500">Creative Director</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Jane Doe Coaching. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CoachingExample;
