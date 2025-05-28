import React from 'react'

import { motion } from "framer-motion";

const LandingNav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center items-center z-50 mt-14">
      <div className="flex items-center justify-between px-6 py-2 bg-white/80 shadow-lg rounded-full max-w-3xl w-11/12">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <img
              src="/public/Treq-logo.png" // Ensure this path is correct based on your public/src structure
              alt="Logo"
              className="h-8 w-8 rounded-sm"
            />
            <span className="text-xl font-bold">Treq</span>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#features" className="hover:text-blue-400">Products</a>
          <a href="#resources" className="hover:text-blue-400">Resources</a>
          <a href="#pricing" className="hover:text-blue-400">Pricing</a>
        </div>
        <div>
          <button className=" hover:bg-blue-700 px-4 py-2">
            Login
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-full text-white">
            Sign Up
          </button>
        </div>
        
      </div>
    </div>
  )
}

const HeroSection = () => {
    // Animation variants remain the same
    const fadeIn = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" }
      }
    };
  
    const slideUp = {
      hidden: { opacity: 0, y: 60 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      }
    };
  
    const staggerContainer = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          delayChildren: 0.2
        }
      }
    };
  
    const statsAnimation = {
      hidden: { opacity: 0, scale: 0.8, y: 20 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    };
  
    // Text reveal animation
    const textReveal = {
      hidden: { width: "0%" },
      visible: { 
        width: "100%",
        transition: { duration: 1.2, ease: "easeInOut" } 
      }
    };
  
    return (
      <>
        <motion.header 
          initial="hidden"
          animate="visible"
          className="relative h-screen bg-[url('/public/hero.png')] bg-cover bg-no-repeat bg-center overflow-hidden pb-5 m-8 rounded-3xl"
        >
          {/* Gradient Overlay with animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-olive-900 via-olive-500/80 to-olive-500/20 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
  
          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-between px-8">
            {/* Left side: CTA */}
            <motion.div 
              className="w-full flex flex-col justify-center items-center"
              variants={staggerContainer}
            >
              <motion.div 
                className="mx-auto max-w-2xl text-center lg:flex-auto lg:py-20"
                variants={staggerContainer}
              >
                <motion.h2 
                  className="text-3xl text-white sm:text-5xl"
                  variants={slideUp}
                >
                  Manage{" "}
                  <motion.span 
                    className=" "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    All Of Your Work In
                  </motion.span>{" "}
                  <motion.span 
                    className=" "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    One Place Efficiently
                  </motion.span>
                </motion.h2>
                
                <motion.p 
                  className="mt-6 text-lg md:text-xl text-pretty text-gray-100"
                  variants={slideUp}
                >
                  Menjual dan membeli barang bekas kini lebih mudah dan terpercaya bersama{" "}
                  <motion.span 
                    className="font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    Reusemart
                  </motion.span>
                </motion.p>
                
                <motion.div 
                  className="mt-10 flex items-center justify-center gap-x-6"
                  variants={fadeIn}
                >
                  <motion.a
                    href="#"
                    className="rounded-md bg-olive-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    whileHover={{ scale: 1.05, backgroundColor: "#2d3022" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    Temukan Barangmu
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.header>
      </>
    );
  };

const Landing = () => {
  return (
    <>
      <LandingNav />
      <HeroSection />
    </>
  )
}

export default Landing