const app = Vue.createApp({
    data() {
        return {
            state: true,
            inputName: '',
            names: [],
            error: '',
            showError: false,
        }
    },
    methods: {
        addNameToList() {
            const userName = this.inputName;
            if (this.validate(userName)) {
                this.names.push(userName);
                this.inputName = '';
                this.showError = false;
                console.log(this.names)
            } else {
                this.showError = true
            }
        },
        validate(value) {
            this.error = '';
            if (value === '') {
                this.error = "Name can't be empty"
                return false
            }

            if (this.names.includes(value)) {
                this.error = 'Name is already in the list, please input unique name'
                return false
            }

            return true
        }
    },
}).mount('#app')