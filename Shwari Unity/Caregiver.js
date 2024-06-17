document.addEventListener('DOMContentLoaded', function() {
   
    const patients = []; 
    const schedule = []; 
    const messages = []; 

    const patientsCard = document.getElementById('patients-card');
    const scheduleCard = document.getElementById('schedule-card');
    const messagesCard = document.getElementById('messages-card');

    const patientsMessage = document.getElementById('patients-message');
    const scheduleMessage = document.getElementById('schedule-message');
    const messagesMessage = document.getElementById('messages-message');

    // Patients button
    document.getElementById('view-patients-btn').addEventListener('click', function() {
        if (patients.length === 0) {
            patientsMessage.classList.remove('hidden');
        } else {
            patientsMessage.classList.add('hidden');
            alert('Viewing Patients: ' + patients.join(', '));
        }
    });

    // Schedule button
    document.getElementById('view-schedule-btn').addEventListener('click', function() {
        if (schedule.length === 0) {
            scheduleMessage.classList.remove('hidden');
        } else {
            scheduleMessage.classList.add('hidden');
            alert('Viewing Schedule: ' + schedule.join(', '));
        }
    });

    // Messages button
    document.getElementById('view-messages-btn').addEventListener('click', function() {
        if (messages.length === 0) {
            messagesMessage.classList.remove('hidden');
        } else {
            messagesMessage.classList.add('hidden');
            alert('Viewing Messages: ' + messages.join(', '));
        }
    });
});
