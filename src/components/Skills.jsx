import React from 'react';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <section id='skills' className="py-12 md:mt-12 md:py-0">
      <div className="items-center min-h-[calc(100vh-6rem)] flex justify-center mx-auto">
        <div className='flex flex-col gap-12'>
            <h2 className="text-5xl font-bold text-center">
              My <span className="text-purple-800">Skills</span>
            </h2>
            <p className='text-center'>Technologies and tools i use to create amazing projects</p>

          <div className="grid md:grid-cols-3 justify-center gap-6 ">
            <SkillsCard title="HTML/CSS"  percent="95" />
            <SkillsCard title="JavaScript" percent="95" />
            <SkillsCard title="Next.js" percent="70" />
            <SkillsCard title="Tailwind CSS" percent="95" />
            <SkillsCard title="PHP" percent="70" />
            <SkillsCard title="Python" percent="70" />
            <SkillsCard title="C#" percent="70" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
