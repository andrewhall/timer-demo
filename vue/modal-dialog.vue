<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-header">
                <slot name="header"></slot>
            </div>
            <div class="modal-body">
                <slot name="body">
                    <h3>{{ warningMessage }}</h3>
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>      

<script>
    module.exports = {
        data () {
            return {
                warningMessage: 'Your session is about to expire. Please close this dialog to prevent timing out.',
                timedoutMessage: 'Session has timed out. Please close the window and re-access your application via CONOPS.'
            }
        }
    }
</script>

<style>
    .modal-mask {
        display: block; /* Hidden by default */
        position: fixed;
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; /* Full height */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    .modal-wrapper {
        background-color: #e9e9e9;
        margin: auto;
        border: 1px solid #888;
        width: 600px;
        max-width: 600px;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-radius: 6px; /* future proofing */
        -khtml-border-radius: 6px; /* for old Konqueror browsers */
        padding: 4px;
    }

    .modal-header {
        border: none;
        background-color: #e9e9e9;
        font-size: 1.2em;
        color: #333;
        font-weight: bold;
        padding: 4px 10px 4px 10px;
    }

    .modal-footer {
        padding: 0px 10px 6px 10px;
        text-align: right;
    }

    /* Modal Content */
    .modal-body {
        margin: 0px 4px 8px 4px;
        padding: 40px 20px 20px 20px;
        border: 1px solid #bbb;
        background-color: #fff;
    }
</style>