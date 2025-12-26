import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dumbbell, Calendar, Users, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const GymExample = () => {
    const heroImage = PlaceHolderImages.find(img => img.id === 'gym-hero');
    const class1Image = PlaceHolderImages.find(img => img.id === 'gym-class-1');
    const class2Image = PlaceHolderImages.find(img => img.id === 'gym-class-2');
    const class3Image = PlaceHolderImages.find(img => img.id === 'gym-class-3');

  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-black tracking-wider text-red-600">POWER FIT</div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="hover:text-red-600 transition-colors">Classes</a>
            <a href="#" className="hover:text-red-600 transition-colors">Membership</a>
            <a href="#" className="hover:text-red-600 transition-colors">About</a>
            <Button variant="destructive">Join Now</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        {heroImage && <Image 
            src={heroImage.imageUrl} 
            alt="Gym background" 
            layout="fill" 
            objectFit="cover" 
            className="absolute inset-0 z-0 opacity-40"
            data-ai-hint={heroImage.imageHint}
        />}
        <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-7xl font-black uppercase tracking-widest mb-4">
            Unleash Your<br/><span className="text-red-600">Inner Strength</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">State-of-the-art equipment, elite trainers, and a community that motivates.</p>
          <Button size="lg" variant="destructive" className="text-lg px-8 py-6">
            Get Your Free 7-Day Pass
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Power Fit?</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Dumbbell className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
              <p className="text-gray-400">Top-tier machines for every fitness goal.</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
              <p className="text-gray-400">Certified professionals to guide your journey.</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Classes</h3>
              <p className="text-gray-400">From HIIT to Yoga, we have a class for you.</p>
            </div>
             <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Clean & Safe</h3>
              <p className="text-gray-400">Pristine facilities for a worry-free workout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Classes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700 overflow-hidden group">
              {class1Image && <div className="h-56 relative">
                  <Image src={class1Image.imageUrl} alt="HIIT class" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform" data-ai-hint={class1Image.imageHint} />
              </div>}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Ignite HIIT</h3>
                <p className="text-gray-400 mb-4">High-intensity interval training to torch calories and boost metabolism.</p>
                <Button variant="link" className="text-red-500 p-0 h-auto">View Schedule <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700 overflow-hidden group">
              {class2Image && <div className="h-56 relative">
                  <Image src={class2Image.imageUrl} alt="Strength class" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform" data-ai-hint={class2Image.imageHint} />
              </div>}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Foundations Strength</h3>
                <p className="text-gray-400 mb-4">Build muscle and perfect your form with our foundational strength program.</p>
                <Button variant="link" className="text-red-500 p-0 h-auto">View Schedule <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-700 overflow-hidden group">
              {class3Image && <div className="h-56 relative">
                  <Image src={class3Image.imageUrl} alt="Yoga class" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform" data-ai-hint={class3Image.imageHint} />
              </div>}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Zen Flow Yoga</h3>
                <p className="text-gray-400 mb-4">Improve flexibility, balance, and mindfulness in our calming yoga sessions.</p>
                <Button variant="link" className="text-red-500 p-0 h-auto">View Schedule <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="bg-red-600 py-20 px-6 text-center">
          <div className="container mx-auto">
              <Zap className="w-16 h-16 mx-auto mb-4"/>
              <h2 className="text-4xl font-black uppercase mb-4">Membership Starts at $49/mo</h2>
              <p className="text-lg max-w-xl mx-auto mb-8">Unlimited access, exclusive perks, and a community that feels like family. No hidden fees. Cancel anytime.</p>
              <Button size="lg" variant="secondary" className="bg-black text-white hover:bg-gray-800">Become a Member</Button>
          </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6">
        <div className="container mx-auto text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} POWER FIT. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GymExample;
