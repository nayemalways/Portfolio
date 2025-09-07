import cartoon from "../assets/image.png"
 import  pinkGlow  from '../assets/glow/Gradient1.png';

export const AboutSection = () => {
  return (
    <div id="about" className="container max-sm:pt-28 max-lg:pt-48"> 
          <div className="flex rounded-br-4xl flex-col lg:flex-row justify-between bg-cover bg-no-repeat px-2 md:px-12 py-14 md:py-12" style={{ backgroundImage: `url(${pinkGlow})` }}>
                <div className="flex-1 self-center" >
                    <h2 className="relative max-md:text-center block text-slate-100 text-3xl md:text-5xl font-bold md:pb-3
                      after:inline-block after:h-1 after:mt-2
                      after:w-[100px] after:bg-purple-500/70
                      after:rounded-sm
                      after:shadow-[0_0_10px_rgba(128,0,255,0.8),0_0_20px_rgba(128,0,255,0.6),0_0_30px_rgba(128,0,255,0.4)]">
                      About Me
                    </h2>
                    <p className="max-w-xl text-center text-wrap md:text-left py-4 lg:pt-12 text-slate-200 text-[16px] md:text-lg">
                        I’m Nayem, a Junior Full-stack MERN Developer passionate about building clean, user-friendly web applications. I work with MongoDB, Express.js, React, and Node.js, and I’m always eager to learn new technologies.
                          <br className="max-md:hidden"/>
                        I enjoy solving problems, exploring new tools, and turning ideas into real projects. My goal is to keep improving as a developer and contribute to impactful applications that make a difference.
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img className="max-w-md w-[320px] md:w-[380px] " src={cartoon} alt="" />
                </div>
          </div>
    </div>
  )
}
