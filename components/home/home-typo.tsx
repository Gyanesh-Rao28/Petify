import React from "react";

import { CheckCheck, ChevronRight, Play } from "lucide-react";

const HomeTypo = () => {
  return (
    <>
      <div className="text-[#002A48] p-4 rounded-lg mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-lg font-semibold mb-4">
          Benefits From Our Online Learning
        </h2>
        <ul>
          <li className="flex items-center mb-2">
            <CheckCheck className="h-12 w-12 mr-2 text-red-400" />
            <div>
              <strong>Online Degrees</strong>
              <p className="text-sm">
                Earn accredited degrees from the comfort of your home,
                respecting your own time and pace.
              </p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <CheckCheck className="h-12 w-12 mr-2 text-blue-400" />
            <div>
              <strong>Short Courses</strong>
              <p className="text-sm">
                Enhance your skills with our concise and focused short courses,
                designed for quick and effective learning.
              </p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <CheckCheck className="h-12 w-12 mr-2 text-green-400" />
            <div>
              <strong>Training from experts</strong>
              <p className="text-sm">
                Immerse yourself in knowledge with industry experts guiding you
                through each step.
              </p>
            </div>
          </li>
          <li className="flex items-center mb-4">
            <CheckCheck className="h-12 w-12 text-yellow-400" />
            <div>
              <strong>1.5k+ Video Courses</strong>
              <p className="text-sm">
                Dive into a vast library of our video courses covering multiple
                subjects, offering a visual learning experience.
              </p>
            </div>
          </li>
        </ul>
        <button className="bg-[#F7DBA7] text-[#002A48] font-bold py-2 px-4 rounded flex items-center">
          Read More
          <ChevronRight className="h-5 w-5 mr-2" />
        </button>
      </div>
    </>
  );
};

export default HomeTypo;
