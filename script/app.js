const app = Vue.createApp({
    data() {
        return {
            state: true,
            inputName: '',
            names: [],
        }
    },
    methods: {
        addNameToList() {
            const userName = this.inputName;
            if (this.validate(userName)) {
                this.names.push(userName);
                this.inputName = '';
                console.log(this.names)
            } else {
                console.log('name error')
            }
        },
        validate() {
            return true
        }
    },
}).mount('#app')