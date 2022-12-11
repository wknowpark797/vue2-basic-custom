import Vue from 'vue'
import ButtonComp from '../components/common/ButtonComp'
import InputComp from '../components/common/InputComp'
import TextareaComp from '../components/common/TextareaComp'
import CheckSingleComp from '../components/common/CheckSingleComp'
import CheckGroupComp from '../components/common/CheckGroupComp'
import RadioComp from '../components/common/RadioComp'
import SelectComp from '../components/common/SelectComp'
import DropdownComp from '../components/common/DropdownComp'
import DatepickerComp from '../components/common/DatepickerComp'
import ModalComp from '../components/common/ModalComp'

const GlobalComponents = {
    install(Vue) {
        Vue.component(ButtonComp.name, ButtonComp)
        Vue.component(InputComp.name, InputComp)
        Vue.component(TextareaComp.name, TextareaComp)
        Vue.component(CheckSingleComp.name, CheckSingleComp)
        Vue.component(CheckGroupComp.name, CheckGroupComp)
        Vue.component(RadioComp.name, RadioComp)
        Vue.component(SelectComp.name, SelectComp)
        Vue.component(DropdownComp.name, DropdownComp)
        Vue.component(DatepickerComp.name, DatepickerComp)
        Vue.component(ModalComp.name, ModalComp)
    }
}

Vue.use(GlobalComponents)

export default GlobalComponents;