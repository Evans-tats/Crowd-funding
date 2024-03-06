const Motto = () => {
  return (
    <div className="py-24 text-center text-gray-800 ">
        <h1 className="text-4xl md:text-5xl xl:text-6xl tracking-tight mb-12">
            <span className="capitalize">Empowering Dreams, One Backer at a Time on</span>
            <br />
            <span className="uppercase text-green-500">crowd-funding.</span>

        </h1>
        <button type
        className="inline-block px-6 py-2 bg-green-500
         text-white font-medium text-xs 
         leading-tight rounded-full shadow-md
          hover:bg-green-700">ADD project</button>
        
        <button type
        className="inline-block px-6 py-2 bg-green-500
         text-white font-medium text-xs 
         leading-tight rounded-full shadow-md
          hover:bg-green-700">BACK project</button>
    </div>
  )
}

export default Motto