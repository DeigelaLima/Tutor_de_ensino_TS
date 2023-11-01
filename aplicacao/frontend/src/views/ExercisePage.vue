<template>
    <v-container fluid class="container">
        <v-row>
            <v-col>
                <h1 align="center">{{ exerciseTitle }}</h1>
                <Codemirror :model-value="exercise" style="height: 60vh; width: 50vw;" />
                <h5>{{ exerciseLink }}</h5>
            </v-col>
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
const smellName = ref("Ignored Test");
const exerciseTitle = ref("Teste");
const exerciseLink = ref("Exercise repo link");
const exercise = ref(`@Ignore\n@Test\npublic void testSampling() {\n      final double[] weights = { 0.3, 0.7 };\n      final double[][] means = { { -1.5, 2.0 }, { 4.0, 8.2 } };\n      final double[][][] covariances = { { { 2.0, -1.1 },{ -1.1, 2.0 } },{ { 3.5, 1.5 },\n{ 1.5, 3.5 } } };\n      final MixtureMultivariateNormalDistribution d = \n          new MixtureMultivariateNormalDistribution(weights, means, covariances);\n      final MultivariateRealDistribution.Sampler sampler =\n          d.createSampler(RandomSource.WELL_19937_C.create(50));\n      final double[][] correctSamples = getCorrectSamples();\n      final int n = correctSamples.length;\n      final double[][] samples=AbstractMultivariateRealDistribution.sample(n,sampler);\n       for (int i = 0; i < n; i++) {\n           for (int j = 0; j < samples[i].length; j++) {\n                Assert.assertEquals('sample[" + j + "]", \n                  correctSamples[i][j], samples[i][j], 1e-16);\n
           }\n
       }\n
}
`);

</script>

<style scoped>


    .container {
        margin-top: 30px;
        height: 100vh;
    }

    .foot-buttons{
        padding-top: 2rem;
    }

    .description {
        padding: 2rem 0;
    }

</style>