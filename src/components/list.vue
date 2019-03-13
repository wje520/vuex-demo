<template>
  <div>
    <p>{{name}}</p>
    <button>btnB</button>
    <ul v-for="(item,index) in list" :key="index">
      <li>{{item}}</li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name:'list',
  data(){
    return {

    }
  },
  computed: {
    ...mapGetters('list',{
      name:'getName'
    }),
    ...mapGetters('collection',{
      list:'getCollects'
    })
  },
  mounted() {
    
  },
  methods: {
    
  },
  
}
</script>