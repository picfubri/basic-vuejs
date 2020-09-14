

/* Computed */
var app = new Vue({ // Heavy Logic
    el:'#heavyLogic', 
    data:{ 
        message: 'Try Heavy Logic',
    }
})
var app = new Vue({ // Light Logic
    el:'#lightLogic', 
    data:{ 
        message: 'Try Light Logic',
    },
    computed:{
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        now:function() {
            return Date.now()
        }
    },
    methods: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})

/* Computed vs Watch Properties */
var app = new Vue({ // Watch
    el:'#computedWatch', 
    data:{ 
       firstName: 'Bang',
       lastName: 'IAS',
       fullName: 'BangIAS'
    },
    watch:{
        firstName: function(val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function(val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
})

var app = new Vue({ // Computed
    el:'#computedWatch1', 
    data:{ 
       firstName: 'Bang',
       lastName: 'IAS'
    },
    computed:{
        fullName: {
            get: function() { //Computed Getter
                return this.fullName + ' ' + this.lastName
            },
            set: function() { //Computed Setter
                var names = newValue.split(' ')
                this.firstName = name[0]
                this.lastName = name[name.length - 1]
            }
        }
       /*fullName: function() { //OriginalComputed
            return this.firstName + ' ' + this.lastName
       }*/
    }
})


var watchExamleVM = new Vue({
    el: '#watch-example',
    data:{
        question: '',
        answer: "I can't give you an answer until you ask me!",
    },
    watch:{
        question:function (newQuestion, oldQuestion) {
            this.answer = 'waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.debouncedGetAnswer, 500)
    },
    methods:{
        getAnswer: function () {
            if(this.question.indexOf('?')==-1){
                this.answer = 'Questions must have a question mark'
                return
            }
            this.answer = 'Think...'
            var vm = this
            axios.get('https//yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! unable to process API. ' + error
                })
        }
    }
})