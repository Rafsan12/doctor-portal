import React from 'react';
import doctor from "../../assets/images/doctor.png"
import background from "../../assets/images/appointment.png"

const MakeAppointment = () => {
    return (
        <section style={{
               background:`url(${background})`

        }} 
        className='flex justify-center items-center '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div  className='flex-1'>
               <h3 className='text-xl text-primary '>Appointment</h3>
               <h1 className='text-white text-3xl'>Make an appointment Today</h1>
               <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
               <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
            
        </section>
    );
};

export default MakeAppointment;