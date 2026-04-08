import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Hospital Appointment Booking System is designed to simplify the way patients connect with healthcare providers. Our platform allows users to easily search for doctors, schedule appointments, and manage their medical needs without unnecessary delays or complications.

With a focus on convenience, reliability, and user friendly design, we aim to make healthcare more accessible for everyone. Whether it is a routine checkup or ongoing treatment, our system ensures a smooth and efficient experience every time.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 814-555-132</li>
            <li>riteshdutt952@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026 @ HospitalAppointmentBookingSystem.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
