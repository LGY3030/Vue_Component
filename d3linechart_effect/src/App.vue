<template>
  <div id="app">
    <div class="chartcontainer">
      <d3linechart class="linepart">
      
      </d3linechart>
    </div>

  </div>
</template>
<!-- 
https://bitbucket.org/udn-innovation/election2020-youth/src/master/ 
https://udn.com/newmedia/election2020/youth/
-->
<script>
import d3linechart from './components/d3linechart.vue'

export default {
  name: 'App',
  components: {
    d3linechart
  }
}
</script>

<style>
.chartcontainer{
  width: 650px;
  height: 400px;
  .linepart{
    width: 100%;
    height: 100%;
  }
}
</style>
