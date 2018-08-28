<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-header">
                <slot name="header">
                    <p v-if="isWarning">Warning Notice</p>
                    <p v-else>Timed Out Notice</p>
                </slot>
            </div>
            <div class="modal-body">
                <slot name="body">
                    <p v-if="isWarning">{{ warningMessage }}</p>
                    <p v-else>{{ timedoutMessage }}</p>
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="footer" v-if="isWarning === true">
                    <button type="button" class="closeButton" @click="close">Close</button>
                </slot>
            </div>
        </div>
    </div>
</template>      

<script>
    module.exports = {
        data () {
            return {
                warningMessage: 'Your session is about to expire. Please close this dialog to prevent timing out.',
                timedoutMessage: 'Session has timed out. Please close the window and re-access your application via CONOPS.',
                isWarning: true
            }
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style>
    .modal-mask {
        display: block; 
        position: fixed;
        z-index: 1; 
        padding-top: 100px; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        background-color: rgb(0,0,0); 
        background-color: rgba(0,0,0,0.4);
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