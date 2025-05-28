import React from 'react'

const LandingNav = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-white/50 mx-10 sticky  shadow-lg rounded-lg z-50">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
            <img
                src="/public/Treq-logo.png" // Ensure this path is correct based on your public/src structure
                alt="Logo"
                className="h-10 w-10 rounded-sm"
            />
          <span className="text-xl font-bold">Treq</span>
        </div>
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#features" className="hover:text-blue-400">Products</a>
        <a href="#resources" className="hover:text-blue-400">Resources</a>
        <a href="#pricing" className="hover:text-blue-400">Pricing</a>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">
        Sign Up
      </button>
    </div>
  )
}

export default LandingNav