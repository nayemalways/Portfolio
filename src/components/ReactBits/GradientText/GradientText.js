import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function GradientText({ children, className = "", colors = ["#ffaa40", "#9c40ff", "#ffaa40"], animationSpeed = 8, showBorder = false, }) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };
    return (_jsxs("div", { className: `relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`, children: [showBorder && (_jsx("div", { className: "absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient", style: Object.assign(Object.assign({}, gradientStyle), { backgroundSize: "300% 100%" }), children: _jsx("div", { className: "absolute inset-0 bg-black rounded-[1.25rem] z-[-1]", style: {
                        width: "calc(100% - 2px)",
                        height: "calc(100% - 2px)",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    } }) })), _jsx("div", { className: "inline-block relative z-2 text-transparent bg-cover animate-gradient", style: Object.assign(Object.assign({}, gradientStyle), { backgroundClip: "text", WebkitBackgroundClip: "text", backgroundSize: "300% 100%" }), children: children })] }));
}
