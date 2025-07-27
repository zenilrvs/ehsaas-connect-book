import { Mail, Phone, Instagram, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sessions.ehsaas@gmail.com",
      description: "Send us your questions anytime",
      href: "mailto:sessions.ehsaas@gmail.com"
    },
    {
      icon: Phone,
      title: "WhatsApp Support",
      value: "+91-7411948161",
      description: "Chat with us on WhatsApp",
      href: "https://wa.me/917411948161"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@ehsaas.therapy.centre",
      description: "Follow us for daily insights",
      href: "https://instagram.com/ehsaas.therapy.centre"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to support you on your mental health journey. Reach out with any questions or to schedule a session.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Enter your last name" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input placeholder="What is this regarding?" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us how we can help you..." 
                        rows={5}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <p className="text-primary font-medium">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Emergency:</strong> For mental health emergencies, please call your local emergency services or crisis helpline.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button asChild className="w-full" variant="outline">
                      <a href="/team">Book a Session</a>
                    </Button>
                    <Button asChild className="w-full" variant="outline">
                      <a href="/faqs">View FAQs</a>
                    </Button>
                    <Button asChild className="w-full" variant="outline">
                      <a href="https://wa.me/917411948161" target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-12">
            <Card className="bg-destructive/10 border-destructive/20 p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-destructive mb-3">
                  Mental Health Emergency?
                </h3>
                <p className="text-destructive/80 mb-4">
                  If you are in crisis or having thoughts of suicide, please seek immediate help. 
                  Contact your local emergency services or call a crisis helpline.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="destructive" asChild>
                    <a href="tel:112">Emergency Services: 112</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="tel:9152987821">Crisis Helpline: 915-298-7821</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;