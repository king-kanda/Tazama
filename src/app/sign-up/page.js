import React from 'react';
import Link from 'next/link';

import Testimonials from '@/components/testimonials';

import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';

import styles from '@/styles/accounts.module.scss';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter } from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
    weight: ["100","400","200","300","500","600","700","800","900"],
    subsets: ['latin'] 
})


const page = () => {
    return (
       <>
            <main className="grid grid-cols-2 gap-2">
                <section className={` bg-orange `}>
                   <Testimonials/>
                </section>
                <section className={` container px-12 `}>
                    <div class="p-8 ">
                        <div className={` ${styles.welcome}`}>
                            <h2 class={`  text-center font-bold ${poppins.className}  `}>
                                Create an account.
                            </h2>
                            {/* btn */}
                            <div className={` flex items-center justify-center mt-4 `}>
                                <button type="submit" class="inline-flex items-center justify-center text-black bg-white hover:bg-gray focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 mx-3 text-center border border-grey ">
                                    <span className='text-2xl px-2'>
                                    <FcGoogle/>
                                    </span>
                                    <p>
                                        Sign in With Google
                                    </p>
                                </button>
                                <button type="submit" class="inline-flex items-center justify-center  text-black bg-white hover:bg-gray focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 mx-3 text-center border border-grey ">
                                    <span className='text-2xl px-2'>
                                        <BsTwitter/>
                                    </span>
                                    <p>
                                        Sign in With Twitter
                                    </p>
                                </button>

                            </div>
                            <div class="flex items-center my-4">
                                <hr class="flex-grow border-t border-grey"/>
                                <span class="mx-4 text-black">or</span>
                                <hr class="flex-grow border-t border-grey"/>
                            </div>
                        </div>
                        <div className="form-section mt-5 px-14">
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                <label htmlhtmlFor="password" class="block mb-2 text-sm font-medium"> Your Email :</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-midblack text-black sm:text-sm rounded-lg focus:ring-grey focus:border-grey block w-full p-2.5" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                <label htmlhtmlFor="password" class="block mb-2 text-sm font-medium">Password :</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-midblack text-black sm:text-sm rounded-lg focus:ring-grey focus:border-grey block w-full p-2.5" required=""/>
                                </div>
                                <div>
                                <label htmlhtmlFor="password" class="block mb-2 text-sm font-medium">Confirm Password :</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-midblack text-black sm:text-sm rounded-lg focus:ring-grey focus:border-grey block w-full p-2.5" required=""/>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label htmlFor="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-orange hover:underline font-bold" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" class="w-full text-white bg-navy hover:bg-teal focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                                <div className="sign-up-sec mt-10 text-center">
                                    <div className="create-account">
                                        <p>
                                        Already have an account? <Link href="/login"><span className='text-orange underline font-bold'>
                                                Login Here </span></Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
       </>
    );
}

export default page;