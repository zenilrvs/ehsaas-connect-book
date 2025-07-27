import { Heart, Target, Eye, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">About EHSAAS</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to providing compassionate, professional mental health care that empowers individuals to heal and thrive.
            </p>
          </div>

          {/* About EHSAAS */}
          <div className="mb-20">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-primary mr-4" />
                  <h2 className="text-3xl font-bold text-foreground">About EHSAAS</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                 At Ehsaas Therapy Centre (ETC), we believe in creating a world where healing is not just possible, but accessible, compassionate, and deeply transformative.
Our name, Ehsaas, meaning “feeling” or “experience,” is central to everything we do. Our acronym, ETC, serves as a gentle reminder that there is so much more to each of us: more healing, more growth, more connection, more freedom, and more life to experience.

                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                 We provide a therapeutic space that is trauma-informed, queer-affirmative, neurodivergent-aware, and sex-positive, honouring and celebrating the unique journeys of individuals.Our diverse therapeutic approaches are designed to help you build insight and process thoughts and emotions, safely and with compassion, fostering deeper healing.

                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                What truly distinguishes us is our unwavering commitment to building a safe space not only for our clients but also for our mental health professionals. We firmly believe that the well-being of therapists is integral to the quality of care they provide. Therefore, we ensure fair compensation, professional respect, and an emotionally supportive working environment without compromise.
We offer a wide range of therapists, each with unique expertise, language skills, lived experience, and therapeutic style, ensuring that care is not only competent but also truly affirming. Whether you’re seeking cultural sensitivity, identity-affirming support, or a specialist in a particular area, we are here to match you with the right therapist. This ensures that clients can find a therapist who truly resonates with them. Because healing is not one-size-fits-all, and at ETC, we deeply respect that.

                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary mr-4" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <ul className="text-lg text-muted-foreground leading-relaxed space-y-2">
                  <li>• To provide accessible, inclusive, and high-quality therapy rooted in safety, empathy, and respect.</li>
                  <li>• To create emotionally safe and empowering spaces for both clients and mental health professionals.</li>
                  <li>• To offer trauma-informed, queer-affirmative, neurodivergent-aware, and sex-positive therapy from skilled, diverse practitioners.</li>
                  <li>• To remind everyone that they are more than their pain and that healing leads to more: more growth, more connection, more freedom, and more life to experience.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-secondary mr-4" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <ul className="text-lg text-muted-foreground leading-relaxed space-y-2">
To help build a world filled with more healed individuals, where people feel seen, safe, and supported.
To nurture care-based communities that prioritize holistic well-being and deeper engagement with life’s emotional landscape.

                </ul>
              </CardContent>
            </Card>
          </div>

          {/* About Founder */}
          <div className="mb-20">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <User className="w-8 h-8 text-secondary mr-4" />
                  <h2 className="text-3xl font-bold text-foreground">About the Founder</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="w-48 h-48 mx-auto bg-gradient-hero rounded-full flex items-center justify-center">
                      <User className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Dr. [Founder Name]</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      With over [X] years of experience in clinical psychology and mental health advocacy, our founder 
                      recognized the urgent need for accessible, quality mental health care in our communities. Having 
                      witnessed firsthand the transformative power of therapy, they founded EHSAAS to ensure that 
                      geographical, financial, and social barriers never prevent someone from getting the help they need.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      Dr. [Name] holds a [Degree] from [Institution] and is a licensed clinical psychologist specializing 
                      in [Specializations]. Their passion for mental health extends beyond individual practice to systemic 
                      change, working to destigmatize mental health conversations in our society.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      "Mental health is not a luxury, it's a necessity. Everyone deserves to feel heard, understood, 
                      and supported on their journey to wellness." - Dr. [Founder Name]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compassion</h3>
                <p className="text-muted-foreground">We approach every interaction with empathy, understanding, and genuine care.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">We maintain the highest standards of professional care and ethical practice.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">We believe mental health care should be available to everyone, everywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;