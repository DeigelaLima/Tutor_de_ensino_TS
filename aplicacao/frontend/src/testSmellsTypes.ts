import i18n from './i18n'
import { computed } from 'vue';  // Importar computed para reatividade para atuliazar os dados sempre que o idoma mudar

export const TestSmells = computed(() => [
    { 
        id: 1, 
        name: i18n.global.t('testSmellsTypes.assertionRoulette.name'), 
        description: i18n.global.t('testSmellsTypes.assertionRoulette.description'),
        exercise: { idSmell: [10, 11, 12] }
    },
    { 
        id: 2,
        name: i18n.global.t('testSmellsTypes.duplicateAssert.name'), 
        description: i18n.global.t('testSmellsTypes.duplicateAssert.description'),
        exercise: { idSmell: [7, 8, 9] }
    },
    {
        id: 3, 
        name: i18n.global.t('testSmellsTypes.eagerTest.name'), 
        description: i18n.global.t('testSmellsTypes.eagerTest.description'),
        exercise: {idSmell: [4, 5, 6]}
    },
    {
        id: 4,
        name: i18n.global.t('testSmellsTypes.ignoredTest.name'),
        description: i18n.global.t('testSmellsTypes.ignoredTest.description'),
        exercise: { idSmell: [1, 2, 3] }
    },
]);