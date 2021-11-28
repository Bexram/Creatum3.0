<template>
    <router-link
            class='w-100 case-item h-100 d-flex justify-content-center align-items-center'
            :to="path+index"
            :key="index">
        <pdf src=file></pdf>
        <h3>{{name}}</h3>
        <p>{{date}}</p>
    </router-link>
</template>

<script>
    import pdf from 'vue-pdf'

    export default {
        components: {
            pdf
        },
        name: 'Cases',
        props: [
            'path', 'index', 'img', 'name', 'date', 'file'
        ]
    }
</script>

<style lang='scss'>
    .case-item {
        z-index: 10;
        position: relative;

        &:after {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: '';
            background: linear-gradient(180.79deg, rgba(2, 2, 2, 0) 0.58%, rgba(2, 2, 2, 0.8) 99.32%);
        }
    }
</style>