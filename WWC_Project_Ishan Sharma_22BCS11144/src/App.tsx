import React, { useState } from 'react';
import { Car, UserCircle } from 'lucide-react';
import { RideMap } from './components/RideMap';
import { RideCard } from './components/RideCard';
import type { Ride, User } from './types';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  role: 'passenger',
  rating: 4.8,
  rides: 24
};

const mockRides: Ride[] = [
  {
    id: '1',
    pickup: {
      latitude: 40.7128,
      longitude: -74.0060,
      address: '123 Main St, New York, NY'
    },
    destination: {
      latitude: 40.7614,
      longitude: -73.9776,
      address: '456 Park Ave, New York, NY'
    },
    price: 25.50,
    status: 'pending',
    passengerName: 'Alice Smith'
  },
  {
    id: '2',
    pickup: {
      latitude: 40.7305,
      longitude: -73.9352,
      address: '789 Broadway, Brooklyn, NY'
    },
    destination: {
      latitude: 40.7505,
      longitude: -73.9934,
      address: '321 Fifth Ave, New York, NY'
    },
    price: 32.75,
    status: 'pending',
    passengerName: 'Bob Johnson'
  }
];

function App() {
  const [userRole, setUserRole] = useState<'passenger' | 'driver'>('passenger');
  const [selectedRide, setSelectedRide] = useState<Ride | null>(mockRides[0]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Car className="text-blue-600" size={32} />
            <span className="text-xl font-bold">RideShare</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setUserRole(userRole === 'passenger' ? 'driver' : 'passenger')}
              className="text-gray-600 hover:text-gray-900"
            >
              Switch to {userRole === 'passenger' ? 'Driver' : 'Passenger'} View
            </button>
            <div className="flex items-center gap-2">
              <UserCircle size={24} />
              <span className="font-medium">{mockUser.name}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              {userRole === 'passenger' ? 'Book a Ride' : 'Available Rides'}
            </h2>
            {userRole === 'driver' ? (
              <div className="space-y-4">
                {mockRides.map((ride) => (
                  <RideCard
                    key={ride.id}
                    ride={ride}
                    isDriver={true}
                    onAccept={() => setSelectedRide(ride)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Pickup location"
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full p-3 border rounded-lg"
                  />
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Request Ride
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {selectedRide && (
              <>
                <h2 className="text-2xl font-bold">Ride Details</h2>
                <RideMap
                  pickup={selectedRide.pickup}
                  destination={selectedRide.destination}
                />
                <RideCard ride={selectedRide} />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;