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
        }
    }
})

/* To Be Continued */