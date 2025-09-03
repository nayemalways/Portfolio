import cartoon from "../assets/glow/cutout-ff.png"

export const AboutSection = () => {
  return (
    <div className="container"> 
          <div className="flex justify-between py-22">
                <div className="flex-1 self-center">
                    <h2 className="text-slate-100 text-5xl font-bold">About Me</h2>
                    <p className=" lg:pt-12 text-slate-200 text-lg">
                        I am a Junior Full-Stack Developer with a strong passion for creating scalable and efficient web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). With hands-on experience in both front-end and back-end development, I enjoy building dynamic, user-friendly interfaces while ensuring robust server-side functionality and database management. I am eager to learn new technologies, solve real-world problems, and continuously improve my skills through challenging projects.

                        My strengths include writing clean, maintainable code, collaborating effectively within a team, and adapting quickly to new tools and workflows. I have a keen interest in exploring best practices in software development, including version control with Git, API integration, and responsive design. As an aspiring software engineer, my goal is to contribute to innovative projects that not only enhance user experience but also deliver reliable performance at scale.
                    </p>
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <img className="max-w-xl w-md rounded-2xl " src={cartoon} alt="" />
                </div>
          </div>
    </div>
  )
}
