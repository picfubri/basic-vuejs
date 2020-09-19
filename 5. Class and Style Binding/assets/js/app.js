var app = new Vue({ // v-bind:class directive
    el:'.static', 
    data:{ 
        isActive: true,
        hasError: false
    }
})

var app = new Vue({ //class with computed
    el:'.object',
    data:{
        /*isActive: true,
        error: null*/
        classObject:{
            active: false,
            'text-danger': true
        }
    },
    /*computed:{ // With computed
        classObject: function () {
            return{
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === "fatal"
            }
        }
    }*/
})

var app = new Vue({
    el:'.arTrnary',
    data:{
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

//ContinueToTorrow