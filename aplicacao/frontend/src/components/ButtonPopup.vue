<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn class="exercise-button" v-bind="props" :disabled="disable" :text=text :onclick=onclick > </v-btn>
        </template>

        <template v-if="refactor" v-slot:default="{ }">
            <v-card class="success" title="Parabéns!">
            <v-card-text>
                Excelente trabalho!<br>O test smell foi refatorado com sucesso, deixando o código de teste mais limpo.
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                text="Proximo"
                @click="() => router.push('/')"
                ></v-btn>
            </v-card-actions>
            </v-card>
        </template>

        <template v-else v-slot:default="{ isActive }">
            <v-card class="fail" title="Que pena :(">
            <v-card-text>
                Tem algo errado...<br>Tente novamente seguindo o passo a passo.
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                text="Fechar"
                @click="isActive.value = false"
                ></v-btn>
            </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps<{
    text: string
    disable: boolean
    refactor: boolean
    onclick?: () => void
}>()

</script>

<style scoped>

.success {
    background-color: rgba(86, 175, 119, 1);
    color: white;
}

.fail {
    background-color: rgb(172, 74, 74);
    color: white;
}

.exercise-button {
    background-color: rgba(86, 175, 119, 1);
    color: white !important;
    height: 40px !important;
    width: 170px;
    margin-top: 2rem;
    text-align: center;
}
</style>