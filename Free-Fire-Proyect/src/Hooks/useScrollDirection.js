import { useEffect, useState } from "react";

function UseScrollDirection() {
    const [showNavbar, setShowNavbar] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);
    
        const hanldeScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };
    
        useEffect(() => {
            window.addEventListener("scroll", hanldeScroll);
            return () => {
                window.removeEventListener("scroll", hanldeScroll)
            }
        }, [lastScrollY])
    return showNavbar
}

export default UseScrollDirection
