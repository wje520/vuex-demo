const list={
  namespaced:true, //用于在全局引入此文的方法时，标识这一个的文件名
  state:{
    name:'',
    num:0
  },
  // getters 实时监听state的变化，获取最终的状态信息
  getters:{
   getName:state=>state.name,
   getNum:state=>state.num
  },
  // 1、actions 可包含任意的异步操作，用来异步触发mutations里面的方法
  // 2、actions里面自定义的函数接收一个context参数和要变化的形参，context与store实例具有相同的方法和属性，所以它可以执行context.commit(' ')
  // 3、给action注册事件处理函数，当这个函数被触发时，将状态提交到mutations中处理
  actions:{
    changeName({commit},name){
      commit('updateName',name)
    },
    changeNum(context,num){    //context拥有个store实例相同的方法
      context.commit('updateNum',num)
    }
  },
  // mutations里面的方法都是同步事务，处理数据的唯一途径，state的改变或赋值只能在这里
  mutations:{
    updateName(state,name){
      state.name=name;
    },
    updateNum(state,num){
      state.num+=num;
    }
  }
}

export default list