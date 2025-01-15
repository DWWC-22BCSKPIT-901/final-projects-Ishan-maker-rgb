import React from 'react';
import { Clock, DollarSign, User } from 'lucide-react';
import type { Ride } from '../types';

interface RideCardProps {
  ride: Ride;
  onAccept?: () => void;
  isDriver?: boolean;
}

export function RideCard({ ride, onAccept, isDriver }: RideCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <User className="text-gray-600" />
          <span className="font-medium">{ride.passengerName}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="text-green-600" />
          <span className="font-medium">${ride.price}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          <span>{ride.pickup.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-600" />
          <span>{ride.destination.address}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-600">
          <Clock size={16} />
          <span>Est. 15 mins</span>
        </div>
        {isDriver && ride.status === 'pending' && (
          <button
            onClick={onAccept}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Accept Ride
          </button>
        )}
      </div>
    </div>
  );
}