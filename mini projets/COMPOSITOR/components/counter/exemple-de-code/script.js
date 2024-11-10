document.addEventListener("DOMContentLoaded", function() {
    const startNumberInput = document.getElementById('start-number');
    const endNumberInput = document.getElementById('end-number');
    const prefixInput = document.getElementById('prefix');
    const suffixInput = document.getElementById('suffix');
    const durationInput = document.getElementById('duration');
    const separatorCheckbox = document.getElementById('separator');
    const separatorTypeSelect = document.getElementById('separator-type');
    const titleInput = document.getElementById('title');
    const titleTagSelect = document.getElementById('title-tag');
    const counterContainer = document.getElementById('counter-container');

    function animateCounter(start, end, duration, prefix, suffix, separator, separatorType, element) {
        const range = end - start;
        const stepTime = 50; // update every 50ms
        const steps = duration / stepTime;
        const stepSize = range / steps;

        let current = start;
        const separatorChar = separator ? (separatorType === 'comma' ? ',' : separatorType === 'dot' ? '.' : ' ') : '';

        const timer = setInterval(() => {
            current += stepSize;
            if ((stepSize > 0 && current >= end) || (stepSize < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.innerHTML = `${prefix}${Math.round(current).toString().replace(/\B(?=(\d{3})+(?!\d))/g, separatorChar)}${suffix}`;
        }, stepTime);

        // Ensure the counter reaches the end number exactly at the end of the duration
        setTimeout(() => {
            clearInterval(timer);
            element.innerHTML = `${prefix}${end.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separatorChar)}${suffix}`;
        }, duration);
    }

    document.getElementById('start-counter').addEventListener('click', () => {
        const startNumber = parseInt(startNumberInput.value);
        const endNumber = parseInt(endNumberInput.value);
        const duration = parseInt(durationInput.value);
        const prefix = prefixInput.value;
        const suffix = suffixInput.value;
        const separator = separatorCheckbox.checked;
        const separatorType = separatorTypeSelect.value;
        const title = titleInput.value;
        const titleTag = titleTagSelect.value;
        
        // Clear the previous counter
        counterContainer.innerHTML = '';
        
        // Create and append title element
        const titleElement = document.createElement(titleTag);
        titleElement.textContent = title;
        counterContainer.appendChild(titleElement);
        
        // Create and append counter element
        const counterElement = document.createElement('div');
        counterContainer.appendChild(counterElement);
        
        animateCounter(startNumber, endNumber, duration, prefix, suffix, separator, separatorType, counterElement);
    });
});
