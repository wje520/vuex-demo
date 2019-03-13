<template>
  <div>
    <p>{{getName}}</p>
    <button @click="changeName('nameA33')">按钮A</button>
    <span @click="changeCollects(item)">加入收藏列</span>
  </div>
</template>
<script>
import {mapGetters,mapActions,mapState} from 'vuex'
export default {
  name:'index',
  data(){
    return {
      item:{
        name:'苹果',
        price:'7630',
      }
    }
  },
  computed: {
    // 使用mapState和mapGetters都可以用来获取state的状态
    // ...mapState({
    //   getName:state=>state.list.name   //意思是list.js下的state中的name
    // }),
    ...mapGetters('list',{
      getName:'getName'
    })
  },
  mounted() {
    
  },
  methods: {
    ...mapActions('collection',[  //collection是指modules文件夹下的collection.js
      'changeCollects'           //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
      ]),
    changeName(name){
      this.$store.dispatch('list/changeName',name);  //意思是modules文件夹下的list.js模块下的changeName方法

      // this.$store.commit('updateName',name)  //同步方法不可取，尽量少用commit ,换成action
    }
  },
}
</script>