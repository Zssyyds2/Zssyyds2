<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
// import homePanel from './components/HomePanel.vue'

</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <!-- //新鲜好物 -->
  <HomeNew />
  <!-- //人气推荐 -->
  <HomeHot />
  //产品列表
  <homeProduct />
</template>
