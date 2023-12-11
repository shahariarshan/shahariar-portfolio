import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import demo1 from '../../src/assets/Annotation 2023-12-12 000035.png'
import demo2 from '../../src/assets/Annotation 2023-12-12 000757.png'
import demo3 from '../../src/assets/Annotation 2023-12-12 000855.png'


import polling1 from '../../src/assets/Annotation 2023-12-12 001255.png'
import polling2 from '../../src/assets/Annotation 2023-12-12 001339.png'
import polling3 from '../../src/assets/Annotation 2023-12-12 001448.png'




const Projects = () => {
    return (
        <div  >
            <h1 className="pt-24 mx-auto text-center">My Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:p-10 ">
          
            <div>
                <h1 className="mx-auto text-center">Title:Event Management</h1>
                <div className="card shadow-xl">
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
                        <div className="card-actions justify-center">
                            <Link className="btn btn-link">Demo</Link>
                            <a className="btn btn-link" href="https://github.com/shahariarshan/event-management">Github<FaGithub></FaGithub></a>

                        </div>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div>
                <h1 className="mx-auto text-center">Title: Fashion And Apparel</h1>
                <div className="card shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        
                        <p>Description:Fashion Apparel website where user can buy  dresses,watches,shoes,perfums etc. as they want to buy from different brands. </p>
                        <div className="card-actions justify-center">
                            <Link className="btn btn-link">Demo</Link>
                            <a className="btn btn-link" href="https://github.com/shahariarshan/fashion-apparel-client">Github<FaGithub></FaGithub></a>

                        </div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div>
                <h1 className="mx-auto text-center">Title: Project Survey and Polling</h1>

                <div className="card shadow-xl">
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
                        <div className="card-actions justify-center">
                            <Link className="btn btn-link">Demo</Link>
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