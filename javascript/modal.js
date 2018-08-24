var TIME_OUT = 15000;
var WARNING = 10000;
var timeoutTimer;
var warningTimer;

// Get the modals
var timedOutModal = document.getElementById('toModal');
var warningModal = document.getElementById('warnModal');

// Watch for user events when no dialogs are open
if (warningModal.style.display === 'none' && timedOutModal.style.display === 'none') {
    window.onclick = function () { resetTimers() }
    window.onkeydown = function () { resetTimers() }
    window.onfocus = function () { resetTimers() }
    window.onwheel = function () { resetTimers() }
    window.onscroll = function () { resetTimers() }
}

// Get the buttons
var timedOutButton = document.getElementById("toBtn");
var warningButton = document.getElementById("warnBtn");
var closeButton = document.getElementById("close");

// When the user clicks the button, open the modals 
timedOutButton.onclick = function () { showTimedoutModal() }
warningButton.onclick = function () { showWarningModal() }

// Start timers on page load
window.onload = function () { setup() }

// Spinup timers
function setup() {
    warningTimer = setTimeout(showWarningModal, WARNING);
    timeoutTimer = setTimeout(showTimedoutModal, TIME_OUT);
}

// Reset timeouts and restart timers
function resetTimers() {
    clearTimeout(warningTimer);
    clearTimeout(timeoutTimer);
    setup();
}

// Display timeout warning modal
function showWarningModal() {
    closeModals();
    warningModal.style.display = "block";
}

// Close warning modal and show timed out modal
function showTimedoutModal() {
    closeModals();
    timedOutModal.style.display = "block";
}

// Close all open dialogs
function closeModals() {
    warningModal.style.display = "none";
    timedOutModal.style.display = "none";
}

// Close warning dialog and reset timers
closeButton.onclick = function () {
    closeModals();
    resetTimers();
}