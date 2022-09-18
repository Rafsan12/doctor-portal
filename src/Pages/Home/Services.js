import React from 'react';
import Service from './Service';
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import  treatment from "../../assets/images/treatment.png"

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ];
    return (
        <div className='my-28'>
           <div className='text-center '>
           <h2 className='text-primary text-xl uppercase font-bold'>Our Service</h2>
            <h1 className='text-2l uppercase font-bold'>Service We Provide</h1>
           </div>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
           {
            services.map(service => <Service
            key={service._id}
            service={service}
            ></Service> )
           }
           </div>
           <div>
           <div className="hero min-h-screen px-12">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <button className="btn btn-primary  bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default Services;