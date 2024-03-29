import { setGlobalState, useGlobalState } from "../Store"
const Motto = () => {
    const [stats] = useGlobalState('stats')
  return (
    <div className="py-24 text-center text-gray-800 ">
        <h1 className="text-4xl md:text-5xl xl:text-6xl tracking-tight mb-12">
            <span className="capitalize">Empowering Dreams, One Backer at a Time on</span>
            <br />
            <span className="uppercase text-green-500">crowd-funding.</span>

        </h1>
        <div className="flex justify-center items-center space-x-4">
            <button type
            className="inline-block px-6 py-2 bg-green-500
            font-medium text-xs 
            leading-tight rounded-full shadow-md
             hover:bg-green-400 uppercase bg-transparent text-gray-600 first-letter first-letter"
            onClick={() => setGlobalState('createModal', 'scale-100')}
             >ADD project
            </button>
    
        </div>

        <div className="mt-10 flex">
            <div 
                className="flex flex-col justify-center items-center
                h-20 border shadow-md w-full">
                <span className="text-lg ">{stats.totalProjects}</span>

                <span>Projects</span>
            </div>
            <div 
                className="flex flex-col justify-center items-center
                h-20 border shadow-md w-full">
                <span className="text-lg ">{stats.totalBackings}</span>

                <span>TOTAL BACKINGS</span>
            </div>
            <div 
                className="flex flex-col justify-center items-center
                h-20 border shadow-md w-full">
                <span className="text-lg ">{stats.totalDonations} ETH</span>

                <span>TOTAL AMOUNT DONATED</span>
            </div>
        </div>
        
    </div>
  )
}

export default Motto