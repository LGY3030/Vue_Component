<template> 
    <div :id="index" :class="{flyoutobject:true, objectleft:index%2==0, objectright:index%2==1}" :style="{backgroundColor:color, transform: gettranslate}">
    </div>
</template>

<script>
    export default {
        props: {
            color: { type: String },
            index: { type: Number },
        },
        data(){
            return{

            }
        },
        computed:{
            gettranslate(){
                return "translate3D("+ (this.getRandomInt(50) - 25) +"%, "+ (this.getRandomInt(100)  - 50) +"%, "+ (-300*this.index)+"px)";
            }
        },
        mounted(){
            //document.getElementById(this.index).setAttribute("transform", "translate3D("+ (Math.random(50) - 25) +"%, "+ (Math.random(100) - 50) +"%, "+ (-300*this.index)+"px)")
        },
        methods:{
            getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
        },
    }
</script>

<style lang="scss" scoped>
    .flyoutobject{
        position: absolute;
        display: block;
        width: 45%;
        height: 200px;
        top: 40%;
    }
    .objectleft{
        left: 0;
    }
    .objectright{
        right: 0;
    }
</style>