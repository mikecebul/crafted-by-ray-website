'use client'

import Image from 'next/image'
import { motion } from "framer-motion"

const testimonies = [
  { image: "/avatar.png", name: "Jane Doe", quote: "Ray's prices were so cheap I basically had to force him to take my money!" },
  { image: "/avatar.png", name: "Jane Doe", quote: "Ray's prices were so cheap I basically had to force him to take my money!" },
  { image: "/avatar.png", name: "Jane Doe", quote: "Ray's prices were so cheap I basically had to force him to take my money!" },
  { image: "/avatar.png", name: "Jane Doe", quote: "Ray's prices were so cheap I basically had to force him to take my money!" },
  { image: "/avatar.png", name: "Jane Doe", quote: "Ray's prices were so cheap I basically had to force him to take my money!" },
]

export default function Testimonials() {
  return (
    <motion.div
      className='flex py-8 overflow-hidden bg-amber-200'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {testimonies.map((items, index) => (
        <motion.div
          key={index}
          className='flex px-4 py-4 mr-4 rounded bg-amber-400'
          initial={{ x: -160 }}
          animate={{ x: -1072 }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" }}
        >
          {/* avatar */}
          <div className="flex flex-col items-center justify-center">
            <Image src={items.image} width={250} height={250} alt="profile picture of testimonial" className='object-cover w-12 rounded-full' />
            {/* name */}
            <p className='block w-16 text-xs font-semibold text-center'>{items.name}</p>
          </div>
          {/* qoute */}
          <p className='w-48 pl-4 text-sm'>{items.quote}</p>
        </motion.div>
      ))}

    </motion.div>
  )
}
