import { project } from '../assets/constant/constant';
import ProjectCard from '../components/local/ProjectCard';

const ProjectSection = () => {
    return (
        <div className='container pt-10'>
            <h2 className="relative max-md:text-center block text-slate-100 text-3xl md:text-5xl font-bold md:pb-3
                after:inline-block after:h-1 after:mt-2
                after:w-[100px] after:bg-purple-500/70
                after:rounded-sm
                after:shadow-[0_0_10px_rgba(128,0,255,0.8),0_0_20px_rgba(128,0,255,0.6),0_0_30px_rgba(128,0,255,0.4)]">
                Recent Majestry
            </h2>
            <div className='py-12 flex justify-center items-center gap-10 flex-wrap'>
                {
                    project.map((item, i) => (
                        <ProjectCard key={i +1} {...item} />
                    ))
                }
            </div>
        </div>
    );
};

export default ProjectSection;