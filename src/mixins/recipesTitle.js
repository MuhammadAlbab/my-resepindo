export default {
    methods: {
        theTitle(val){
            return val.substring(5, val.indexOf(','))
        }
    }
}