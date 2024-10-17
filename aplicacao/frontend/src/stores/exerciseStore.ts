import { defineStore } from "pinia";
import { ref } from "vue";
import { getExercisesbyTheirId } from "@/services/ExerciseService";

export const useExerciseStore = defineStore("exerciseStore", () => {
    const exerciseChoose = ref<string>("");
    const refactoredExercise = ref<string>("");
    const userExercise = ref<string>("");
    const title = ref<string>("");
    const description = ref<string>("");
    const feedback = ref(false);
    const refactorState = ref(true);
    const formatedSteps = ref<string[]>([]);
    const formatedAsserts = ref<string[]>([]);

    async function fetchExercise(id: number) {
        const result = await getExercisesbyTheirId(id);
        exerciseChoose.value = result.text;
        refactoredExercise.value = result.textRefactored;
        title.value = result.categoryName;
        description.value = result.description;
        formatStepString(result.refactoration);
        formatAssertString(result.refactoration);
    }

    function checkRefactor() {
        const regex = /\s/g;
        return (
            refactoredExercise.value.replace(regex, "") ===
            userExercise.value.replace(regex, "")
        );
    }

    function formatAssertString(text: string | undefined) {
        if (text === undefined) return;
        const subArrays = text.split("Assertion");
        subArrays.shift();
        formatedAsserts.value = subArrays;
    }

    function formatStepString(text: string | undefined) {
        if (text === undefined) {
            return;
        }
        let subArrays;
        if (text.indexOf("Assertion") === -1) {
            subArrays = text.split("Passo");
            subArrays.shift();
            formatedSteps.value = subArrays.map((step) => step.split("\n")).flat();
        } else {
            const newText: string = text.substring(0, text.indexOf("Assertion"));
            subArrays = newText.split("Passo");
            subArrays.shift();
            formatedSteps.value = subArrays.map((step) => step.split("\n")).flat();
        }
    }

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
    };
});
