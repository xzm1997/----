let Vue // 保存Vue构造函数，插件中使用,并保持独立
class VueRouter {
  constructor (options) {
    this.$options = options
    // 把current作为响应式数据
    // 将来发生变化，router-view的render函数能再次执行
    this.current = '/'
    const initial = window.location.hash.slice(1) || '/'
    Vue.util.defineReactive(this, 'current', initial)
  }
  window.addEventListener('hashchange', () => {
    this.current = window.location.hash.slice(1)
  })
}
VueRouter.install = function (_Vue) { // 参数作为构造函数,要保证这个参数跟这个插件保持独立
Vue = _vue
// 1. 挂载$rouer属性，犹豫此插件 调用install的时机比创建时机早，所以为了可以实现this.$rouer.push()我们可以使用混入的方式实现
// this.$rouer.push()
// 全局混入
Vue.mixin({
  beforeCreate () {
    // 此钩子在每个组件实例时都会被调用
    // 根实例才有该选项
    if (this.$options.router) {
      Vue.prototype.$router = this.$options.router
    }
  }
})

 // 2. 注册实现两个组件 router-view，router-link
Vue.component('router-link', {
    props: {
        to: {
            type: String,
            required: true
        }
    },
    render (h) {
        return h('a', {
            attrs: {
                href: "#" + this.to
            }
        }, this.$slots.default)
    }
})
Vue.component('router-view', {
      props: {
          to: {
              type: String,
              required: true
          }
      },
      render (h) {
          // 获取当前路由对应的组件
          let component = null
          const route = this.$router.$options.routers.find(router => route.path === this.$router.current)
          if (route) {
              compenent = route.component
          }
          return h(component)
      }
  })
}

export default VueRouter
