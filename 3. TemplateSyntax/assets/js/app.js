/* Interpolation */
var app = new Vue({ // TEXTS
    el:'#app-1', 
    data:{ 
        text: 'Hai!, this is Text',
        text1: 'Try It'
    }
})
var app = new Vue({ // Raw HTML
    el:'#app-2', 
    data:{ 
        rawHTML: 'Uusing Text Mustache and RawHTML',

    }
})
var app = new Vue({ // Attribute
    el:'#app-3', 
    data:{ 
        isActive: true,
        hasError: false

    }
})