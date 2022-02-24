// For the About page Javascript

const counters = document.querySelectorAll('.counter');
counters.forEach((x) => {
    x.innerHTML = 0;
    const updateCounter = () => {
        const targetCount = + x.getAttribute('data-target');
        const startingCount = Number(x.innerHTML);
        const incrementCount = targetCount/50;

        if (startingCount < targetCount) {
            x.innerHTML = `${Math.round(startingCount + incrementCount)}`;
            setTimeout(updateCounter, 20);
        }
        else {
            x.innerHTML = targetCount;
        }
    }
    updateCounter();
});