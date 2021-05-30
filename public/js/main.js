const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    data: {
        qGroup: 0,
        question: [
            { text: '内定式の出欠について 回答ください' },
            { text: '内定式の感想について 回答ください' },
            { text: '独身寮への入寮を希望しますか' },
            { text: '新人研修座談会（入社前研修）への出欠について回答ください' },
            { text: '災害情報について' },
        ],
        answer: [
            { value: false },
            { value: false },
            { value: false },
            { value: false },
            { value: false },
        ],
    },

    computed: {
    },

    methods: {
        postAns () {
            fetch('https://testforlife.herokuapp.com/', {
                method: 'post',
                body: this.answer
            })
            .then(response => {
                console.log(response);
            })
        },
    },
})