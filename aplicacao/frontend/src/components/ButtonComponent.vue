<template>
    <v-btn min-width="200px" block rounded="xs" size="large" class="green-button" :disabled="disable" :onclick="onclick">
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
    .green-button {
        background-color: rgba(86, 175, 119, 1);
        color: white;
        max-width: 100px;
        margin-top: 3rem;
        text-align: center;
    }
</style>