export interface Psychologist {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  experience: number;
  rating: number;
  totalSessions: number;
  image: string;
  bio: string;
  languages: string[];
  availability: string[];
  calendlyLink: string;
  pricing: {
    30: number;
    60: number;
  };
}

export interface BookingSession {
  duration: 30 | 60;
  price: number;
  psychologistId: string;
}

// Individual pricing is now managed per psychologist in their pricing property