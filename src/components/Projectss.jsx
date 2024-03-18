import React from 'react';
import { Link } from "react-router-dom";
import Identicons from 'react-identicons';

const Projectss = ( {projects}) => {
  return (
    <div className="flex flex-col px-6">
        <div className="flex justify-center items-center flex-wrap">
            {projects.map((project, i) => ( <ProjectCard key={i} project={project} />))}
        </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
    <div className="rounded-lg shadow-lg bg-white w-64 m-4">
        <Link to={"/projects/" + project.id}>
            <img src={project.imageURL} alt={project.title}
                className='rounded-lg w-full object-cover'
            />
            <div className='p-4'>
                <h5>{project.title}</h5>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-center mb-3'>
                        <Identicons className="rounded-full shadow-md" string="0x15...1ae" size={15} />
                        <small className='text-gray-700'>0x15...1ae</small>
                    </div>
                    <small>2 days left</small>

                </div>
                <div className='w-full bg-gray-300'>
                    <div className='bg-green-700 text-xs font-medium text-green-100 text-center p-0.5 leading-none
                    rounded-l-full' style={{width: '50%'}}></div>

                </div>
                <div className='flex justify-between items-center flex-wrap mt-1'>
                    <small className="text-gray-800">{10} Backers</small>
                    <small>open</small>
                </div>
            </div>
            
        </Link>
    </div>
);

export default Projectss
