const collection={
  namespaced: true, //用于在全局引入此文的方法时，标识这一个的文件名
  state:{
    collects:[]
  },
  getters:{
    getCollects:state=>state.collects
  },
  actions:{
    changeCollects(context,item){  //item对应外部传入的数据形参  对应到items
      context.commit('updateCollects',item)
    }
  },
  mutations:{
    updateCollects(state,items){
      state.collects.push(items)
    }
  }
}
export default collection