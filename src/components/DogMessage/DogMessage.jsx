import { useRef, useState, useEffect } from 'react';
import './DogMessage.css';
import Typewriter from 'typewriter-effect';
import html2canvas from 'html2canvas';
import ReactConfetti from 'react-confetti';
import AOS from 'aos';
import 'aos/dist/aos.css';

const fancyTexts = [
    "Hey there, awesome human! Your lap is my favorite spot in the whole world.",
    "To me, you're the treat wizard and the ultimate belly-rub champion!",
    "Wagging tails and wet noses – that's how I express my love for you!",
    "You're the best fetch partner I could ever hope for!",
    "Every time you say my name, my heart does a happy dance.",
    "My day gets infinitely better when I see your smiling face.",
    "You're the reason walks are my favorite adventure!",
    "If I could talk, I'd say 'thank you' a million times for being my best friend.",
    "You make the world brighter, one scratch behind the ears at a time.",
    "You're the leader of our pack, and I'd follow you anywhere.",
    "Your cuddles are like magic, instantly turning my day around.",
    "From treats to snuggles, you've got the perfect formula to win my heart.",
    "Whenever you leave, I'm counting the seconds until you return.",
    "You know the secret to making my tail wag uncontrollably!",
    "Your presence alone is enough to chase away any rainy day blues.",
    "Life is a grand adventure with you by my side.",

];

const fancyImages = [
    "https://redround.ru/wp-content/uploads/2020/01/lovedog-icon1.png",
    "https://love4dogs592704873.files.wordpress.com/2018/09/cropped-pet-friendly-5121.png?w=300&h=270",
    "https://clipground.com/images/dog-png-images-1.png",
    "https://pngimg.com/uploads/dog/dog_PNG50286.png",
    "https://cdn.dribbble.com/users/1158341/screenshots/4579466/dog_lovers_1x.png",
    "https://storage.googleapis.com/petbacker/images/cms/icons/services/dogwalk.png",
    "https://www.enchantingpets.com/wp-content/uploads/2021/03/Dog-lovers1.jpg",
    "https://th.bing.com/th/id/OIP.StA6Ny787cJQrh4e-3ky5AHaG8?pid=ImgDet&rs=1",
    "https://cdn.dribbble.com/users/33385/screenshots/6040388/dog_love_1x.png",
    "https://thumbs.dreamstime.com/z/dogs-silhouettes-reflection-dogs-silhouettes-reflection-american-staffordshire-terrier-pitbull-french-bulldog-250358463.jpg",
    "https://th.bing.com/th/id/OIP.FIO_4OhfeOmbOWzMQR-e4wHaES?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.86bebc8ceb313545207c639be56f0651?rik=JOO9Wnj8b0GWTA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fdog%2fdog_PNG50380.png&ehk=othL9M41KKnxNrXWUSnkAmjsQ%2fiWbfeqyhCdWFCEDIQ%3d&risl=1&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.bp-MzZIU0vJlNQK1W8WurgHaIR?pid=ImgDet&rs=1",
    "https://clipart.info/images/ccovers/1503688584Cute-Dog-Face-PNG-Image.png",
    "https://pluspng.com/img-png/cute-dog-png-hd-dog-png-image-22649-dog-png-1440.png",
    "https://th.bing.com/th/id/OIP.6zTzdHCBVZkl_AuAQjBX2gHaF7?pid=ImgDet&rs=1",
    "https://www.pngkit.com/png/detail/277-2778778_boxer-puppy-lineart-by-emmyliaa-on-deviantart-boxer.png",
    "https://i.pinimg.com/originals/c0/79/27/c07927aa8c7a0c057c28186b88d422bc.png",
    "https://th.bing.com/th/id/R.852c965fa3aed47a9bf37ced85638f7f?rik=IrveB0OIjT3DKw&riu=http%3a%2f%2fwww.secondchanceboxer.org%2fGraphics%2fBoxer.jpg&ehk=NXooSg1HVuMdz4npKT%2fNKSZwttZJxdQKFhCTGbo2y3Q%3d&risl=&pid=ImgRaw&r=0"

];


const DogMessage = () => {


    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: false, // Only animate elements once
            easing: 'ease-in-out', // Easing function
        });
    }, []);



    const [anime, setAnime] = useState({ width: window.innerWidth, height: window.innerHeight });
    const detectSize = () => {
        setAnime({ width: window.innerWidth, height: window.innerHeight });
    };

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        };
    }, []);

    const [dogName, setDogName] = useState("");
    const [dogType, setDogType] = useState("");
    const [dogNameError, setDogNameError] = useState("");
    const [dogTypeError, setDogTypeError] = useState("");
    const [loading, setLoading] = useState(false);
    const [fancyImage, setFancyImage] = useState("");
    const [fancyText, setFancyText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const generateFancyText = (e) => {
        e.preventDefault();

        // Validate inputs
        if (!dogName) {
            setDogNameError("Hey! Dog name is required.");
            return;
        } else {
            setDogNameError("");
        }

        if (!dogType) {
            setDogTypeError("Hey! Dog type is required.");
            return;
        } else {
            setDogTypeError("");
        }
        setLoading(true);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * fancyTexts.length);
            setFancyText(fancyTexts[randomIndex]);
            const randomIndex2 = Math.floor(Math.random() * fancyImages.length);
            setFancyImage(fancyImages[randomIndex2]);
            setDogName('');
            setDogType('');
            setLoading(false);
            openModal();
        }, 10000);
    };

    const divRef = useRef(null);
    const downloadImage = () => {
        if (divRef.current) {
            html2canvas(divRef.current).then((canvas) => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'downloaded-image.png';
                link.click();
            });
        }
    };

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-bold" data-aos="fade-up">Let's play the game!</h2>
                <p className="text-gray-500 font-bold mt-2">Your dog is waiting to tell you what he thinks about you, <br /> enter your dog's details here and get amazing messages.</p>
            </div>
            <div className="md:flex justify-center mt-12 bg-blue-400 p-6 rounded-lg items-center w-9/12 mx-auto">
                <div data-aos="fade-right">
                    <img className="w-9/12 rounded-lg" src="https://img.freepik.com/free-vector/people-walking-dogs-park_23-2148516544.jpg?w=900&t=st=1692555606~exp=1692556206~hmac=5078c6a2b46b5c9d1deae89de2c5bc2922989cb4fe95035e8a6545ef72cc02b2" alt="" />
                </div>
                <form data-aos="fade-left"
                    data-aos-delay={100} onSubmit={generateFancyText} className="page">
                    <div className="text-violet-900 text-xl font-bold">
                        <h2 className="text-3xl mb-2 text-white">Type here your dog details</h2>
                        <Typewriter options={{
                            strings: ["Your dog is waiting to give you a sweet message !"],
                            autoStart: true,
                            loop: true,
                        }} />
                    </div>
                    <div className="field field_v1">
                        <label htmlFor="first-name" className="ha-screen-reader">Your Dog Name</label>
                        <input value={dogName} onChange={(e) => setDogName(e.target.value)} id="first-name" className="field__input text-white font-bold" placeholder="Type your dog name" />
                        <span className="field__label-wrap" aria-hidden="true">
                            <span className="field__label">Your Dog Name</span>
                        </span> <br />
                    </div>
                    {dogNameError && <p className="text-red-500 font-semibold">{dogNameError}</p>}
                    <div className="field field_v1">
                        <label htmlFor="first-name" className="ha-screen-reader">Your Dog Breed</label>
                        <input value={dogType} onChange={(e) => setDogType(e.target.value)} id="first-name" className="field__input text-white font-bold" placeholder="Type your dog breed" />
                        <span className="field__label-wrap" aria-hidden="true">
                            <span className="field__label">Your Dog Breed</span>
                        </span>
                    </div>
                    {dogTypeError && <p className="text-red-500 font-semibold">{dogTypeError}</p>}
                    <div className="text-center">
                        <button onClick={openModal} className="bg-blue-600 px-3 py-1 font-bold rounded text-white">See Fantastic Message</button>
                    </div>
                </form>
                {
                    loading ? (
                        <div className="fixed inset-0 flex items-center justify-center z-50 px-3">
                            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                                <div className='bg-blend-darken'
                                    ref={divRef}
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://dogfood2mydoor.com/static/media/dog_load.3a3190f9.gif')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'relative',
                                        minHeight: '200px',
                                    }}
                                >
                                    <h3 className="text-2xl text-red-700 p-2  font-mono font-extrabold">WAIT.. Your fancy message is loading..!!</h3>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div >
                            {!dogNameError && !dogTypeError && modalVisible && (
                                <div className="fixed inset-0 flex items-center justify-center z-50 px-3">
                                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                                        <div className='bg-blend-saturation'
                                            ref={divRef}
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fancyImage})`,
                                                backgroundSize: 'cover',
                                                backgroundColor: 'rgba(128, 128, 128, 0.5)',
                                                backgroundPosition: 'center',
                                                borderRadius: '12px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                position: 'relative',
                                                minHeight: '200px',
                                            }}
                                        >
                                            <h3 className="text-3xl p-2 text-red-800 font-mono font-extrabold">{fancyText}</h3>
                                        </div>
                                        <div className="mt-4 flex justify-end">
                                            <button
                                                onClick={closeModal}
                                                className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-300"
                                            >
                                                Close
                                            </button>
                                            <button
                                                onClick={downloadImage}
                                                className="ml-3 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                Save
                                            </button>
                                            <ReactConfetti
                                                width={anime.width}
                                                height={anime.height}
                                                tweenDuration={2000}
                                            ></ReactConfetti>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default DogMessage;