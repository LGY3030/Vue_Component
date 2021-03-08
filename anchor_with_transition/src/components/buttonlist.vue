<template>
  <div class="buttonlistbg">
    <div class="eachbutton" style="background-color: burlywood;" @click="clickbutton(1)">
      1
    </div>
    <div class="eachbutton" style="background-color: rgb(135, 222, 164);" @click="clickbutton(2)">
      2
    </div>
    <div class="eachbutton" style="background-color: rgb(172, 151, 153);" @click="clickbutton(3)">
      3
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  methods:{
    clickbutton(para){
        if(para!=this.$store.state.nowchapter){
          switch(para){
            case 1: 
              this.$store.state.clickchapter='#one';
              break;
            case 2:
              this.$store.state.clickchapter='#two';
              break;
            case 3:
              this.$store.state.clickchapter='#three';
              break;
          }
          this.$store.state.toggle = true;
        }
    }
  }
};
</script>

<style lang="scss">
    .buttonlistbg{
        position: fixed;
        top: 0;
        right: 0;
        width: 50px;
        height: 150px;
        display: flex;
        flex-direction: column;
        .eachbutton{
          width: 100%;
          height: 50px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
        }
    }
</style>