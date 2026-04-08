import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Hospital Appointment Booking System, your reliable companion for managing healthcare with ease and confidence. We simplify the way you connect with doctors, book appointments, and stay on top of your medical needs in one place.

At Hospital Appointment Booking System, we understand that healthcare should be accessible, fast, and stress free. That is why our platform is designed to eliminate long waiting times and complicated processes, giving you a smooth and hassle free experience.

We are driven by innovation and a commitment to improving digital healthcare. By combining modern technology with a user friendly design, we ensure that every interaction on our platform is simple, secure, and efficient.

Whether you are scheduling your first consultation or managing ongoing treatments, Hospital Appointment Booking System is here to support you at every step of your healthcare journey.</p>
          <p>Hospital Appointment Booking System is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you are booking your first appointment or managing ongoing care, Hospital Appointment Booking System is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to transform the healthcare experience by making it seamless, accessible, and patient focused. We aim to bridge the gap between patients and healthcare providers, ensuring that quality care is always just a few clicks away.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
