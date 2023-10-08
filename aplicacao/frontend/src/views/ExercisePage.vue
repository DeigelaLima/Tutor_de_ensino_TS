<template>
    <v-container fluid class="container">
        <v-row>
            <Codemirror style="height: 70vh; width: 50vw; padding: 2rem 0 0 2rem" />
            <v-col>
                <v-card-text align="center">
                    <h1>{{ smellName }}</h1>
                    <p class="description">{{ smellDescription }}</p>
                    <h3>No código ao lado existe este tipo de test smell, você pode refatorá-lo?</h3>
                    <ButtonComponent text="Técnicas" :disable="false"/>
                </v-card-text>
            </v-col>
        </v-row>
        <v-row class="foot-buttons" justify="space-around">
            <ButtonComponent text="Refatorar" :disable="true" />
            <ButtonComponent text="Próximo" :disable="true" />
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Codemirror } from 'vue-codemirror';
import ButtonComponent from '../components/ButtonComponent.vue';

const smellDescription = ref("Esse tipo de Test Smell ocorre quando um método de teste é suprimido de execução usando recursos fornecidos pelo JUnit 4. No entanto, essa abordagem de Ignored Test pode resultar em sobrecarga durante o tempo de compilação, além de aumentar a complexidade e dificultar a compreensão do código.");   
const smellName = ref("Ignored Test")

</script>

<style scoped>
    .foot-buttons{
        padding-top: 2rem;
    }

    .description {
        padding: 2rem 0;
    }

</style>