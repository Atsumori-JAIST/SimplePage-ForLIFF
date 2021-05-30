const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    data: {
        qaGroup: 0,
        qas: [
            { value: false , text: '内定式の出欠について 回答ください' },
            { value: false , text: '内定式の感想について 回答ください' },
            { value: false , text: '独身寮への入寮を希望しますか' },
            { value: false , text: '新人研修座談会（入社前研修）への出欠について回答ください' },
            { value: false , text: '災害情報について' },
        ],
    },

    computed: {
    },

    methods: {
        postAns () {
            fetch('https://testforlife.herokuapp.com/', {
                method: 'post',
                body: JSON.stringify(this.qas)
            })
            .then(response => {
                console.log(response);
            })
        },
    },
})