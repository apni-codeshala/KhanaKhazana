import { useState, useEffect } from "react";

const useOnline = () => {

    const [isOnline, seIsOnline] = useState(true);

    const handleOnline = () => {
        seIsOnline(true);
    }
    const handleOffline = () => {
        seIsOnline(false);
    }

    useEffect(() => {

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // At the time of leaving the page deleting event listener to optimize our app
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }

    }, []);

    return isOnline;
}

export default useOnline;