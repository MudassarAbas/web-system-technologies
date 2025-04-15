// Task-1

const eventArea = document.getElementById('eventArea');
        const output = document.getElementById('output');

        // Mouse Events
        eventArea.addEventListener('click', () => {
            output.textContent = 'Mouse Click Event';
        });

        eventArea.addEventListener('dblclick', () => {
            output.textContent = 'Mouse Double Click Event';
        });

        eventArea.addEventListener('mouseover', () => {
            eventArea.style.backgroundColor = 'lightblue';
            output.textContent = 'Mouse Over Event';
        });

        eventArea.addEventListener('mouseout', () => {
            eventArea.style.backgroundColor = 'white';
            output.textContent = 'Mouse Out Event';
        });

        eventArea.addEventListener('mousemove', (e) => {
            output.textContent = `Mouse Move Event - X: ${e.clientX}, Y: ${e.clientY}`;
        });

        // Keyboard Events
        document.addEventListener('keydown', (e) => {
            output.textContent = `Key Down Event - Key: ${e.key}`;
        });

        document.addEventListener('keyup', (e) => {
            output.textContent = `Key Up Event - Key: ${e.key}`;
        });

        document.addEventListener('keypress', (e) => {
            output.textContent = `Key Press Event - Key: ${e.key}`;
        });

        eventArea.addEventListener('focus', () => {
            output.textContent = 'Focus Event';
        });

        eventArea.addEventListener('blur', () => {
            output.textContent = 'Blur Event';
        });

// Task-2

const display = document.getElementById('coordinateDisplay');

document.addEventListener('mousemove', (e) => {
    display.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

// Task-3

 // Focus/blur events for input fields
 const inputs = document.querySelectorAll('input, textarea, select');
 inputs.forEach(input => {
     input.addEventListener('focus', (e) => {
         e.target.style.backgroundColor = '#fff8e1';
     });
     input.addEventListener('blur', (e) => {
         e.target.style.backgroundColor = 'white';
     });
 });

 // Real-time character count
 const bio = document.getElementById('bio');
 const charCount = document.getElementById('charCount');
 bio.addEventListener('input', () => {
     const count = bio.value.length;
     charCount.textContent = count;
     if (count > 100) {
         charCount.style.color = 'red';
     } else {
         charCount.style.color = '#666';
     }
 });

 // Dropdown change event
 const country = document.getElementById('country');
 const countryMessage = document.getElementById('countryMessage');
 country.addEventListener('change', (e) => {
     countryMessage.textContent = `You selected: ${e.target.options[e.target.selectedIndex].text}`;
 });

 // Form submission
 const form = document.getElementById('interactiveForm');
 form.addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Form submitted!');
     form.reset();
     charCount.textContent = '0';
     charCount.style.color = '#666';
     countryMessage.textContent = '';
 });
    