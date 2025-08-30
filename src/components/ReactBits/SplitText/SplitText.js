import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);
const SplitText = ({ text, className = "", delay = 100, duration = 0.6, ease = "power3.out", splitType = "chars", from = { opacity: 0, y: 40 }, to = { opacity: 1, y: 0 }, threshold = 0.1, rootMargin = "-100px", tag = "h1", textAlign = "center", onLetterAnimationComplete, }) => {
    const ref = useRef(null);
    const animationCompletedRef = useRef(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        if (document.fonts.status === "loaded") {
            setFontsLoaded(true);
        }
        else {
            document.fonts.ready.then(() => {
                setFontsLoaded(true);
            });
        }
    }, []);
    useGSAP(() => {
        if (!ref.current || !text || !fontsLoaded)
            return;
        const el = ref.current;
        if (el._rbsplitInstance) {
            try {
                el._rbsplitInstance.revert();
            }
            catch (_) { }
            el._rbsplitInstance = undefined;
        }
        const startPct = (1 - threshold) * 100;
        const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
        const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
        const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
        const sign = marginValue === 0
            ? ""
            : marginValue < 0
                ? `-=${Math.abs(marginValue)}${marginUnit}`
                : `+=${marginValue}${marginUnit}`;
        const start = `top ${startPct}%${sign}`;
        let targets = [];
        const assignTargets = (self) => {
            var _a;
            if (splitType.includes("chars") &&
                ((_a = self.chars) === null || _a === void 0 ? void 0 : _a.length))
                targets = self.chars;
            if (!targets.length && splitType.includes("words") && self.words.length)
                targets = self.words;
            if (!targets.length && splitType.includes("lines") && self.lines.length)
                targets = self.lines;
            if (!targets.length)
                targets = self.chars || self.words || self.lines;
        };
        const splitInstance = new GSAPSplitText(el, {
            type: splitType,
            smartWrap: true,
            autoSplit: splitType === "lines",
            linesClass: "split-line",
            wordsClass: "split-word",
            charsClass: "split-char",
            reduceWhiteSpace: false,
            onSplit: (self) => {
                assignTargets(self);
                return gsap.fromTo(targets, Object.assign({}, from), Object.assign(Object.assign({}, to), { duration,
                    ease, stagger: delay / 1000, scrollTrigger: {
                        trigger: el,
                        start,
                        once: true,
                        fastScrollEnd: true,
                        anticipatePin: 0.4,
                    }, onComplete: () => {
                        animationCompletedRef.current = true;
                        onLetterAnimationComplete === null || onLetterAnimationComplete === void 0 ? void 0 : onLetterAnimationComplete();
                    }, willChange: "transform, opacity", force3D: true }));
            },
        });
        el._rbsplitInstance = splitInstance;
        return () => {
            ScrollTrigger.getAll().forEach((st) => {
                if (st.trigger === el)
                    st.kill();
            });
            try {
                splitInstance.revert();
            }
            catch (_) { }
            el._rbsplitInstance = undefined;
        };
    }, {
        dependencies: [
            text,
            delay,
            duration,
            ease,
            splitType,
            JSON.stringify(from),
            JSON.stringify(to),
            threshold,
            rootMargin,
            fontsLoaded,
            onLetterAnimationComplete,
        ],
        scope: ref,
    });
    const renderTag = () => {
        const style = {
            textAlign,
            wordWrap: "break-word",
            willChange: "transform, opacity",
        };
        const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;
        switch (tag) {
            case "h1":
                return (_jsx("h1", { ref: ref, style: style, className: classes, children: text }));
            case "h2":
                return (_jsx("h2", { ref: ref, style: style, className: classes, children: text }));
            case "h3":
                return (_jsx("h3", { ref: ref, style: style, className: classes, children: text }));
            case "h4":
                return (_jsx("h4", { ref: ref, style: style, className: classes, children: text }));
            case "h5":
                return (_jsx("h5", { ref: ref, style: style, className: classes, children: text }));
            case "h6":
                return (_jsx("h6", { ref: ref, style: style, className: classes, children: text }));
            default:
                return (_jsx("p", { ref: ref, style: style, className: classes, children: text }));
        }
    };
    return renderTag();
};
export default SplitText;
