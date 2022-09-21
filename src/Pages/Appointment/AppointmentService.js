import React from 'react';

const AppointmentService = ({service}) => {
    const {name,slots }= service;
    return (
        <div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
    <div className="card-body">
        <h2 className="text-xl text-primary text-center">{name}</h2>
        <p className='text-center'>{slots.length} <span>
   { slots?.length > 1 ? "spaces available" : (slots?.length === 1 ? "space available" : "No space available")}
</span>   
         </p>
        <div className="card-actions justify-center">
        <button disabled={slots.length ===0} className="btn btn-secondary text-white">Book  Now</button>
        </div>
    </div>
</div>
        </div>
    );
};

export default AppointmentService;