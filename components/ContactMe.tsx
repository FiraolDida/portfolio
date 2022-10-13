import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:fresh@gmail?subject${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-10 mt-10 md:mt-0'>
            <h4 className='md:text-4xl text-2xl font-semibold text-center'>
                I have got just what you need.{' '}
                <span className='decoration-[#F7AB0A]/50 underline'>Let&apos;s Talk.</span>
            </h4>

            <div className='md:space-y-10 space-y-3'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] md:h-7 md:w-7 h-4 w-4 animate-pulse' />
                    <p className='md:text-2xl text-l'>+251-912-397377</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] md:h-7 md:w-7 h-4 w-4 animate-pulse' />
                    <p className='md:text-2xl text-l'>firaoldida1@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] md:h-7 md:w-7 h-4 w-4 animate-pulse' />
                    <p className='md:text-2xl text-l'>Kebena, Addis Ababa, Ethiopia</p>
                </div>
            </div>

            <form onSubmit={ handleSubmit(onSubmit) } className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0'>
                    <input className='contactInput' type="text" placeholder='Name'  {...register('name')} />
                    <input className='contactInput' type="email" placeholder='Email' {...register('email')} />
                </div>

                <input className='contactInput' type="text" placeholder='Subject' {...register('subject')} />
                <textarea className='contactInput' placeholder='Message' {...register('message')} />
                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe