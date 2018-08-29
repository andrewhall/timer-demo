<template>
    <div>
        {{ warningMessage }}
    </div>
</template>

<script>
    module.exports = {
        data () {
            return {
                warningMessage: 'Your session is about to expire. Please close this dialog to prevent timing out.',
                timedoutMessage: 'Session has timed out. Please close the window and re-access your application via CONOPS.'
            }
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style></style>