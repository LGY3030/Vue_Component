<template> 
    <div class="flyobject" :style="{backgroundColor:color, width: getwidth + 'px', height: getheight + 'px', top: gettop + '%', left: getleft + '%', opacity: getopacity}">
    </div>
</template>

<script>
    export default {
        props: {
            color: { type: String },
            direction: { type: Number },
            startpoint: { type: Number },
        },
        data(){
            return{
                thiswidth: 0,
                thisheight: 0,
                thistop: 0,
                thisleft: 0,
                thisopacity: 1,
                topmove: 0,
                leftmove: 0,
            }
        },
        created () {
            window.addEventListener('scroll', this.scrollevent);
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollevent);
        },
        mounted(){
            switch(this.direction){
                case 1:
                    this.topmove=-0.05;
                    this.leftmove=0;
                    break;
                case 2:
                    this.topmove=-0.05;
                    this.leftmove=0.05;
                    break;
                case 3:
                    this.topmove=0;
                    this.leftmove=0.05;
                    break;
                case 4:
                    this.topmove=0.05;
                    this.leftmove=0.05;
                    break;
                case 5:
                    this.topmove=0.05;
                    this.leftmove=0;
                    break;
                case 6:
                    this.topmove=0.05;
                    this.leftmove=-0.05;
                    break;
                case 7:
                    this.topmove=0;
                    this.leftmove=-0.05;
                    break;
                case 8:
                    this.topmove=-0.05;
                    this.leftmove=-0.05;
                    break;
                case 9:
                    this.topmove=-0.025;
                    this.leftmove=0;
                    break;
                case 10:
                    this.topmove=-0.025;
                    this.leftmove=0.025;
                    break;
                case 11:
                    this.topmove=0;
                    this.leftmove=0.025;
                    break;
                case 12:
                    this.topmove=0.025;
                    this.leftmove=0.025;
                    break;
                case 13:
                    this.topmove=0.025;
                    this.leftmove=0;
                    break;
                case 14:
                    this.topmove=0.025;
                    this.leftmove=-0.025;
                    break;
                case 15:
                    this.topmove=0;
                    this.leftmove=-0.025;
                    break;
                case 16:
                    this.topmove=-0.025;
                    this.leftmove=-0.025;
                    break;
            }
        },
        computed:{
            getwidth(){
                return this.thiswidth;
            },
            getheight(){
                return this.thisheight;
            },
            gettop(){
                return this.thistop;
            },
            getleft(){
                return this.thisleft;
            },
            getopacity(){
                return this.thisopacity;
            },
        },
        methods:{
            scrollevent(){
                this.thiswidth=400*(Math.max((window.pageYOffset-this.startpoint)/1000,0));
                this.thisheight=400*(Math.max((window.pageYOffset-this.startpoint)/1000,0));
                this.thistop=50+(window.pageYOffset-this.startpoint)*this.topmove;
                this.thisleft=50+(window.pageYOffset-this.startpoint)*this.leftmove;
                this.thisopacity=1-Math.max((window.pageYOffset-this.startpoint)/1000,0);
            },
        },
    }
</script>

<style lang="scss" scoped>
.flyobject{
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    max-width: 400px;
    max-height: 400px;
}
</style>