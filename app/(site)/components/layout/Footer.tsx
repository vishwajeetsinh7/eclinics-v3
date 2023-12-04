import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-[80vh] max-w-7xl m-auto'>
        
            <footer className="bg-slate-100 rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/`" className="flex items-center mb-4 gap-3 sm:mb-0">
                            <Image width={100} height={100} src="/images/logo.png"  alt="Eclnics Logo" />
                            <span className=" self-center text-2xl font-semibold whitespace-nowrap dark:text-green-700 text-green-800">Eclinics</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Eclinics™</a>. All Rights Reserved.</span>
                </div>
            </footer>


    </div>
  )
}

export default Footer