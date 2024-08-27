<template>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView/>
    
    <LayoutFooter></LayoutFooter>

</template>

<script setup>
    // import { ref } from 'vue';
    import LayoutNav from './components/LayoutNav.vue';
    import LayoutHeader from './components/LayoutHeader.vue';
    import LayoutFooter from './components/LayoutFooter.vue';
    import LayoutFixed from './components/LayoutFixed.vue';
    import {useCategoryStore} from '@/stores/category';
    import { onMounted } from 'vue';
    const categoryStore=useCategoryStore()
    onMounted(()=>{
        categoryStore.getCategory()
    })

</script>
<style>
    #aaa{
        height: 100vh;
    }
</style>