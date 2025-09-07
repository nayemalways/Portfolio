"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const AboutIcon = ({ className }: { className?: string }) => (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-user-round-icon lucide-user-round ${className}`}><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>

);
const ProjectIcon = ({ className }: {className?: string}) => (
 <>
  <svg
    version="1.1"
    id="Uploaded to svgrepo.com"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24px"
    height="24px"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    className={className}
  >
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html: "\n\t.blueprint_een{fill:#fff;}\n"
      }}
    />
    <path
      className="blueprint_een"
      d="M29,5H3v18h26V5z M28,22H4V6h24V22z M31.01,2H0.99C0.443,2,0,2.443,0,2.99v22.02
	C0,25.557,0.443,26,0.99,26H11v2H9.99C9.443,28,9,28.443,9,28.99v0.02C9,29.557,9.443,30,9.99,30h12.02
	c0.547,0,0.99-0.443,0.99-0.99v-0.02c0-0.547-0.443-0.99-0.99-0.99H21v-2h10.01c0.547,0,0.99-0.443,0.99-0.99V2.99
	C32,2.443,31.557,2,31.01,2z M19,28h-6v-3h6V28z M30,24H2V4h28V24z M21,12H11v-1h10V12z M21,14H11v-1h10V14z M21,16H11v-1h10V16z
	 M6,8H5V7h1V8z M8,8H7V7h1V8z"
    />
  </svg>
</>


);
const SkillsIcon = ({ className }: { className?: string }) => (
 <svg 
 xmlns="http://www.w3.org/2000/svg" 
 width="24" 
 height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-message-circle-code-icon lucide-message-circle-code ${className}`}><path d="m10 9-3 3 3 3"/><path d="m14 15 3-3-3-3"/><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>

);

interface DockIconProps {
  mouseX?: MotionValue<number>;
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({
  mouseX,
  href,
  children,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const defaultMouseX = useMotionValue(Infinity);

  const iconSize = 36;
  const iconMagnification = 60;
  const iconDistance = 140;

  const distance = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-iconDistance, 0, iconDistance],
    [iconSize, iconMagnification, iconSize]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square items-center justify-center rounded-full"
    >
      <a
        href={href}
        className="flex h-full w-full items-center justify-center"
        onClick={handleClick}
      >
        {children}
      </a>
    </motion.div>
  );
};

interface DockProps {
  children: React.ReactNode;
}

const Dock: React.FC<DockProps> = ({ children }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-[58px] items-center gap-2 rounded-2xl bg-black/60 dark:bg-black/50 px-2 border border-black/10 dark:border-white/10 backdrop-blur-lg"
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(
            child as React.ReactElement<DockIconProps>,
            {
              ...(child.props as DockIconProps),
              mouseX: mouseX,
            }
          );
        }
        return child;
      })}
    </motion.div>
  );
};

const DockApp: React.FC = () => {
  const icons = [
    { name: "Home", component: HomeIcon, href: "#hero" },
    { name: "About", component: AboutIcon, href: "#about" },
    { name: "Skills", component: SkillsIcon, href: "#skills" },
    { name: "Projects", component: ProjectIcon, href: "#projects" },
    { name: "Mail", component: MailIcon, href: "#contact" },
  ];

  return (
    <div className="flex flex-col fixed z-50 left-1/2 -translate-x-1/2 bottom-2 items-center justify-end dark:bg-black font-sans">
      <Dock>
        {icons.map((icon) => (
          <DockIcon key={icon.name} href={icon.href}>
            <icon.component className="h-full w-full p-2 text-zinc-300 dark:text-zinc-300" />
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};

export default DockApp;
