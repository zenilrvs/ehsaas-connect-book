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
}

export interface BookingSession {
  duration: 30 | 60;
  price: number;
  psychologistId: string;
}

export const PRICING = {
  30: 600, // 30 minutes for 600 rupees
  60: 900, // 1 hour for 900 rupees
} as const;