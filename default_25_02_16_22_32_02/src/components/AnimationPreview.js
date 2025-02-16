import React, { useEffect } from 'react';

const AnimationPreview = ({ frames, currentFrame, play, pause, speed, setSpeed }) => {
    useEffect(() => {
        if (play) {
            const interval = setInterval(() => {
                setCurrentFrame((prev) => (prev + 1) % frames.length);
            }, 1000 / speed);
            return () => clearInterval(interval);
        }
    }, [play, speed, frames.length]);

    return (
        <div>
            <div className="animation-preview">
                {frames.length > 0 && <img src={frames[currentFrame].src} alt="Animation Frame" />}
            </div>
            <div>
                <button onClick={play}>Play</button>
                <button onClick={pause}>Pause</button>
                <input
                    type="range"
                    min="1"
                    max="60"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default AnimationPreview;
