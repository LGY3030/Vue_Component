<template>
    <div class="viewport" :style="{height: getviewportheight + 'px'}">
        <div class="scene3D-container">
          <div class="scene3D" id="scene3D">
            <flyobject 
                v-for="data in objectdata"
                :key="data.index"
                :color="data.color"
                :index="data.index"
            />
          </div>
        </div>
    </div>
</template>
  
<script>
    import flyobject from '@/components/flyobject.vue'
    import objectdata from '@/assets/js/data/objectdata'
    export default {
        components: {
            flyobject,
        },
        data(){
            return{
                objectdata,

            }
        },
        created () {
            window.addEventListener('scroll', this.scrollevent);
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollevent);
        },
        mounted(){
            console.log(this.objectdata.length);
        },
        computed:{
            getviewportheight(){
                return window.innerHeight + 150 + 2*150*this.objectdata.length;
            }
        },
        methods:{
            scrollevent(){
                document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
            },
        },
    }
</script>
  
<style lang="scss" scoped>
    :root{
        --cameraZ: 0;
    }
    .viewport{
        width: 100%;
        background-color: aqua;
        .scene3D-container{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            perspective: 150px;
            perspective-origin: 50% 30%;
            will-change: perspective-origin;
            transform: translate3d(0, 0, 0);
            .scene3D {
                position: absolute;
                top: 0;
                height: 100vh;
                width: 100%;
                transform-style: preserve-3d;
                transform: translateZ(calc(var(--cameraZ) * 1px));
                will-change: transform;
            }
        }
    }
</style>
  