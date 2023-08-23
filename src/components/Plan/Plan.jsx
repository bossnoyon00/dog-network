import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Plan = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="text-center my-12 ">
            <div className="my-5">
                <h2 className="text-4xl font-bold">Our Plan</h2>
                <p className="text-gray-500 font-bold mt-2">You can now see what special messages your dog wants to give you, <br /> and you'll love your dog even more as a fantastic result.</p>
            </div>

            <div className="grid gap-5 px-5 md:grid-cols-2">
                <div className="bg-color rounded p-3">
                    <h2 className="text-4xl text-gray-600 font-semibold">Tailored Communication</h2>
                    <p className="text-white font-bold">We believe that every dog has a unique personality and way of expressing themselves. Our cutting-edge technology analyzes your dogs behavior, sounds, and body language to create personalized messages that capture their individual voice.</p>
                </div>
                <div className="bg-color rounded p-3">
                    <h2 className="text-4xl text-gray-600 font-semibold">Empowering Connections</h2>
                    <p className="text-white font-bold">Our platform is designed to empower dog parents by giving them the opportunity to converse with their pets in a whole new way. Imagine hearing your dogs perspective on their favorite activities, treats, and daily adventures!</p>
                </div>
                <div className="bg-color rounded p-3">
                    <h2 className="text-4xl text-gray-600 font-semibold">Simple and Fun</h2>
                    <p className="text-white font-bold">Engaging with your dog through our website is simple, intuitive, and a lot of fun! Just type in your dogs name and receive a heartwarming message from their point of view. Its an instant connection that will deepen the bond you share.</p>
                </div>
                <div className="bg-color rounded p-3">
                    <h2 className="text-4xl text-gray-600 font-semibold">Constant Innovation</h2>
                    <p className="text-white font-bold"> We are dedicated to staying at the forefront of advancements in pet-human communication. Our team of experts and developers is constantly working to improve the technology and expand the range of messages your dog can convey.</p>
                </div>
            </div>
        </div>
    );
};

export default Plan;