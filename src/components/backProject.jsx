import {FaTimes} from 'react-icons/fa';
import { useGlobalState, setGlobalState} from '../Store';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { backProject } from '../services/blockchain';
const BackProject = ({project}) => {
    const [amount, setAmount] = useState('')
    const [backModal] = useGlobalState('backModal');

    const handelSubmit = async (e) => {
        
        e.preventDefault()
        if (!amount) return
        
        await backProject(project.id, amount)
        console.log("submit")
        toast.success('Project backed successfully, will reflect in 30sec')
        setGlobalState('backModal', 'scale-0')

    }

  return (
    <div className={`fixed top-0 left-0 w-screen flex item-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${backModal}`}>
        <div className="bg-white rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form onSubmit={handelSubmit}>
                <div className='flex items-center justify-between'>
                    <p>{project.title}</p>
                    <button type="button"
                    className="border-0 bg-transparent focus:outline-none"
                    onClick={() => setGlobalState('backModal', 'scale-0')}>
                        <FaTimes />
                    </button>
                </div>

                <div className='flex justify-center items-center mt-4'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={project.imageURL} alt={project.title}
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
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    required
                    />
                </div>

                <div className='flex justify-center'>
                <button type='submit'
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

export default BackProject