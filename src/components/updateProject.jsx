import {FaTimes} from 'react-icons/fa';
import { useGlobalState, setGlobalState} from '../Store';
import { useState } from 'react';
import { toast } from 'react-toastify';
const updateProject = ( {project} ) => {
    const [updateModal] = useGlobalState('updateModal');
    const [title, setTitle] = useState(project.title)
    const [description, setDescription] = useState(project.description)
    const [date, setDate] = useState(project.Date)
    const [imageURL, setImageURL] = useState(project.imageURL)

    const toTimestamp = (dateStr) => {
        const dateObj = Date.parse(dateStr)
        return dateObj /1000
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()


        const params =  {
            id: project.id,
            title,
            description,
            expiresAt: toTimestamp(date),
            imageURL,
        }
        console.log(params.id, params.title, params.description, params.expiresAt, params.imageURL)
        updateProject(params.id, params.title, params.description, params.expiresAt, params.imageURL)
        toast.success("project updated successffullu, will reflect in 30 sec")
    } 

  return (
    <div className={`fixed top-0 left-0 w-screen flex item-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${updateModal}`}>
        <div className="bg-white rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form onSubmit={handleSubmit}>
                <div className='flex items-center justify-between'>
                    <p>{project.title}</p>
                    <button type="button"
                    className="border-0 bg-transparent focus:outline-none"
                    onClick={() => setGlobalState('updateModal', 'scale-0')}>
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
                    value={imageURL}
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

export default updateProject