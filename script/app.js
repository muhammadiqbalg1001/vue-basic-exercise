const DEFAULT_STATE = {
    state: true,
    inputName: '',
    names: [],
    error: '',
    showError: false,
    result: '',
}

const app = Vue.createApp({
    data() {
        return {
            state: true,
            inputName: '',
            names: [],
            error: '',
            showError: false,
            result: '',
        }
    },
    computed: {
        isReady() {
            return this.names.length > 1;
        }
    },
    methods: {
        addNameToList() {
            const userName = this.inputName;
            if (this.validate(userName)) {
                this.names.push(userName);
                this.inputName = '';
                this.showError = false;
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
        },
        removeName(index) {
            this.names.splice(index, 1);
        },
        showResult() {
            this.generateResult();
            this.state = false;
        },
        getRandomName() {
            return this.names[Math.floor(Math.random() * this.names.length)]
        },
        generateResult() {
            let randomName = this.getRandomName()
            if(this.result !== '') {
                while (randomName === this.result) {
                    randomName = this.getRandomName()
                }
            }

            this.result = randomName
        },
        resetApp() {
            this.state = true;
            this.inputName= '';
            this.names= [];
            this.error= '';
            this.showError= false;
            this.result= '';
        },
        getNewResult() {
            this.generateResult();
        }
    },
}).mount('#app')