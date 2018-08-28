<template>
    <div>
        <h1>Single-file JavaScript component</h1>
        <p>{{ message }}</p>
    </div>
</template>      

<script>
    module.exports = {
        data: function() {
            return {
                message: 'Text coming from the component.'
            }
        }
    }
</script>

<style>
</style>