import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testimonial = () => {


    useEffect(() => {
        AOS.init();
    }, []);

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])

    return (
        <section className="my-20 max-w-7xl mx-auto">
            <div data-aos="fade-zoom-in" data-aos-offset="200" className="text-center">
                <h1 className="text-4xl font-bold">Check Recent Happy Dog Parents of Our Clients  </h1>
                <p className="text-gray-500 font-bold mt-2">Many people are happy to see his dog loving it saying some nice words, <br /> hope you will be happy too</p>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide data-aos="fade-up" review={review} key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p data-aos="fade-up" data-aos-delay="100" className="py-8">{review.details}</p>
                            <h2 className="text-2xl text-orange-500" data-aos="fade-up" data-aos-delay="200">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>


        </section >
    );
};

export default Testimonial;