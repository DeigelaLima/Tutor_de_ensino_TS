import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getExercisesbyTheirId } from "@/services/ExerciseService";
import { useI18n } from 'vue-i18n';

export const useExerciseStore = defineStore("exerciseStore", () => {
    const { locale } = useI18n();

    const exerciseChoose = ref<string>("");
    const refactoredExercise = ref<string>("");
    const userExercise = ref<string>("");
    const title = ref<string>("");
    const feedback = ref(false);
    const refactorState = ref(true);
    const result = ref<any>(null);

    const description = computed(() => result.value?.description[locale.value]);
    const steps = computed(() => result.value?.refactoration[locale.value]);

    const stepKeyword = computed(() => locale.value === 'pt' ? 'Passo' : 'Step');
    const assertionKeyword = 'Assertion'; // Definido como string constante

    async function fetchExercise(id: number) {
        result.value = await getExercisesbyTheirId(id);
        exerciseChoose.value = result.value.text;
        refactoredExercise.value = result.value.textRefactored;
        title.value = result.value.categoryName;
    }

    function checkRefactor() {
        const regex = /\s/g;
        return (
            refactoredExercise.value.replace(regex, "") ===
            userExercise.value.replace(regex, "")
        );
    }

    function formatAssertString(text: string | undefined) {
        if (text === undefined) return [];
        const subArrays = text.split(assertionKeyword);
        subArrays.shift();
        return subArrays;
    }

    function formatStepString(text: string | undefined) {
        if (text === undefined) {
            return [];
        }
        let subArrays;
        if (text.indexOf(assertionKeyword) === -1) {
            subArrays = text.split(stepKeyword.value);
            subArrays.shift();
            return subArrays;
        } else {
            const newText: string = text.substring(0, text.indexOf(assertionKeyword));
            subArrays = newText.split(stepKeyword.value);
            subArrays.shift();
            return subArrays;
        }
    }
    

    const formatedSteps = computed(() => formatStepString(steps.value));
    const formatedAsserts = computed(() => formatAssertString(steps.value));

    return {
        exerciseChoose,
        refactoredExercise,
        userExercise,
        title,
        description,
        feedback,
        refactorState,
        formatedSteps,
        formatedAsserts,
        fetchExercise,
        checkRefactor,
        result,
        steps,
        stepKeyword,
        assertionKeyword,
    };
});