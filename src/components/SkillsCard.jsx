import React from 'react';

const SkillsCard = ({title, percent}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg flex flex-col mb-6 gap-6 h-[150px] w-[360px] p-4 bg-black">
      <h3>{title}</h3>
      <progress className='h-2.5 text-purple-800 w-[320px] progress-bar' value={percent} max={100} ></progress>
      <p className="text-right">{percent}</p>
    </div>
  );
}

export default SkillsCard;
