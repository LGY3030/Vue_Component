<template>
    <div id="transitionpartbg" :class="{transitionpartbg:true, movetransition1:gettoggle, movetransition2:getendtoggle}">
        <div class="eachtransition" style="left: 40vw;">

        </div>
        <div class="eachtransition" style="left: 30vw;">

        </div>
        <div class="eachtransition" style="left: 20vw;">

        </div>
        <div class="eachtransition" style="left: 10vw;">

        </div>
        <div class="eachtransition" style="left: 0;">

        </div>
    </div>
</template>

<script>
import {scroller} from 'vue-scrollto/src/scrollTo'
export default {
    data(){
        return{

        }
    },
  components: {

  },
  mounted(){
    const transition = document.querySelector('.transitionpartbg');
    transition.addEventListener('transitionend', () => {
        this.functionfortransition();
    });
  },
  methods:{
    functionfortransition(){
        console.log(document.getElementById("transitionpartbg").getBoundingClientRect().left);
        if(Math.floor(document.getElementById("transitionpartbg").getBoundingClientRect().left)==Math.floor(-window.innerWidth*0.8)){
            const goscroll = scroller();
            goscroll(this.$store.state.clickchapter);
        }
        else{
            this.$store.state.toggle=false;
            this.$store.state.endtoggle=false;
        }
    }
  },
  computed:{
      gettoggle(){
          return this.$store.state.toggle;
      },
      getendtoggle(){
          return this.$store.state.endtoggle;
      }
  }
};
</script>

<style lang="scss">
    .transitionpartbg{
        position: fixed;
        opacity: 0;
        top: 0;
        left: -220vw;
        width: 180vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        transition: left 0.6s;
        .eachtransition{
            position: relative;
            width: 100%;
            height: 20vh;
            background-color: black;
        }
    }
    .movetransition1{
        opacity: 1;
        left: -80%;
    }
    .movetransition2{
        opacity: 1;
        left: 100%;
    }
</style>