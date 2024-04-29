"use client";

import { useState, ChangeEvent } from "react";

interface Filters {
  type: string;
  breed: string;
  age: string;
  location: string;
}

const PetFilter = () => {
  const [filters, setFilters] = useState<Filters>({
    type: "",
    breed: "",
    age: "",
    location: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg p-4 md:p-6 mt-12">
      <h2 className="text-lg lg:text-3xl font-semibold mb-4 text-[#002A48]">
        Filter
      </h2>
      <div className="w-full md:w-3/4">
        <div className="mb-4">
          <select
            name="type"
            onChange={handleChange}
            value={filters.type}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#002A48] focus:border-[#002A48]"
          >
            <option value="">Select Type</option>
            <option value="DOG">Dog</option>
            <option value="CAT">Cat</option>
            <option value="BIRD">Bird</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="breed"
            placeholder="Enter breed"
            value={filters.breed}
            onChange={handleChange}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#002A48] focus:border-[#002A48]"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="age"
            placeholder="Enter age"
            value={filters.age}
            onChange={handleChange}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#002A48] focus:border-[#002A48]"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={filters.location}
            onChange={handleChange}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#002A48] focus:border-[#002A48]"
          />
        </div>
      </div>
      <button
        onClick={() => {
          /* Implement filter application logic */
        }}
        className="w-full md:w-auto px-4 md:px-8 py-2 bg-[#002A48] text-white rounded-lg font-medium hover:bg-transparent hover:text-[#002A48] hover:border hover:border-[#002A48] transition-colors mt-4"
      >
        Filter
      </button>
    </div>
  );
};

export default PetFilter;
