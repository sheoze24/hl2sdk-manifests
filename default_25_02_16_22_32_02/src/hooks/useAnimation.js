import { useState } from 'react';

const useAnimation = (frameCount) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [play, setPlay] = useState(false);
    const [speed, setSpeed] = useState(30);

    const togglePlay = () => {
        setPlay(!play);
    };

    return {
        currentFrame,
        play: togglePlay,
        pause: () => setPlay(false),
        speed,
        setSpeed,
    };
};

export default useAnimation;
