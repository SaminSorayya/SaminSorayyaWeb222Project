
// This function is designed to dynamically show or hide the "hourly-rate" section
// based on the state of the "Hiring" radio button. If the user selects "Hiring," 
// the hourly-rate section is displayed; otherwise, it remains hidden.

 function toggleHourlyRate() {
    var hourlyRateSection = document.getElementById('hourly-rate-section');
    var hiringRadioButton = document.querySelector('input[name="contact-reason"][value="hiring"]');

    hourlyRateSection.style.display = hiringRadioButton.checked ? 'block' : 'none';
}

// Listen for changes in the contact reason radio buttons
var contactReasonRadios = document.querySelectorAll('input[name="contact-reason"]');
contactReasonRadios.forEach(function (radio) {
    radio.addEventListener('change', toggleHourlyRate);
});
