import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Calendar, CreditCard } from "lucide-react";
import { Psychologist, PRICING } from "@/types/psychologist";

interface BookingModalProps {
  psychologist: Psychologist | null;
  isOpen: boolean;
  onClose: () => void;
  onBookingConfirm: (duration: 30 | 60, amount: number) => void;
}

export const BookingModal = ({ psychologist, isOpen, onClose, onBookingConfirm }: BookingModalProps) => {
  const [selectedDuration, setSelectedDuration] = useState<30 | 60>(30);

  if (!psychologist) return null;

  const handlePayment = () => {
    const amount = PRICING[selectedDuration];
    onBookingConfirm(selectedDuration, amount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4 animate-slide-up">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Book Session</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Psychologist Info */}
          <Card className="p-4 bg-muted/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <img 
                  src={psychologist.image} 
                  alt={psychologist.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml,${encodeURIComponent(`
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <rect width="48" height="48" fill="hsl(210, 100%, 56%)" rx="24"/>
                        <text x="24" y="30" font-family="Arial" font-size="16" fill="white" text-anchor="middle">
                          ${psychologist.name.split(' ').map(n => n[0]).join('')}
                        </text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{psychologist.name}</h3>
                <p className="text-sm text-muted-foreground">{psychologist.title}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-warm text-warm" />
                  <span className="text-xs text-muted-foreground">{psychologist.rating}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Session Duration Selection */}
          <div>
            <h4 className="font-medium mb-3 text-foreground">Choose Session Duration</h4>
            <div className="grid grid-cols-2 gap-3">
              <Card 
                className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-medium ${
                  selectedDuration === 30 
                    ? 'ring-2 ring-primary bg-primary/5' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => setSelectedDuration(30)}
              >
                <div className="text-center">
                  <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <div className="font-semibold text-foreground">30 Minutes</div>
                  <div className="text-lg font-bold text-primary mt-1">₹600</div>
                  <div className="text-xs text-muted-foreground">Quick consultation</div>
                </div>
              </Card>
              
              <Card 
                className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-medium ${
                  selectedDuration === 60 
                    ? 'ring-2 ring-primary bg-primary/5' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => setSelectedDuration(60)}
              >
                <div className="text-center">
                  <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <div className="font-semibold text-foreground">60 Minutes</div>
                  <div className="text-lg font-bold text-primary mt-1">₹900</div>
                  <div className="text-xs text-muted-foreground">In-depth session</div>
                  <Badge variant="secondary" className="mt-1 text-xs">Popular</Badge>
                </div>
              </Card>
            </div>
          </div>

          {/* Summary */}
          <Card className="p-4 bg-muted/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Session Duration:</span>
              <span className="font-medium text-foreground">{selectedDuration} minutes</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-muted-foreground">Amount:</span>
              <span className="text-lg font-bold text-primary">₹{PRICING[selectedDuration]}</span>
            </div>
            <div className="border-t pt-2">
              <p className="text-xs text-muted-foreground">
                <Calendar className="w-3 h-3 inline mr-1" />
                You can schedule the session after payment via Calendly
              </p>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="w-full"
            >
              Cancel
            </Button>
            <Button 
              variant="payment"
              onClick={handlePayment}
              className="w-full"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Pay ₹{PRICING[selectedDuration]}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};