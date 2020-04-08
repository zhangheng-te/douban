import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '测试', // 当前的标题 
    list: [],    // 当前列表页
    item: null,   // 当前电影详情
  },
  mutations: {
    setListPageData(state, payload) {
      state.title = payload.title
      state.list = payload.subjects
    },
    setItemPageData(state, payload) {
      state.title = payload.title
      state.item = payload
    },
  },
  actions: {
    // 从后端获取数据，并设置state
    getHot(context) {
      var url = `https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a`
      jsonp(url, (err, data) => {
        if (err) {
          console.log(`请求接口发生错误`);
          console.log(err);

        } else {
          // 从后端取出来的数据需要设置给state
          console.log(data);
          context.commit('setListPageData', data)
        }
      })
    },
    // 从后端获取数据，并设置state
    getMovie(context) {
      var url = `https://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a`
      jsonp(url, (err, data) => {
        if (err) {
          console.log(`请求接口发生错误`);
          console.log(err);

        } else {
          // 从后端取出来的数据需要设置给state
          console.log(data);
          context.commit('setListPageData', data)
        }
      })
    },
    // 从后端获取数据，并设置state
    getTop(context) {
      var url = `https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a`
      jsonp(url, (err, data) => {
        if (err) {
          console.log(`请求接口发生错误`);
          console.log(err);

        } else {
          // 从后端取出来的数据需要设置给state
          console.log(data);
          context.commit('setListPageData', data)
        }
      })
    },
    getItem(context, id) {
      var url = `https://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`
      jsonp(url, (err, data) => {
        if (err) {
          console.log(`请求接口发生错误`);
          console.log(err);

        } else {
          // 从后端取出来的数据需要设置给state
          console.log(data);
          context.commit('setItemPageData', data)
        }
      })
    }
  },
  modules: {
  }
})
