import React from "react";

const Skills = () => {
    const skills = ['Frontend Development','Backend Development','Mobile App Development','Data Analytics','App Search Optimization','Search Engine Optiimization','Server Management','Digital Graphics','Pencil Art','Piano','Lead Guitar','Acoustic Guitar','Bass Guitar'];

    const skillset = skills.map((skill)=> <div class="badge sm:text-sm badge-primary md:badge-lg px-12 py-6 m-2">{skill}</div>);
  return (
    <div>
      <div name='skills' className="bg-slate-200 text-center py-10">
        <div class="text-4xl font-bold mb-10 pb-8 border-zinc-100">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            My Skills
          </span>
        </div>


        <div className="md:px-28">
        {skillset}
        </div>
      </div>
    </div>
  );
};

export default Skills;
