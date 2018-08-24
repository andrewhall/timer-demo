var TIME_OUT = 15000;
var WARNING = 10000;
var timeoutTimer;
var warningTimer;

// Get the modals
var toModal = document.getElementById('toModal');
var warnModal = document.getElementById('warnModal');

// only capture events when no dialogs are open
if (warnModal.style.display === 'none' && toModal.style.display === 'none') {
    window.onclick = function(evnt) {log(evnt)}
    window.onkeydown = function(evnt) {log(evnt)}
    window.onfocus = function(evnt) {log(evnt)}
    window.onwheel = function(evnt) {log(evnt)}
    window.onscroll = function(evnt) {log(evnt)}
}

function log(evnt) {
    console.log(evnt.target.id);
    resetTimers();
}

// Get the button that opens the modals
var tobtn = document.getElementById("toBtn");
var warnbtn = document.getElementById("warnBtn");

// When the user clicks the button, open the modals 
tobtn.onclick = function() {showTimedoutModal()}

warnbtn.onclick = function() {showWarningModal()}

// Get the button that closes the warning modal
var close = document.getElementById("close"); 
                       
// Start timers on page load
window.onload = function() {setup()}

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
    warnModal.style.display = "block";
}

// Close warning modal and show timed out modal
function showTimedoutModal() {
    closeModals();
    toModal.style.display = "block";
}

// Close all open dialogs
function closeModals() {
    warnModal.style.display = "none";
    toModal.style.display = "none";
}

// Close warning dialog and reset timers
close.onclick = function () {
    closeModals();
    resetTimers();
}