import Vue from 'vue'
import ButtonComp from '../components/common/ButtonComp'
import InputComp from '../components/common/InputComp'
import TextareaComp from '../components/common/TextareaComp'
import CheckSingleComp from '../components/common/CheckSingleComp'
import CheckGroupComp from '../components/common/CheckGroupComp'

const GlobalComponents = {
    install(Vue) {
        Vue.component(ButtonComp.name, ButtonComp)
        Vue.component(InputComp.name, InputComp)
        Vue.component(TextareaComp.name, TextareaComp)
        Vue.component(CheckSingleComp.name, CheckSingleComp)
        Vue.component(CheckGroupComp.name, CheckGroupComp)
    }
}

Vue.use(GlobalComponents)

export default GlobalComponents;