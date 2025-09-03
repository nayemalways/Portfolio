import cartoon from "../assets/glow/cutout-ff.png"
 import  pinkGlow  from '../assets/glow/Gradient1.png';

export const AboutSection = () => {
  return (
    <div className="container max-sm:pt-28 "> 
          <div className="flex h-[70vh] rounded-br-4xl flex-col md:flex-row justify-between bg-cover bg-no-repeat px-2 md:px-12 py-14" style={{ backgroundImage: `url(${pinkGlow})` }}>
             {/* <img className="absolute -z-1 right-" src={pinkGlow} alt="glow" /> */}
                <div className="flex-1 self-center " >
                    <h2 className="text-slate-100 text-5xl font-bold text-center md:text-left">About Me</h2>
                    <p className="text-center md:text-left py-4 lg:pt-12 text-slate-200 text-lg">
                        I’m Nayem, a Junior Full-stack MERN Developer passionate about building clean, user-friendly web applications. I work with MongoDB, Express.js, React, and Node.js, and I’m always eager to learn new technologies.
                          <br className="max-md:hidden"/>
                        I enjoy solving problems, exploring new tools, and turning ideas into real projects. My goal is to keep improving as a developer and contribute to impactful applications that make a difference.
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img className="max-w-md w-[300px] " src={cartoon} alt="" />
                </div>
          </div>
    </div>
  )
}
