import { useEffect, useState } from "react";

export const hrefLocation = () => {
    const [origin, setOrigin] = useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setOrigin(window.location.href);
        }
    }, []);

    return origin;
};