export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Ride {
  id: string;
  pickup: Location;
  destination: Location;
  price: number;
  status: 'pending' | 'accepted' | 'in-progress' | 'completed';
  passengerName: string;
  driverName?: string;
}

export interface User {
  id: string;
  name: string;
  role: 'passenger' | 'driver';
  rating: number;
  rides: number;
}