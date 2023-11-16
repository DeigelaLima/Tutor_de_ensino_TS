<template>
    <button class="back-button" :onclick="onclick">
        <v-avatar size="30" class="mr-1">
            <v-img src="../assets/arrow.png"/>
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