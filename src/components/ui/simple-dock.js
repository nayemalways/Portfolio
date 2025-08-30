"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, } from "framer-motion";
const HomeIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), _jsx("polyline", { points: "9 22 9 12 15 12 15 22" })] }));
const EditIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" }), _jsx("path", { d: "m15 5 4 4" })] }));
const GithubIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35.0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35.0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }), _jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })] }));
const SettingsIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }), _jsx("circle", { cx: "12", cy: "12", r: "3" })] }));
const UserIcon = ({ className }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, children: [_jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), _jsx("circle", { cx: "12", cy: "7", r: "4" })] }));
const DockIcon = ({ mouseX, href, children, onClick, }) => {
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
    return (_jsx(motion.div, { ref: ref, style: { width }, className: "flex aspect-square items-center justify-center rounded-full", children: _jsx("a", { href: href, className: "flex h-full w-full items-center justify-center", onClick: handleClick, children: children }) }));
};
const SimpleDock = ({ children }) => {
    const mouseX = useMotionValue(Infinity);
    return (_jsx(motion.div, { onMouseMove: (e) => mouseX.set(e.pageX), onMouseLeave: () => mouseX.set(Infinity), className: "flex h-[58px] items-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-3 border border-gray-200 dark:border-gray-700", children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === DockIcon) {
                return React.cloneElement(child, Object.assign(Object.assign({}, child.props), { mouseX: mouseX }));
            }
            return child;
        }) }));
};
const SimpleDockApp = () => {
    const icons = [
        { name: "Home", component: HomeIcon, href: "#" },
        { name: "Edit", component: EditIcon, href: "#" },
        { name: "GitHub", component: GithubIcon, href: "#" },
        { name: "Settings", component: SettingsIcon, href: "#" },
        { name: "User", component: UserIcon, href: "#" },
    ];
    return (_jsx("div", { className: "flex flex-col items-center justify-end bg-zinc-50 dark:bg-black font-sans", children: _jsx(SimpleDock, { children: icons.map((icon) => (_jsx(DockIcon, { href: icon.href, children: _jsx(icon.component, { className: "h-full w-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" }) }, icon.name))) }) }));
};
export default SimpleDockApp;
