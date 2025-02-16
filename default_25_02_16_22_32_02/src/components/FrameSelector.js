import React from 'react';
import { extractFrames } from '../utils/spriteUtils';

const FrameSelector = ({ spriteSheet, onFrameSelect }) => {
    const frames = extractFrames(spriteSheet);

    return (
        <div className="sprite-grid">
            {frames.map((frame, index) => (
                <div
                    key={index}
                    className={`sprite-frame ${frame.selected ? 'selected' : ''}`}
                    onClick={() => onFrameSelect(frame)}
                    style={{ backgroundImage: `url(${frame.src})` }}
                ></div>
            ))}
        </div>
    );
};

export default FrameSelector;
