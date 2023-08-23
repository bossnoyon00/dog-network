
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import dogImg from '../../assets/dlogo.png.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/5">
                        <img src={dogImg} alt="Logo" className="footer-logo" />
                    </div>
                    <div className="w-full md:w-1/5">
                        <h4 className="footer-heading">Address</h4>
                        <ul className="footer-list">
                            <li>Dog Network India Limited <br />
                                Bangalore, India</li>
                            <li>Email</li>
                            <li>Founders@dogswag.club</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/5">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-list">
                            <li>Home</li>
                            <li>About</li>
                            <li className='text-red-600 font-bold'>Report a bug</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/5">
                        <h4 className="footer-heading text">Legal</h4>
                        <ul className="footer-list">
                            <p>Privacy Policy</p>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/5">
                        <h4 className="footer-heading">Join Our NewsLetter</h4>
                        <ul className="footer-list">
                            <li>Woof,Woof Subscribe to our newsletter  <br /> and stay up to date with the latest blogs, <br /> contests, and giveaways.</li>
                            <li><div className="form-control">
                                <div className="flex items-center border rounded-md">
                                    <input type="text" placeholder="Email" className="py-2 rounded-lg px-4 w-full focus:outline-none" />
                                    <button style={{ backgroundColor: 'rgba(255, 203, 7, 1)' }} className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-lg">
                                        <p className="h-6 w-16 text-white" >Subscribe
                                        </p>
                                    </button>
                                </div>
                            </div></li>

                        </ul>
                    </div>
                </div>
            </div>
            <hr className='text-black' />
            <div className='md:mx-24 mt-5'>
                <div className='md:flex justify-between'>
                    <p>© 2023 DogNetwork™. All Rights Reserved.</p>
                    <div className='flex space-x-4'>
                        <FaFacebook></FaFacebook>
                        <FaLinkedin></FaLinkedin>
                        <FaInstagram></FaInstagram>
                        <FaYoutube></FaYoutube>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;