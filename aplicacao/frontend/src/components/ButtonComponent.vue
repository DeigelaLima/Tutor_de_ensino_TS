<template>
    <v-btn class="exercise-button" :disabled="disable" :onclick="onclick">
        {{ text }}
    </v-btn>
</template>

<script setup lang ="ts">
defineProps<{
    text: string
    disable: boolean
    onclick?: () => void
}>()
</script>

<style scoped>
    
    .exercise-button {
        background-color: rgba(86, 175, 119, 1);
        color: white;
        height: 40px !important;
        width: 170px;
        margin-top: 2rem;
        text-align: center;
    }
</style>