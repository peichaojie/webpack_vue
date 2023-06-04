<template>
  <div>layout
      <router-link to="/home/page1">topage1</router-link>
      <router-link to="/home/page2">topage2</router-link>
      <router-view />
      <div>--------------</div>
      <div>{{name}}</div>
      <div>{{age}}</div>
      <div>{{hobby}}</div>
      <div>{{getName}}</div>
  </div>
</template>

<script>
import {mapState,mapGetters} from "vuex";
export default {
    name:"layout",
    computed:{
      ...mapState(['name','age','hobby']),
      ...mapGetters(['getName'])
    }

}
</script>

<style>

</style>