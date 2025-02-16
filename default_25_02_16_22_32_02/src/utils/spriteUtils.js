export const extractFrames = (spriteSheet) => {
    const img = new Image();
    img.src = spriteSheet;
    const frameWidth = 100; // Example frame width
    const frameHeight = 100; // Example frame height
    const frames = [];

    for (let y = 0; y < img.height; y += frameHeight) {
        for (let x = 0; x < img.width; x += frameWidth) {
            frames.push({
                src: `${spriteSheet}#${x},${y},${frameWidth},${frameHeight}`,
                selected: false
            });
        }
    }

    return frames;
};
