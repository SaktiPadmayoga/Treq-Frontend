import React from 'react'

const AuthLayouts = ({children}) => {
  return (
    <div className='flex items-center justify-center bg-gray-100'>
        <div className='w-1/2  h-screen py-16 pl-5 flex flex-col justify-center max-w-md mx-auto'>
            <img
            src="/Treq-logo.png" 
            alt="Logo"
            className="h-14 w-14 mb-6 text-start rounded-sm" 
          />
            <h1 className='text-2xl font-bold mb-4'>Welcome to Treq</h1>
            <p className='text-md mb-8 text-sky-900/70'>Your personal task and schedule management tool.</p>
            {children}
            
        </div>
        <div className='w-1/2 bg-gray-100 h-screen p-10 flex items-center justify-center'>
            <img src="https://images.unsplash.com/photo-1651746605872-66fec1defdb5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkxfHx8ZW58MHx8fHx8" alt="auth" className='w-full h-full object-cover rounded-2xl ' />
        </div>

    </div>
  )
}

export default AuthLayouts