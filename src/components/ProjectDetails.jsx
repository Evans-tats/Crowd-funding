import { setGlobalState } from "../Store"

export const ProjectDetails = () => {
  return (
    <div className="py-20 px-4 flex flex-col justify-center">
        <div className='flex justify-start items-start flex-wrap sm:space-x-4 '>
        <img src="https://e0.pxfuel.com/wallpapers/630/889/desktop-wallpaper-anonymous-wonderful-anonymous-background-fn-ng-thumbnail.jpg" alt="Project picture" 
        className="rounded-xl object-cover sm:w-1/3 w-full h-64"/>
        <div className="sm:py-0 py-4">
            <div>
                <h5>I'm Vengeance</h5>
                <small>3 days left</small>
            </div>
            <div className='flex justify-between items-center w-full'>
               <div className="flex justify-start space-x-2">
                    <small>09xe....136f1</small>
                    <small>{16} Backings</small>
               </div>
               <div className="flex">
                    <small>open</small>
               </div>
            </div>

        </div>
        </div>
        <div className='sm:mt-4'>
            <p className="text-sm font-light">
            This iconic sentence decribes the Batman 
            as what he represents, 
            “I am vengeance” meaning that someone who
            is doing bad stuff to people will eventually be hit by vengence 
            for his actions by Batman, for ones who can't defend themselves.
            </p>
            <div className="w-full bg-gray-300 mt-4">
                <div className='bg-green-600 text-green-100 p-0.5 text-xs rounded-l-full
                leading-none' style={{width: '50%'}}></div>
            </div>

            <div className="flex justify-between">
                <div >
                    <small>{3} ETH Raised</small>
                </div>
                <div>
                    <small>{10} ETH</small>
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