import React from "react";

const Card = ({ title, description, icon: Icon }) => {
  return (
    <div className="rounded-lg shadow-lg flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-5 bg-black w-full max-w-[20rem] sm:max-w-[24rem] mx-auto">
      {Icon && (
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-800 self-start sm:self-center" />
      )}
      <div className="flex-1">
        <h2 className="font-bold text-base sm:text-lg text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
