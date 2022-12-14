import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12' >
            <InfoCard 
            bgClass="bg-gradient-to-r from-secondary to-primary" 
            text="Sunday-Thursday (9:00 am-10:00 pm)" cardTitle="Opening Hours" 
            img={clock}>
            </InfoCard>

            <InfoCard 
            bgClass="bg-neutral" 
            text="Sylhet,Bangladesh" 
            cardTitle="Our Location" 
            img={marker}>
            </InfoCard>

            <InfoCard 
            bgClass="bg-gradient-to-r from-secondary to-primary" text="0178160445" 
            cardTitle="Contract us" 
            img={phone}>   
            </InfoCard>
        </div>
    );
};

export default Info;