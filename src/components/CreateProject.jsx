import {FaTimes} from 'react-icons/fa';
import { useGlobalState, setGlobalState} from '../Store';
import { useState } from 'react';
import { createProject } from '../services/blockchain';
import { toast } from 'react-toastify';
const CreateProject = () => {
    const [createModal] = useGlobalState('createModal');
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')
    const [date, setDate] = useState('')
    const [ImageURL, setImageURL] = useState('')

    const toTimestamp = (datestr) => {
        const dateObj = Date.parse(datestr)
        return dateObj / 1000
    }

    const onClose = () => {
        setGlobalState('createModal', 'scale-0')
        reset()
    }

    const reset = () => {
        setTitle('')
        setDescription('')
        setCost('')
        setDate('')
        setImageURL('')
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!title || !description || !cost || !date || !ImageURL) return

        const params = {
            title,
            description,
            ImageURL,
            cost,
            expiresAt: toTimestamp(date),
        }
        console.log(params.title, params.description, params.ImageURL, params.cost, params.expiresAt)
        await createProject(params.title, params.description, params.ImageURL, params.cost, params.expiresAt)
        console.log(done)
        toast.success('Project created successfully, will reflect in 30 sec.')
        onClose()
    }
  return (
    <div className={`fixed top-0 left-0 w-screen flex item-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${createModal}`}>
        <div className="bg-white rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form onSubmit={handleSubmit} className='felx flex-col'>
                <div className='flex items-center justify-between'>
                    <p>#Project Title</p>
                    <button type="button"
                    className="border-0 bg-transparent focus:outline-none"
                    onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <div className='flex justify-center items-center mt-4'>
                    <div className='rounded-xl overflow-hidden h-20 w-20'>
                        <img src={ImageURL || 
                        'https://e0.pxfuel.com/wallpapers/630/889/desktop-wallpaper-anonymous-wonderful-anonymous-background-fn-ng-thumbnail.jpg'} 
                        alt="project"
                         className='w-full h-full object-cover cursor-pointer'/>
                    </div>
                </div>
                <div className='flex justify-between items-center rounded-xl bg-gray-300
                mt-5'>
                    <input className='block w-full bg-transparent
                    border-0 text-sm focus:outline-none focus:ring-0'  
                    type='text'
                    name='title'
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    />
                </div>

                <div className='flex justify-between items-center rounded-xl bg-gray-300
                mt-5'>
                    <input className='block w-full bg-transparent
                    border-0 text-sm focus:outline-none focus:ring-0'  
                    type='url'
                    name='ImageURL'
                    placeholder='Image URL'
                    onChange={(e) => setImageURL(e.target.value)}
                    value={ImageURL}
                    required
                    />
                </div>

                <div className='flex justify-between items-center rounded-xl bg-gray-300
                mt-5'>
                    <textarea className='block w-full bg-transparent
                    border-0 text-sm focus:outline-none focus:ring-0'  
                    type='text'
                    name='description'
                    placeholder='Description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                    />
                </div>

                <div className='flex justify-between items-center rounded-xl bg-gray-300
                mt-5'>
                    <input className='block w-full bg-transparent
                    border-0 text-sm focus:outline-none focus:ring-0'  
                    type='number'
                    step={0.01}
                    min={0.01}
                    name='cost'
                    placeholder='Cost ETH'
                    onChange={(e) => setCost(e.target.value)}
                    value={cost}
                    required
                    />
                </div>

                <div className='flex justify-between items-center rounded-xl bg-gray-300
                mt-5'>
                    <input className='block w-full bg-transparent
                    border-0 text-sm focus:outline-none focus:ring-0'  
                    type='date'
                    name='date'
                    placeholder='Expire'
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    required
                    />
                </div>
                <div className='flex justify-center'>
                <button type='submit'
                className='bg-green-400 rounded-full hover:bg-green-600
                mt-3 text-white shadow- text-sm p-2 leading-tight px-6 py-2
                '>
                    SUBMIT PROJECT
                </button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default CreateProject