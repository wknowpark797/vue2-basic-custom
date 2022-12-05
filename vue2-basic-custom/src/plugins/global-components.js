import Vue from 'vue'
import ButtonComp from '../components/common/ButtonComp'

const GlobalComponents = {
    install(Vue) {
        Vue.component(ButtonComp.name, ButtonComp)
    }
}

Vue.use(GlobalComponents)

export default GlobalComponents;