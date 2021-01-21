<template> 
    <div class="bg">
        <div class="flyoutbg">
            <flyobject 
                v-for="data in objectdata"
                :key="data.startpoint"
                :color="data.color"
                :direction="data.direction"
                :startpoint="data.startpoint"
            />
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
                objectdata
            }
        },
        mounted(){
        },
        methods:{
        },
    }
</script>

<style lang="scss" scoped>
.bg{
    position: relative;
    width: 100%;
    height: 6000px;
    background-color: rgb(255, 233, 255);
    .flyoutbg{
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: rgb(191, 221, 255);
    }
}
</style>