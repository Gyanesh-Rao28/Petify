import React from 'react'
import { Home, Truck, PawPrint } from "lucide-react";

const HowItWork = () => {
  return (
    <>
      <div className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold">Here's how it works</h2>
            <p className="text-gray-600">
              You can order multiple recipes. Perfect for taste-testing and
              offering your dog a variety of flavors! Bring it on, picky pups.
            </p>
          </div>
          <div className="flex justify-between items-center text-center flex-wrap">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <PawPrint className="mx-auto h-12 w-12 text-[#002A48]" />
              <h3 className="mt-2 font-semibold">Tell us about your pet</h3>
              <p className="text-sm text-gray-600 mt-1">
                From age to breed and everywhere in between, we want to know
                more about your best buddy!
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6">
              <Home className="mx-auto h-12 w-12 text-[#002A48]" />
              <h3 className="mt-2 font-semibold">
                View your pup's recommendations
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Personalized supplements that target your dog's specific needs,
                all based on their unique profile.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6">
              <Truck className="mx-auto h-12 w-12 text-[#002A48]" />
              <h3 className="mt-2 font-semibold">
                Get personalized supplements delivered
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                All the things they need and none of the things they don't.
                Conveniently delivered for daily use, like clockwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWork