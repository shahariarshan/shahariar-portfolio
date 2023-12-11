import { useLoaderData } from "react-router-dom";



const Skill = () => {
    const loader = useLoaderData()
    console.log(loader);
    return (
       <div className="mt-10">
       <div className="text-center mx-auto">
       <h1 className=' text-5xl font-serif' >My Skill</h1>
        <div className="divider divider-warning"></div>
       </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-10 ">
           
            {
                loader.map(skill =><div key={skill.id} className="card hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 .  shadow-xl">
                <figure><img className="object-cover h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform" src={skill.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-center mx-auto">{skill.name}</h2>
                  
                  
                </div>
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                  
                </div> */}
              </div>)
            }
        </div>
       </div>
    );
};


export default Skill;