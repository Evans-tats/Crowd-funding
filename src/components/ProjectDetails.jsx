import { setGlobalState } from "../Store"

export const ProjectDetails = ( { project }) => {
    console.log(project)
  return (
    <div className="py-20 px-4 flex flex-col justify-center">
        <div className='flex justify-start items-start flex-wrap sm:space-x-4 '>
        <img src={project.imageURL}alt={project.title} 
        className="rounded-xl object-cover sm:w-1/3 w-full h-64"/>
        <div className="sm:py-0 py-4">
            <div>
                <h5>{project.title}</h5>
                <small>3 days left</small>
            </div>
            <div className='flex justify-between items-center w-full'>
               <div className="flex justify-start space-x-2">
                    <small>{project.owner.slice(0,6)+ '...'+project.owner.slice(38, 42)}</small>
                    <small>{project.backers} Backings</small>
               </div>
               <div className='px-20 font-bold'>
               <div>
                        {project.status == 0 ? (
                            <small className='text-green-500'>Open</small>
                        ) : project.status == 1? (
                            <small className='text-green-500'>Approved</small>
                        ) : project.status ==2 ? (
                            <small className='text-gray-500'>Reverted</small>
                        ) : project.status ==3 ? (
                            <small className='text-red-500'>Deleted</small>
                        ) : (
                            <small className='text-orange-500'>Paid</small>
                        )}
                    </div>
               </div>
            </div>

        </div>
        </div>
        <div className='sm:mt-4'>
            <p className="text-sm font-light">{project.description}</p>
            <div className="w-full bg-gray-300 mt-4">
                <div className='bg-green-600 text-green-100 p-0.5 text-xs rounded-l-full
                leading-none' style={{width: project.raised / project.cost * 100}}></div>
            </div>

            <div className="flex justify-between">
                <div >
                    <small>{project.raised} ETH Raised</small>
                </div>
                <div>
                    <small>{project.cost} ETH</small>
                </div>
            </div>
            <div className="flex justify-center">
                <button type="button"
                className='inline-block px-6 py-2.5 rounded-full hover:bg-green-700
                shadow-md text-white bg-green-500'
                onClick={() => setGlobalState('backModal', 'scale-100')}>
                    BACK PROJECT
                </button>
                <button type="button"
                className='inline-block px-6 py-2.5 rounded-full hover:bg-green-700
                shadow-md text-white bg-gray-500'
                onClick={() => setGlobalState('updateModal', 'scale-100')}>
                    EDIT
                </button>
                <button type="button"
                className='inline-block px-6 py-2.5 rounded-full hover:bg-green-700
                shadow-md text-white bg-gray-500'>
                    PAYOUT
                </button>
                <button type="button"
                className='inline-block px-6 py-2.5 rounded-full hover:bg-red-600
                shadow-md text-white bg-red-500'>
                    BACK
                </button>
            </div>
        </div>
    </div>
  )
}
export default ProjectDetails