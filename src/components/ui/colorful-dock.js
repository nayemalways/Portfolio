"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, } from "framer-motion";
const HomeIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), _jsx("polyline", { points: "9 22 9 12 15 12 15 22" })] }));
const HeartIcon = ({ className }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: _jsx("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" }) }));
const StarIcon = ({ className }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: _jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) }));
const ZapIcon = ({ className }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: _jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) }));
const SparklesIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }), _jsx("path", { d: "M5 3v4" }), _jsx("path", { d: "M19 17v4" }), _jsx("path", { d: "M3 5h4" }), _jsx("path", { d: "M17 19h4" })] }));
const RocketIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }), _jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }), _jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }), _jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })] }));
const DockIcon = ({ mouseX, href, children, onClick, gradient, }) => {
    const ref = useRef(null);
    const defaultMouseX = useMotionValue(Infinity);
    const iconSize = 36;
    const iconMagnification = 60;
    const iconDistance = 140;
    const distance = useTransform(mouseX !== null && mouseX !== void 0 ? mouseX : defaultMouseX, (val) => {
        var _a, _b;
        const bounds = (_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });
    const widthSync = useTransform(distance, [-iconDistance, 0, iconDistance], [iconSize, iconMagnification, iconSize]);
    const width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const handleClick = (e) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };
    return (_jsx(motion.div, { ref: ref, style: { width }, className: `flex aspect-square items-center justify-center rounded-full ${gradient || "bg-gradient-to-br from-blue-400 to-purple-600"} shadow-lg`, children: _jsx("a", { href: href, className: "flex h-full w-full items-center justify-center", onClick: handleClick, children: children }) }));
};
const ColorfulDock = ({ children }) => {
    const mouseX = useMotionValue(Infinity);
    return (_jsx(motion.div, { onMouseMove: (e) => mouseX.set(e.pageX), onMouseLeave: () => mouseX.set(Infinity), className: "flex h-[58px] items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-red-900/30 px-3 border border-purple-300/30 dark:border-purple-700/30 backdrop-blur-lg shadow-xl", children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === DockIcon) {
                return React.cloneElement(child, Object.assign(Object.assign({}, child.props), { mouseX: mouseX }));
            }
            return child;
        }) }));
};
const ColorfulDockApp = () => {
    const icons = [
        {
            name: "Home",
            component: HomeIcon,
            href: "#",
            gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
        },
        {
            name: "Heart",
            component: HeartIcon,
            href: "#",
            gradient: "bg-gradient-to-br from-pink-400 to-red-600",
        },
        {
            name: "Star",
            component: StarIcon,
            href: "#",
            gradient: "bg-gradient-to-br from-yellow-400 to-orange-600",
        },
        {
            name: "Zap",
            component: ZapIcon,
            href: "#",
            gradient: "bg-gradient-to-br from-purple-400 to-purple-600",
        },
        {
            name: "Sparkles",
            component: SparklesIcon,
            href: "#",
            gradient: "bg-gradient-to-br from-emerald-400 to-teal-600",
        },
        {
            name: "Rocket",
            component: RocketIcon,
            href: "#",
            gradient: "bg-gradient-to-br from-indigo-400 to-cyan-600",
        },
    ];
    return (_jsx("div", { className: "flex flex-col items-center justify-end bg-zinc-50 dark:bg-black font-sans", children: _jsx(ColorfulDock, { children: icons.map((icon) => (_jsx(DockIcon, { href: icon.href, gradient: icon.gradient, children: _jsx(icon.component, { className: "h-full w-full p-2 text-white drop-shadow-sm" }) }, icon.name))) }) }));
};
export default ColorfulDockApp;
