// modules
import { useState, useEffect } from "react";

// components

// styles
import "./FloatingNavbarItem.scss";
import "./FloatingNavbarItem_desktop.scss";
import "./FloatingNavbarItem_mobile.scss";

import { WrapperProps } from "../../../../common/commonProps";

interface FloatingNavbarItemProps extends WrapperProps {
    id: string;
    
    activeIconSrc: string;
    inactiveIconSrc: string;

    subviewIndex: number;
    spanIndex: number;
}

const FloatingNavbarItem = (props: FloatingNavbarItemProps) => {
    const [hover, setHover] = useState(false);
    const [scroll, setScroll] = useState(false);

    const targetID = `trailer-subview-${props.subviewIndex}-span-${props.spanIndex}`;

    // On hover
    useEffect(() => {
        const makeIconActive = () => {
            setHover(true);
        };

        const makeIconInactive = () => {
            setHover(false);
        };

        const floatingNavbarItem = document.getElementById(props.id);
        if (floatingNavbarItem) {
            floatingNavbarItem.addEventListener("mouseenter", makeIconActive);
            floatingNavbarItem.addEventListener("mouseleave", makeIconInactive);
        }

        return () => {
            if (floatingNavbarItem) {
                floatingNavbarItem.removeEventListener("mouseenter", makeIconActive);
                floatingNavbarItem.removeEventListener("mouseleave", makeIconInactive);
            }
        };
    }, [props.id]);

    // On scroll
    useEffect(() => {
        var target = document.getElementById(targetID);

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            const entry = entries[0];

            if (entry.isIntersecting) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1
        });

        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };

    },[targetID])

    // On click
    const handleClick = () => {
        var target = document.getElementById(targetID);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    var iconSrc = (hover || scroll) ? props.activeIconSrc : props.inactiveIconSrc;

    return (
        <div className={`floating-navbar-item ${props.className}`} id={props.id} style={props.style} onClick={handleClick}>
            <img className="floating-navbar-item-icon" src={iconSrc} alt="not found" />
        </div>
    );
};

export default FloatingNavbarItem;
