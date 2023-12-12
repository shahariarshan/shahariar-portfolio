import about from '../../src/assets/3.jfif'

const About = () => {
    return (
<div className='mt-16' name='about'>
    <h1 className='text-center mx-auto text-5xl font-serif' >About Me</h1>
    <div className="divider divider-warning"></div>
<div className="hero w-full">
        <div className="hero-content flex-col lg:flex-row">
          
          <div className='lg:pl-24'>
           
            <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           
          </div>
          <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
</div>
    );
};

export default About;