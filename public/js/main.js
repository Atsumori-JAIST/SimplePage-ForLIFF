const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    data: {
        qaGroup: 0,
        qas: [
            { value: false , text: '内定式には出席しましたか' },
            { value: "" ,    text: '内定式の感想について 回答ください' },
            { value: false , text: '独身寮への入寮を希望しますか' },
            { value: false , text: '新人研修座談会（入社前研修）への出欠について回答ください' },
        ],
        setq: [
            { text: '質問1' },
            { text: '質問1' },
            { text: '質問1' },
            { text: '質問1' },
        ],
    },

    computed: {
    },

    methods: {
        postAns () {
            console.log(Object(this.qas).length);
            let postdata = {
                "app": 6,
                "record": {
                    "attend": {
                        "value": (new Number(this.qas[0].value)).valueOf()
                    },
                    "aImpressions": {
                        "value": this.qas[1].value
                    },
                    "dom": {
                        "value": (new Number(this.qas[2].value)).valueOf()
                    },
                    "attend_for_new_comer": {
                        "value": (new Number(this.qas[3].value)).valueOf()
                    }
                },

            };
            
            /*-- Fetchだめだた(Cross Origin ---)
            fetch('https://first-project-9474-dev.twil.io/defalut_question', {
                method: 'post',
                //body: JSON.stringify(this.qas)
                body: JSON.stringify(postdata)
            })
            .then(response => {
                console.log(response);
            })
            */
            
            axios.post('https://first-project-9474-dev.twil.io/defalut_question', postdata);
        },
    },
})