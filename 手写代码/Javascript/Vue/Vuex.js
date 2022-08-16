// 1.挂载$store
// 2.实现Store
let Vue
class Store {
    constructor (options) {
        // data响应式处理
        this._vm = new Vue({
            data: {
                $$state: options.state // 双$会被隐藏不想让你看
            }
        })
        this._mutations = options.mutaions
        this._actions = options.actions
        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }
    
    get state () {
        return this._vm._data.$$state
    }
    
    commit (type, payload) {
        const entry = this._mutations[type]
        if (!entry) {
            console.error('不能获取到相应的mutations')
        }
        entry(this.state, payload)
    }
    
    dispatch (type, payload) {
        const entry = this._actions[type]
        if (!entry) {
            console.error('不能获取到相应的actions')
        }
        entry(this, payload)
    }
}

function install (_Vue) {
    Vue = _vue
    Vue.mixin({
        beforeCreate () {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}

export default { Store, install }
