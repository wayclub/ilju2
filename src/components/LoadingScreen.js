import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // This effect will set the fading out state after 4.5 seconds
        const timeout = setTimeout(() => {
            setIsFadingOut(true);
        }, 4500); // Fade out after 4.5 seconds

        return () => {
            clearTimeout(timeout);  // Clean up the timeout if component is unmounted
        }
    }, []);

    return (
        <div className={`loading-container ${isFadingOut ? 'fade-out' : ''}`}>
          <div className="circle-spinner">
          </div>
          <p>일주 찾아오는 중...</p>
        </div>
    );
}

export default LoadingScreen;
