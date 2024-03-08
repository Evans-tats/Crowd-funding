
export const ProjectDetails = () => {
  return (
    <div className="py-20 px-4">
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
    </div>
  )
}
export default ProjectDetails