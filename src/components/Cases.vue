<template>
    <div
        class='w-100 case-item h-100 d-flex justify-content-center align-items-center' 
        v-on:click="readFile()">
            <img :src="img" alt="">
            <h3>{{name}}</h3>
            <p>{{date}}</p>
        </div>
</template>

<script>
export default {
name: 'Cases',
props: [
    'path', 'index', 'img', 'name', 'date'
],
    methods: {
        readFile() {
            window.open(this.path, '_blank') //to open in new tab
        }
    }
}
</script>

<style lang='scss'>
    img{
        height: 100% !important;
        width: auto !important;
    }
.case-item{
    z-index: 10;
    position: relative;
    &:after{
        display: block;
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background: linear-gradient(180.79deg, rgba(2, 2, 2, 0) 0.58%, rgba(2, 2, 2, 0.8) 99.32%);
    }
}
</style>