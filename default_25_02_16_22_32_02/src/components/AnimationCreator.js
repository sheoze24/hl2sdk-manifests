import React, { useState } from 'react';
import FrameSelector from './FrameSelector';
import AnimationPreview from './AnimationPreview';
import useAnimation from '../hooks/useAnimation';

const AnimationCreator = () => {
    const [spriteSheet, setSpriteSheet] = useState(null);
    const [selectedFrames, setSelectedFrames] = useState([]);
    const { currentFrame, play, pause, speed, setSpeed } = useAnimation(selectedFrames.length);

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setSpriteSheet(url);
        }
    };

    const handleFrameSelect = (frame) => {
        setSelectedFrames(prev => {
            if (prev.includes(frame)) {
                return prev.filter(f => f !== frame);
            } else {
                return [...prev, frame];
            }
        });
    };

    return (
        <div className="container">
            <h1>2D Sprite Animation Creator</h1>
            <input type="file" accept="image/*" onChange={handleUpload} />
            {spriteSheet && (
                <FrameSelector
                    spriteSheet={spriteSheet}
                    onFrameSelect={handleFrameSelect}
                />
            )}
            <AnimationPreview
                frames={selectedFrames}
                currentFrame={currentFrame}
                play={play}
                pause={pause}
                speed={speed}
                setSpeed={setSpeed}
            />
        </div>
    );
};

export default AnimationCreator;
