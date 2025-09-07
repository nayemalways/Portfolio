import React from "react";
import type { IProjects } from "../../assets/constant/constant";

 const ProjectCard: React.FC<IProjects> = ({img, title, subtitle, description, live, client, server}) => {
    const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const divRef = React.useRef<HTMLDivElement>(null);

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface MouseMoveEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

    const handleMouseMove = (e: MouseMoveEvent) => {
        if (!divRef.current) return;
        const bounds: DOMRect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    return (
        <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
            className="relative w-92 h-105 rounded-xl p-px bg-gray-900 backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer">
                <div className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ top: position.y - 120, left: position.x - 120, }}/>

            <div className="relative z-10 bg-gray-900/75 h-full w-full rounded-[11px]">
                <img src={img} alt="Profile Avatar" className="w-full h-52 shadow-lg shadow-purple-800 my-4 mt-auto transition object-cover" />
                <h2 className="text-2xl font-bold text-white mb-1 px-4"> {title} </h2>
                <p className="text-sm text-indigo-500 font-medium px-4 mb-4"> {subtitle} </p>
                <p className="text-sm text-slate-400 mb-4 px-4 list-disc">
                     {description}
                </p>

                {/* Link  */}
                <div className="flex justify-center items-center gap-1">
                    <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a href={live} target="_blank" title="Get quote now"
                                className="relative flex items-center justify-center gap-1 px-6 py-2 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">
                                    <span>Live</span>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z"
                                            fill="currentColor"
                                        />
                                        </svg>
                            </a>
                    </div>
                    <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a href={client} target="_blank" title="Get quote now"
                                className="relative flex items-center justify-center gap-1 px-6 py-2 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">
                                    <span>Client</span>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z"
                                            fill="currentColor"
                                        />
                                        </svg>
                            </a>
                    </div>
                    <div className="relative inline-flex group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a href={server} target="_blank" title="Get quote now"
                                className="relative flex items-center justify-center gap-1 px-6 py-2 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">
                                    <span>Server</span>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z"
                                            fill="currentColor"
                                        />
                                        </svg>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProjectCard;