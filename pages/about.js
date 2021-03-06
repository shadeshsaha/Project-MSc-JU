import Image from "next/image";
import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaLink } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Contact from '../components/Contact';

const about = () => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    return (
        <section className="bg-white dark:bg-slate-800 text-slate-700 dark:text-white">
            {/* Team section  */}
            <section className="container mx-auto pb-7">
                <h2 className="text-center text-4xl font-bold py-12">Meet The Dedicated Team</h2>
                <div className='container grid md:grid-cols-3 xs:grid-cols-1 gap-4 px-5'>
                    <div></div>
                    <div className="single-card rounded-xl bg-slate-100 dark:bg-slate-700 shadow-xl hover:shadow-zinc-400 dark:hover:shadow-violet-500 transition duration-300 px-3 mb-7 my-20 md:mb-0">
                        <div className="grid place-content-center relative bottom-12">
                            <Image
                                src="/img/shadesh.jpg"
                                height="150"
                                width="150"
                                alt="User"
                                draggable="false"
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-slate-700 dark:text-slate-200 font-semibold text-xl">
                                Shadesh Ram Gour
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <h4 className="text-slate-700 dark:text-slate-200  text-md">
                                Jr. Software Engineer
                            </h4>
                        </div>
                        <div className="flex justify-center">
                            <h5 className="text-slate-700 dark:text-slate-200  text-md">
                                BDEMR Solutions Corp.
                            </h5>
                        </div>
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 my-5 w-5/6 mx-auto text-center pb-3">
                                ???
                                Hi, I am Shadesh Ram Gour and I am a Junior Software Engineer. 
                                I am an independent and self-motivated quick learner and always love to learn new technologies. 
                                I am a hard-working person and very passionate about my work. Always eager to learn something new everyday.
                                ???
                            </p>
                        </div>
                        <div className="flex justify-center pb-5">
                            <a href="https://www.linkedin.com/in/shadesh-saha/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-500 hover:text-blue-500 duration-300">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href="https://github.com/shadeshsaha" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-slate-900 hover:text-slate-900 duration-300">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href="#" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaFacebook />
                                </span>
                            </a>
                            <a href="https://shadesh-portfolio.netlify.app/" target="_new" className="mr-3">
                                <span className="text-slate-700 dark:text-slate-200 text-2xl dark:hover:text-blue-600 hover:text-blue-600 duration-300">
                                    <FaLink />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>

            <div className="text-center py-20">???</div>

            <div className="w-3/5 mx-auto">
                <div className="py-8 px-0 sm:px-8">
                    <div>
                        <h2 className="text-center font-semibold text-3xl my-5">Who We Are?</h2>
                        <p className="text-center">We as a platform of about hundred plus lecturer around the world with thousand plus pre organized courses serving more then millions of students and learners through the globe. We are growing everyday, According to the past years of experiences we are building our platform more accessible and constantly adding new features for our students and teachers.</p>
                    </div>
                </div>
                <div className="py-8 px-0 sm:px-8 ">
                    <div>
                        <h2 className="text-center font-semibold text-3xl my-5">Our Mission</h2>
                        <h3 className="text-center font-semibold text-xl my-5">Spreading Knowledge At Low Cost</h3>
                        <p className="text-center">we are dedicated to provide recognizable and remarkable courses through the world on les cost then other competitor so that everyone around the world can access their desired Knowledge.</p>
                    </div>
                </div>
                <div className="py-8 px-0 sm:px-8">
                    <div>
                        <h2 className="text-center font-semibold text-3xl my-5">Our Vision</h2>
                        <h3 className="text-center font-semibold text-xl my-5 text-rose-5">Providing Education All Over The World</h3>
                        <p className="text-center">Our key motive is to reach those countries and places where education is a burden over family expenses and provide mandatory education so that the future of the world does not rely on un professional and illiterate people.</p>
                    </div>
                </div>
            </div>

            <Fade>
                <Contact />
            </Fade>
        </section>
    );
};

export default about;
