import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider'

function Themes() { 
  const {currentMode, setMode, setThemeSettings } = useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>Settings</p>
          <button
            type='button'
            onClick={()=> setThemeSettings(false)}
            style={{
              color: 'rgb(153,171,180)',
              borderRadius: '50%'
            }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-teal-500"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p>Theme Options</p>
          <div className='mt-4'>
            <input 
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className='cursor-pointer'
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>Light Mode</label>
          </div>
          <div className='mt-4'>
            <input 
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className='cursor-pointer'
              onChange={setMode}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>Dark Mode</label>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Themes