const communicationButton = document.querySelector('#communication-button');
const communicationSection = document.querySelector('#communication-content');
const programationButton = document.querySelector('#programation-button');
const programationSection = document.querySelector('#programation-content');
const designButton = document.querySelector('#design-button');
const designSection = document.querySelector('#design-content');

// event listener for each button and swtich display of each section hide if
// show and show if hide

communicationSection.style.display = 'none';
programationSection.style.display = 'none';
designSection.style.display = 'none';

communicationButton.addEventListener('click', () => {
    if (communicationSection.style.display === 'none') {
        communicationSection.style.display = 'flex';
        programationSection.style.display = 'none';
        designSection.style.display = 'none';
    } else {
        communicationSection.style.display = 'none';
        programationSection.style.display = 'none';
        designSection.style.display = 'none';
    }
});

programationButton.addEventListener('click', () => {
    if (programationSection.style.display === 'none') {
        programationSection.style.display = 'flex';
        communicationSection.style.display = 'none';
        designSection.style.display = 'none';
    } else {
        programationSection.style.display = 'none';
        communicationSection.style.display = 'none';
        designSection.style.display = 'none';
    }
});

designButton.addEventListener('click', () => {
    if (designSection.style.display === 'none') {
        designSection.style.display = 'flex';
        communicationSection.style.display = 'none';
        programationSection.style.display = 'none';
    } else {
        designSection.style.display = 'none';
        programationSection.style.display = 'none';
        communicationSection.style.display = 'none';
    }
});