const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    data: {
        statusGroup: -1,
        status: [
            { value: -1, label: 'A' },
            { value:  0, label: 'B' },
            { value:  1, label: 'C'   },
        ],
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        ],
        checkbox: false,
    },

    computed: {
    },

    methods: {
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    },
})