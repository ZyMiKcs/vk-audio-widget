export const pauseAnimation = () => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => {
        bar.style.animationPlayState = 'paused';
    });
};

export const resumeAnimation = () => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => {
        bar.style.animationPlayState = 'running';
    });
};
