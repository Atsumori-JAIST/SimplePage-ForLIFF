const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    /*
    data: {
        selectedState: -1,
        status: [
            { value: -1, label: 'すべて' },
            { value:  0, label: '作業中' },
            { value:  1, label: '完了'   },
        ],
        headers: [
            { text: 'Task',  value: 'task' },
            { text: 'Progress', value: 'progress' },
        ],
        todos: [
            { progress: 0, task: '買い物' },
            { progress: 1, task: 'アルゴリズム課題' },
            { progress: 0, task: '筋トレ' },
        ]
    },

    computed: {
    },

    methods: {
        getColor(progress) {
            if (progress == 0) return 'light-blue darken-1';
            else if (progress == 1) return 'red darken-4';
            else return 'blue-grey darken-3';
        }
    },
    */
})