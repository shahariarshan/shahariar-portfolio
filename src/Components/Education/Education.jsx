import { PiGoogleChromeLogoBold } from "react-icons/pi";

const Education = () => {
    return (
        <div name='education'>
            <h1 className=' text-5xl text-center font-serif ' >My Education</h1>
            <div className="divider divider-warning"></div>
            
                
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto mt-10">
                        <div className="card   shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-center uppercase font-semibold text-amber-200">Secondary School Certificate(SSC)</h2>
                              <div className="flex ">
                                 <h3> <span className="font-bold text-lg mr-2">School:</span>Mohanagar Ideal School.</h3>
                                <a href="http://www.mic.edu.bd/"><PiGoogleChromeLogoBold className="text-2xl text-blue-800"></PiGoogleChromeLogoBold></a>
                                </div>
                                <p><span className="font-bold text-lg mr-2">Duration:</span>2014-2016</p>
                                <p><span className="font-bold text-lg mr-2">Result:</span>GPA 5.00 out of 5.00(Science)</p>
                            </div>
                        </div>
                        <div className="card   shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-center uppercase font-semibold text-amber-200"> Higher Secondary Certificate(HSC)</h2>
                                <div className="flex ">
                                 <h3> <span className="font-bold text-lg mr-2">College:</span>Motijheel Govt.Boys School & College.</h3>
                                <a href="https://www.mgbhs.edu.bd/"><PiGoogleChromeLogoBold className="text-2xl text-blue-800"></PiGoogleChromeLogoBold></a>
                                </div>
                                <p><span className="font-bold text-lg mr-2">Duration:</span>2016-2018</p>
                                <p><span className="font-bold text-lg mr-2">Result:</span>GPA 3.87 out of 5.00(Science)</p>
                                
                            </div>
                        </div>
                        <div>
                        <div className="card   shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-center uppercase font-semibold text-amber-200">Bachelor of Science (BSc)</h2>
                                <div className="flex ">
                                 <h3 ><span className="font-bold text-lg mr-2">University:</span>Bangladesh Institution of science and tecnology.</h3>
                                <a href="https://bist.ac.bd/"><PiGoogleChromeLogoBold className="text-2xl text-blue-800"></PiGoogleChromeLogoBold></a>
                                </div>
                                <p><span className="font-bold text-lg mr-2">Duration:</span>2018-2023(Running Final Year)</p>
                                <p><span className="font-bold text-lg mr-2">Result:</span>GPA 3.07 out of 4.00(Computer Science Eng.)</p>
                                
                            </div>
                        </div>
                    </div>
                    </div>
               
            </div>
       
    );
};

export default Education;