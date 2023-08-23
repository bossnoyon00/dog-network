import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {


    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div data-aos="fade-zoom-in" data-aos-offset="200" className=" text-white ">
            <AutoplaySlider className="h-[600px]"
                animation="fallAnimation"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={2000}
            >
                <div data-src="https://i.ibb.co/g99WwV8/shape-bg.png" className="grid md:grid-cols-2 items-center gap-10 container mx-auto ">
                    <div>
                        <h2 className="text-2xl font-bold">Be Spread Love</h2>
                        <h1 className="text-6xl font-semibold mt-3 mb-5">Our mission is your Embark on a Virtual Dog Journey!  </h1>
                        <p className="mb-5">And Design, Play, and Experience the Joy of Owning a Digital Pup!</p>
                        <button
                            className="nav-btn py-2 px-5 rounded">Get started</button>
                    </div>
                    <div className="items-end flex">
                        <img className="rounded-t-full" src="https://images.livemint.com/img/2020/12/25/1140x641/iStock-1083394968_1608893209111_1608893216571.jpg" alt="" />
                    </div>
                </div>
                <div data-src="https://i.ibb.co/g99WwV8/shape-bg.png" className="grid md:grid-cols-2 items-center gap-10 container mx-auto ">
                    <div>
                        <h2 className="text-2xl font-bold">Be Spread Love</h2>
                        <h1 className="text-6xl font-semibold mt-3 mb-5">Our mission is your Embark on a Virtual Dog Journey!  </h1>
                        <p className="mb-5">And Design, Play, and Experience the Joy of Owning a Digital Pup!</p>
                        <button
                            className="nav-btn py-2 px-5 rounded">Get started</button>
                    </div>
                    <div className="items-end flex">
                        <img className="rounded-t-full" src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Doggie_chicken_treat.jpg?v=1625665955" alt="" />
                    </div>
                </div>
                <div data-src="https://i.ibb.co/g99WwV8/shape-bg.png" className="grid md:grid-cols-2 items-center gap-10 container mx-auto ">
                    <div>
                        <h2 className="text-2xl font-bold">Be Spread Love</h2>
                        <h1 className="text-6xl font-semibold mt-3 mb-5">Our mission is your Embark on a Virtual Dog Journey!  </h1>
                        <p className="mb-5">And Design, Play, and Experience the Joy of Owning a Digital Pup!</p>
                        <button
                            className="nav-btn py-2 px-5 rounded">Get started</button>
                    </div>
                    <div className="items-end flex">
                        <img className="rounded-t-full" src="https://cdn.buttercms.com/M9dOrckTSMWlPYmBWwIC" alt="" />
                    </div>
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Banner;