<template>
  <div class="bg">
    <div :class="{cursorfollower:true, active:flag}"></div>
    <div class="testc" @mouseover="testover" @mouseleave="testleave">

    </div>
  </div>
</template>
  
<script>
  import { TweenLite } from "gsap";
  export default {
    data(){
      return{
        posX: 0, 
        posY: 0,
        mouseX: 0,
        mouseY: 0,
        flag:false
      }
    },
    created () {
        window.addEventListener('mousemove', this.mousePos)
    },
    destroyed () {
        window.addEventListener('mousemove', this.mousePos)
    },
    methods:{
      mousePos(e){
        this.mouseX = e.pageX;
        this.mouseY = e.pageY;
        let follower = document.querySelector(".cursorfollower");
        TweenLite.to(follower, 0.5, {
          css: {
            left: e.pageX,
            top: e.pageY
          }
        });
      },
      testover(){
        this.flag=true;
      },
      testleave(){
        this.flag=false;
      }
    }
  }
</script>
  
<style>
    .bg{
        position: relative;
        background-color: antiquewhite;
        width: 100%;
        height: 100%;
    }
    .testc{
        position: absolute;
        z-index: 1000;
        background-color: brown;
        width: 100px;
        height: 100px;
        top: 200px;
        left:200px;
    }
    .cursorfollower {
        position: absolute;
        background-color: rgba(207, 128, 128, 0.3);
        width: 50px;
        height: 50px;
        border-radius: 100%;
        z-index: 1;
        transition: 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform;
        user-select: none;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
    }
    .active {
        transform: scale(3);
        transition: 0.3s cubic-bezier(0, 0, 1, 1) transform;
    }
  
</style>