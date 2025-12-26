'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitContactForm, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Section } from './section';
import { Mail, Loader2, CheckCircle } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

const ContactSection = () => {
  const initialState: FormState = { message: '', errors: {} };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: state.message,
        });
      } else {
        toast({
          title: 'Success!',
          description: state.message,
          action: (
            <div className="flex items-center">
              <CheckCircle className="text-green-500" />
            </div>
          ),
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <Section id="contact" className="bg-background/80">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <Mail className="h-12 w-12 text-primary" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Let's Build Together</h2>
          <p className="text-lg text-foreground/70">
            Have a project in mind? We'd love to hear about it. Fill out the form, and we'll get back to you within 24 hours to discuss how we can help you achieve your goals.
          </p>
        </div>
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Tell us a little about your project.</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
                {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type</Label>
                <Select name="businessType" required>
                  <SelectTrigger id="businessType">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="smb">Small-Medium Business</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="individual">Individual / Personal Project</SelectItem>
                  </SelectContent>
                </Select>
                {state.errors?.businessType && <p className="text-sm text-destructive">{state.errors.businessType[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp (Optional)</Label>
                <Input id="whatsapp" name="whatsapp" placeholder="+1 (555) 123-4567" />
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default ContactSection;
