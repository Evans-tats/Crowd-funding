import {FaTimes} from 'react-icons/fa';
import { useGlobalState, setGlobalState} from '../Store';
const backProject = () => {
    const [backModal] = useGlobalState('backModal');
  return (
    <div className={`fixed top-0 left-0 w-screen flex item-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${backModal}`}>
        <div className="bg-white rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form>
                <div className='flex items-center justify-between'>
                    <p>#Project Title</p>
                    <button type="button"
                    className="border-0 bg-transparent focus:outline-none"
                    onClick={() => setGlobalState('backModal', 'scale-0')}>
                        <FaTimes />
                    </button>
                </div>

                <div className='flex justify-center items-center mt-4'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src="https://e0.pxfuel.com/wallpapers/630/889/desktop-wallpaper-anonymous-wonderful-anonymous-background-fn-ng-thumbnail.jpg" alt="project"
                         className='w-full h-full object-cover cursor-pointer'/>
                    </div>
                </div>

                <div className='flex justify-between items-center rounded-xl bg-gray-300
                mt-5'>
                    <input className='block w-full bg-transparent
                    border-0 text-sm focus:outline-none focus:ring-0'  
                    type='number'
                    step={0.01}
                    min={0.01}
                    name='amount'
                    placeholder='Amount ETH'
                    required
                    />
                </div>

                <div className='flex justify-center'>
                <button type='button'
                className='bg-green-400 rounded-full hover:bg-green-600
                mt-3 text-white shadow- text-sm p-2 leading-tight px-6 py-2
                '>
                    BACK PROJECT
                </button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default backProject