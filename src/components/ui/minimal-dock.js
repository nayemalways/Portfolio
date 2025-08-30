"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, } from "framer-motion";
const HomeIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), _jsx("polyline", { points: "9 22 9 12 15 12 15 22" })] }));
const SearchIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("path", { d: "m21 21-4.35-4.35" })] }));
const BellIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }), _jsx("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })] }));
const MessageIcon = ({ className }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: _jsx("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }) }));
const PlusIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "M5 12h14" }), _jsx("path", { d: "M12 5v14" })] }));
const DockIcon = ({ mouseX, href, children, onClick, }) => {
    const ref = useRef(null);
    const defaultMouseX = useMotionValue(Infinity);
    const iconSize = 32;
    const iconMagnification = 48;
    const iconDistance = 120;
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
    return (_jsx(motion.div, { ref: ref, style: { width }, className: "flex aspect-square items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors", children: _jsx("a", { href: href, className: "flex h-full w-full items-center justify-center", onClick: handleClick, children: children }) }));
};
const MinimalDock = ({ children }) => {
    const mouseX = useMotionValue(Infinity);
    return (_jsx(motion.div, { onMouseMove: (e) => mouseX.set(e.pageX), onMouseLeave: () => mouseX.set(Infinity), className: "flex h-[50px] items-center gap-1 px-2", children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === DockIcon) {
                return React.cloneElement(child, Object.assign(Object.assign({}, child.props), { mouseX: mouseX }));
            }
            return child;
        }) }));
};
const MinimalDockApp = () => {
    const icons = [
        { name: "Home", component: HomeIcon, href: "#" },
        { name: "Search", component: SearchIcon, href: "#" },
        { name: "Bell", component: BellIcon, href: "#" },
        { name: "Message", component: MessageIcon, href: "#" },
        { name: "Plus", component: PlusIcon, href: "#" },
    ];
    return (_jsx("div", { className: "flex flex-col items-center justify-end bg-zinc-50 dark:bg-black font-sans", children: _jsx(MinimalDock, { children: icons.map((icon) => (_jsx(DockIcon, { href: icon.href, children: _jsx(icon.component, { className: "h-full w-full p-2 text-gray-700 dark:text-gray-300" }) }, icon.name))) }) }));
};
export default MinimalDockApp;
