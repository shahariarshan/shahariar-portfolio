/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from "react-icons/fa";
// tools 
import html from '../assets/html-removebg-preview.png'
import css from '../assets/css-removebg-preview.png'
import tailwind from '../assets/tailwind-removebg-preview.png'
import react from '../assets/react-removebg-preview.png'
import reactDom from '../assets/react_router-removebg-preview.png'
import mongo from '../assets/mongo-removebg-preview.png'
import node from '../assets/node-removebg-preview.png'
import firebase from '../assets/firebase-removebg-preview.png'

import { FaLink } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import demo1 from '../../src/assets/Annotation 2023-12-12 000035.png'
import demo2 from '../../src/assets/Annotation 2023-12-12 000757.png'
import demo3 from '../../src/assets/Annotation 2023-12-12 000855.png'


import polling1 from '../../src/assets/Annotation 2023-12-12 001255.png'
import polling2 from '../../src/assets/Annotation 2023-12-12 001339.png'
import polling3 from '../../src/assets/Annotation 2023-12-12 001448.png'

import donate1 from '../../src/assets/Annotation 2023-12-12 143403.png'
import donate2 from '../../src/assets/Annotation 2023-12-12 144035.png'
import donate3 from '../../src/assets/Annotation 2023-12-12 144135.png'




const Projects = () => {
    return (
        <div name='Projects'>
            
            <h1 className=' text-5xl text-center font-serif' >My Projects</h1>
            <div className="divider divider-warning"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:p-10 ">

                <div>
                    <h1 className="mx-auto text-center text-2xl uppercase font-semibold text-amber-200">Event Management</h1>
                    <div className="card shadow-xl mt-5">
                        <Carousel>
                            <div>
                                <img src={demo1} />

                            </div>
                            <div>
                                <img src={demo2} />

                            </div>
                            <div>
                                <img src={demo3} />

                            </div>

                        </Carousel>
                        <div className="card-body text-center">

                            <p>Description:Event management(Health & Wealth Event.) website .Where denoted different kinds of event  about health and wealth </p>
                            <h3 className="text-center mx-auto text-lg font-mono text-blue-600">Tools that I Used For:</h3>

                            <div className="flex mx-auto gap-2">

                                <i className="material-icons"><img src={html} alt="" className="h-[40px] w-[40px]" /></i>
                                <i className="material-icons"><img src={css} alt="" className="h-[40px] w-[40px]" /></i>
                                <i className="material-icons"><img src={tailwind} alt="" className="h-[40px] w-[40px]" /></i>
                                <i className="material-icons"><img src={react} alt="" className="h-[40px] w-[40px]" /></i>
                                <i className="material-icons"><img src={reactDom} alt="" className="h-[40px] w-[40px]" /></i>
                                <i className="material-icons"><img src={firebase} alt="" className="h-[40px] w-[40px]" /></i>

                            </div>
                            <div className="card-actions justify-center">

                                <a className="btn btn-link" href="https://event-management-assignm-3ac5b.web.app/">Live Link<FaLink></FaLink></a>
                                <a className="btn btn-link" href="https://github.com/shahariarshan/event-management">Github<FaGithub></FaGithub></a>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="mx-auto text-center text-2xl uppercase font-semibold text-amber-200">Donation Camping</h1>
                    <div className="card shadow-xl mt-5">
                        <Carousel>
                            <div>
                                <img src={donate1} />

                            </div>
                            <div>
                                <img src={donate2} />

                            </div>
                            <div>
                                <img src={donate3} />

                            </div>

                        </Carousel>
                        <div className="card-body text-center">

                            <p>Description:This website is about Donate money in different Platform Like Health,education,clothing,food etc.Donator can see in which platform he/she donate by a pie chart </p>
                            <h3 className="text-center mx-auto text-lg font-mono text-blue-600">Tools that I Used For:</h3>
                            <div className="flex mx-auto gap-2">
                               

                                <i className="material-icons"><img src={html} alt="" className="h-[40px] w-[40px]" /></i>
                                <i className="material-icons"><img src={css} alt="" className="h-[40px] w-[40px]" /></i>
                                <i className="material-icons"><img src={tailwind} alt="" className="h-[40px] w-[40px]" /></i>
                                <i className="material-icons"><img src={react} alt="" className="h-[40px] w-[40px]" /></i>
                                <i className="material-icons"><img src={reactDom} alt="" className="h-[40px] w-[40px]" /></i>

                            </div>
                            <div className="card-actions justify-center">

                                <a className="btn btn-link" href="https://65145294d997730f8571e5b7--grand-sunburst-e1ffb8.netlify.app/">Live Link<FaLink></FaLink></a>
                                <a className="btn btn-link" href="https://github.com/shahariarshan/donation-camping2">Github<FaGithub></FaGithub></a>

                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                {/* <div>
                <h1 className="mx-auto text-center">Title: Fashion And Apparel</h1>
                <div className="card shadow-xl mt-5">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        
                        <p>Description:Fashion Apparel website where user can buy  dresses,watches,shoes,perfums etc. as they want to buy from different brands. </p>
                        <div className="card-actions justify-center">
                        <a className="btn btn-link" href="https://fashion-apparel-4c236.web.app/">Live Link<FaLink></FaLink></a>
                            <a className="btn btn-link" href="https://github.com/shahariarshan/fashion-apparel-client">Github<FaGithub></FaGithub></a>

                        </div>
                    </div>
                </div>
            </div> */}
                {/* 3 */}
                <div>
                    <h1 className="mx-auto text-center text-2xl uppercase font-semibold text-amber-200"> Project Survey and Polling</h1>

                    <div className="card shadow-xl mt-5">
                        <Carousel>
                            <div>
                                <img src={polling1} />

                            </div>
                            <div>
                                <img src={polling2} />

                            </div>

                            <div>
                                <img src={polling3} />

                            </div>

                        </Carousel>
                        <div className="card-body text-center">

                            <p>Description:Online polling  and survey where dashboard  divided in 3 user like admin ,surveyor and normal user.Normal User can't use admins and surveyor's dashboard. </p>
                            <h3 className="text-center mx-auto text-lg font-mono text-blue-600">Tools that I Used For:</h3>
                            <div className="flex mx-auto gap-2">
                               

<i className="material-icons"><img src={html} alt="" className="h-[40px] w-[40px]" /></i>
<i className="material-icons"><img src={css} alt="" className="h-[40px] w-[40px]" /></i>
<i className="material-icons"><img src={tailwind} alt="" className="h-[40px] w-[40px]" /></i>
<i className="material-icons"><img src={react} alt="" className="h-[40px] w-[40px]" /></i>
<i className="material-icons"><img src={reactDom} alt="" className="h-[40px] w-[40px]" /></i>
<i className="material-icons"><img src={firebase} alt="" className="h-[40px] w-[40px]" /></i>
<i className="material-icons"><img src={mongo} alt="" className="h-[40px] w-[40px]" /></i>

</div>
                            <div className="card-actions justify-center">
                                <a className="btn btn-link" href="https://survay-polling.web.app/">Live Link<FaLink></FaLink></a>
                                <a className="btn btn-link" href="https://github.com/shahariarshan/online-polling">Github<FaGithub></FaGithub></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;