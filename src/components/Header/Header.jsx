import { SiDogecoin } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Header = () => {

    
    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div data-aos="flip-left" data-aos-delay="100"  className='flex  p-4 items-center justify-between'>
            <div className="flex header-text gap-3 items-center">
                <SiDogecoin className='text-yellow-500'></SiDogecoin>
                <h2 className='text-4xl heading-text text-yellow-500 font-bold'>  The Dog  Speaks Network</h2>
            </div>
            <div className=''>
                <button className='bg-blue-600 px-3 py-1 font-bold rounded text-white'>Get Started</button>
            </div>
        </div>
    );
};

export default Header;