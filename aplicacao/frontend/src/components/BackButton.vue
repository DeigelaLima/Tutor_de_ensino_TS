<template>
    <button class="back-button" :onclick="onclick">
        <v-avatar size="32px">
            <v-img src="@/assets/back-button.svg" alt="Voltar" />
        </v-avatar>
    </button>
</template>

<script setup lang="ts">


defineProps<{
    onclick?: () => void
}>()
</script>

<style>

.back-button{
    height: fit-content;
}

</style>