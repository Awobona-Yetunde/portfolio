import React from 'react';

const Card = ({title, description, icon: Icon}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg flex mb-6 gap-3 h-[150px] w-[460px] p-3 bg-black">
      {Icon && <Icon className="w-12 h-12 mx-auto mt-4 text-purple-800" />}
      <div>
        <h2 className="font-bold text-xl mb-2 text-white">{title}</h2>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;
