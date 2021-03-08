<template>
  <div id="app">
    <partone>

    </partone>
    <parttwo>

    </parttwo>
    <partthree>
      
    </partthree>
    <buttonlist>

    </buttonlist>
    <transitionpart>

    </transitionpart>
  </div>
</template>

<script>
import partone from '@/components/partone.vue'
import parttwo from '@/components/parttwo.vue'
import partthree from '@/components/partthree.vue'
import buttonlist from '@/components/buttonlist.vue'
import transitionpart from '@/components/transitionpart.vue'

export default {
  data(){
      return{
        
      }
  },
  components: {
    partone,
    parttwo,
    partthree,
    buttonlist,
    transitionpart
  },
  created () {
      window.addEventListener('scroll', this.scrollevent);
  },
  destroyed () {
      window.removeEventListener('scroll', this.scrollevent);
  },
  mounted(){
    this.scrollevent();
  },
  methods: {
      scrollevent(){
          if(document.getElementById("three").getBoundingClientRect().y<=0) this.$store.state.nowchapter=3;
          else if(document.getElementById("two").getBoundingClientRect().y<=0) this.$store.state.nowchapter=2;
          else this.$store.state.nowchapter=1;

          if(this.$store.state.toggle){
            switch(this.$store.state.clickchapter){
              case '#one': 
                if(document.getElementById("one").getBoundingClientRect().y==0) this.$store.state.endtoggle=true;
                break;
              case '#two':
                if(document.getElementById("two").getBoundingClientRect().y==0) this.$store.state.endtoggle=true;
                break;
              case '#three':
                if(document.getElementById("three").getBoundingClientRect().y==0) this.$store.state.endtoggle=true;
                break;
            }
          }
      }
  },
}
</script>


<style>
  #app{
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>
