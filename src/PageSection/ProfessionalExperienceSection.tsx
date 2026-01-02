import OrbitingSkills from '../components/SeraUI/OrbitSkilss';
import Timeline from '../components/SeraUI/Timeline';

const ProfessionalExperienceSection = () => {
    return (
        <div className='container flex justify-between items-center max-md:flex-col'>
            <Timeline/>
            <div className='flex-1 w-full h-full relative z-0'>
                <OrbitingSkills/>
            </div>
        </div>
    );
};

export default ProfessionalExperienceSection;