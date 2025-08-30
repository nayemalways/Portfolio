"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, } from "framer-motion";
const HomeIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), _jsx("polyline", { points: "9 22 9 12 15 12 15 22" })] }));
const FolderIcon = ({ className }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: _jsx("path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }) }));
const ImageIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }), _jsx("circle", { cx: "9", cy: "9", r: "2" }), _jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] }));
const MusicIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "M9 18V5l12-2v13" }), _jsx("circle", { cx: "6", cy: "18", r: "3" }), _jsx("circle", { cx: "18", cy: "16", r: "3" })] }));
const VideoIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "m22 8-6 4 6 4V8Z" }), _jsx("rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2" })] }));
const DownloadIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), _jsx("polyline", { points: "7 10 12 15 17 10" }), _jsx("line", { x1: "12", x2: "12", y1: "15", y2: "3" })] }));
const DockIcon = ({ mouseX, href, children, onClick, }) => {
    const ref = useRef(null);
    const defaultMouseX = useMotionValue(Infinity);
    const iconSize = 40;
    const iconMagnification = 64;
    const iconDistance = 150;
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
    return (_jsx(motion.div, { ref: ref, style: { width }, className: "flex aspect-square items-center justify-center rounded-2xl bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50", children: _jsx("a", { href: href, className: "flex h-full w-full items-center justify-center", onClick: handleClick, children: children }) }));
};
const FloatingDock = ({ children }) => {
    const mouseX = useMotionValue(Infinity);
    return (_jsx(motion.div, { onMouseMove: (e) => mouseX.set(e.pageX), onMouseLeave: () => mouseX.set(Infinity), className: "flex h-[70px] items-center gap-3 rounded-3xl bg-white/70 dark:bg-black/40 px-4 border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-2xl", style: {
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        }, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === DockIcon) {
                return React.cloneElement(child, Object.assign(Object.assign({}, child.props), { mouseX: mouseX }));
            }
            return child;
        }) }));
};
const FloatingDockApp = () => {
    const icons = [
        { name: "Home", component: HomeIcon, href: "#" },
        { name: "Folder", component: FolderIcon, href: "#" },
        { name: "Image", component: ImageIcon, href: "#" },
        { name: "Music", component: MusicIcon, href: "#" },
        { name: "Video", component: VideoIcon, href: "#" },
        { name: "Download", component: DownloadIcon, href: "#" },
    ];
    return (_jsx("div", { className: "flex flex-col items-center justify-end p-8", children: _jsx(FloatingDock, { children: icons.map((icon) => (_jsx(DockIcon, { href: icon.href, children: _jsx(icon.component, { className: "h-full w-full p-2.5 text-gray-700 dark:text-gray-300" }) }, icon.name))) }) }));
};
export default FloatingDockApp;
