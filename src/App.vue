<template>
  <div class="wrapper">
    <Nav />
    <router-view  v-slot="{ Component }">
      <transition name="zoom" mode="out-in">
        <component :is="Component" :key="$route.fullPath"></component>

      </transition>
    </router-view>
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Nav from "@/components/common/Nav.vue"
export default {
  data() {
  },
  components: {
    Header,
    
    Nav
  }
}
</script>
<style lang="scss">
.zoom-enter-from{
  transform: translateX(-100%);
  opacity: 0;
}
.zoom-enter-active {
  transition: .4s ease-out;
} 
.zoom-leave-to{
opacity: 0;
transform: translateX(-100%);
}
.zoom-leave-active{
  transition: all .4s ease-in;
}
</style>
