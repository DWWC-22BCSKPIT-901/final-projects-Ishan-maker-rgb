import React from 'react';
import { MapPin } from 'lucide-react';
import type { Location } from '../types';

interface RideMapProps {
  pickup: Location;
  destination: Location;
}

export function RideMap({ pickup, destination }: RideMapProps) {
  return (
    <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50" />
      <div className="absolute inset-0 flex items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <MapPin className="text-blue-600" size={24} />
          <span className="font-medium">{pickup.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-red-600" size={24} />
          <span className="font-medium">{destination.address}</span>
        </div>
      </div>
    </div>
  );
}