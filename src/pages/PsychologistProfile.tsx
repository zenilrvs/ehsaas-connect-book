import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Star, Clock, MessageCircle, MapPin, Calendar, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingModal } from "@/components/BookingModal";
import { PaymentSuccess } from "@/components/PaymentSuccess";
import { psychologists } from "@/data/psychologists";
import { Psychologist } from "@/types/psychologist";

const PsychologistProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<{
    duration: number;
    amount: number;
    psychologist: Psychologist;
  } | null>(null);

  const psychologist = psychologists.find(p => p.id === id);

  if (!psychologist) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Psychologist Not Found</h1>
          <Button onClick={() => navigate('/')} variant="trust">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleBookingConfirm = (duration: 30 | 60, amount: number) => {
    // Simulate payment processing
    setIsBookingModalOpen(false);
    setBookingDetails({ duration, amount, psychologist });
    setShowPaymentSuccess(true);
  };

  const handleClosePaymentSuccess = () => {
    setShowPaymentSuccess(false);
    setBookingDetails(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="font-semibold text-foreground">Psychologist Profile</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6 animate-fade-in">
        {/* Profile Header */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src={psychologist.image} 
                alt={psychologist.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,${encodeURIComponent(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                      <rect width="80" height="80" fill="hsl(210, 100%, 56%)" rx="40"/>
                      <text x="40" y="50" font-family="Arial" font-size="28" fill="white" text-anchor="middle">
                        ${psychologist.name.split(' ').map(n => n[0]).join('')}
                      </text>
                    </svg>
                  `)}`;
                }}
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-xl font-bold text-foreground mb-1">{psychologist.name}</h1>
              <p className="text-muted-foreground mb-3">{psychologist.title}</p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-warm text-warm" />
                  <span className="font-medium">{psychologist.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{psychologist.experience} years</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{psychologist.totalSessions} sessions</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Pricing */}
        <Card className="p-6">
          <h2 className="font-semibold text-foreground mb-4">Session Rates</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/30 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-1">₹{psychologist.pricing[30]}</div>
              <div className="text-sm text-muted-foreground">30 minutes</div>
              <div className="text-xs text-muted-foreground mt-1">Quick consultation</div>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-1">₹{psychologist.pricing[60]}</div>
              <div className="text-sm text-muted-foreground">60 minutes</div>
              <div className="text-xs text-muted-foreground mt-1">In-depth session</div>
            </div>
          </div>
        </Card>

        {/* Specializations */}
        <Card className="p-6">
          <h2 className="font-semibold text-foreground mb-4">Specializations</h2>
          <div className="flex flex-wrap gap-2">
            {psychologist.specializations.map((spec, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-secondary/50 text-secondary-foreground"
              >
                {spec}
              </Badge>
            ))}
          </div>
        </Card>

        {/* About */}
        <Card className="p-6">
          <h2 className="font-semibold text-foreground mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed">{psychologist.bio}</p>
        </Card>

        {/* Languages */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Languages className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">Languages</h2>
          </div>
          <p className="text-muted-foreground">{psychologist.languages.join(", ")}</p>
        </Card>

        {/* Availability */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">Availability</h2>
          </div>
          <div className="space-y-1">
            {psychologist.availability.map((schedule, index) => (
              <p key={index} className="text-muted-foreground text-sm">{schedule}</p>
            ))}
          </div>
        </Card>

        {/* Book Session Button */}
        <div className="sticky bottom-4">
          <Button 
            variant="booking"
            size="lg"
            className="w-full"
            onClick={() => setIsBookingModalOpen(true)}
          >
            Book Session
          </Button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        psychologist={psychologist}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onBookingConfirm={handleBookingConfirm}
      />

      {/* Payment Success */}
      {showPaymentSuccess && bookingDetails && (
        <PaymentSuccess
          psychologist={bookingDetails.psychologist}
          duration={bookingDetails.duration}
          amount={bookingDetails.amount}
          onClose={handleClosePaymentSuccess}
        />
      )}
    </div>
  );
};

export default PsychologistProfile;