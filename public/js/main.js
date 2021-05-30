const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    data: {
        qaGroup: 0,
        qas: [
            { value: false , text: '内定式には出席しましたか' },
            { value: false , text: '内定式の感想について 回答ください' },
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
                    "aImpressions": {
                        "value": "入力ああああ"
                    },
                    "attend": {
                        "value": 1
                    },
                    "dom": {
                        "value": 0
                    },
                    "attend_for_new_comer": {
                        "value": 1
                    }
                }
            };
            /*-- 時間あったら4つ以上の質問にも対応できるように
            for (let i=0; i<Object(this.qas).length; i++) {
                postdata = 
            }
            */
            
            /*
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