import Vue from 'vue'
import ButtonComp from '../components/common/ButtonComp'
import InputComp from '../components/common/InputComp'
import TextareaComp from '../components/common/TextareaComp'
import CheckSingleComp from '../components/common/CheckSingleComp'
import CheckGroupComp from '../components/common/CheckGroupComp'
import SwitchComp from '../components/common/SwitchComp'
import RadioComp from '../components/common/RadioComp'
import SelectComp from '../components/common/SelectComp'
import DropdownComp from '../components/common/DropdownComp'
import DatepickerComp from '../components/common/DatepickerComp'
import TimepickerComp from '../components/common/TimepickerComp'
import FileUploadComp from '../components/common/FileUploadComp'
import ModalComp from '../components/common/ModalComp'
import AvatarComp from '../components/common/AvatarComp'
import AccordionComp from '../components/common/AccordionComp'
import TagsComp from '../components/common/TagsComp'
import CountComp from '../components/common/CountComp'
import RatingComp from '../components/common/RatingComp'
import PaginationComp from '../components/common/PaginationComp'
import TabsComp from '../components/common/TabsComp'

import AlertModalComp from '../components/common/AlertModalComp'
import ConfirmModalComp from '../components/common/ConfirmModalComp'
import ToastComp from '../components/common/ToastComp'

import { EventBus } from '../utils/EventBus'

const GlobalComponents = {
    install(Vue) {
        Vue.component(ButtonComp.name, ButtonComp)
        Vue.component(InputComp.name, InputComp)
        Vue.component(TextareaComp.name, TextareaComp)
        Vue.component(CheckSingleComp.name, CheckSingleComp)
        Vue.component(CheckGroupComp.name, CheckGroupComp)
        Vue.component(SwitchComp.name, SwitchComp)
        Vue.component(RadioComp.name, RadioComp)
        Vue.component(SelectComp.name, SelectComp)
        Vue.component(DropdownComp.name, DropdownComp)
        Vue.component(DatepickerComp.name, DatepickerComp)
        Vue.component(TimepickerComp.name, TimepickerComp)
        Vue.component(FileUploadComp.name, FileUploadComp)
        Vue.component(ModalComp.name, ModalComp)
        Vue.component(AvatarComp.name, AvatarComp)
        Vue.component(AccordionComp.name, AccordionComp)
        Vue.component(TagsComp.name, TagsComp)
        Vue.component(CountComp.name, CountComp)
        Vue.component(RatingComp.name, RatingComp)
        Vue.component(PaginationComp.name, PaginationComp)
        Vue.component(TabsComp.name, TabsComp)

        Vue.component(AlertModalComp.name, AlertModalComp)
        Vue.component(ConfirmModalComp.name, ConfirmModalComp)
        Vue.component(ToastComp.name, ToastComp)

        // Alert Modal
        Vue.prototype.$showAlert = function({title, content, callback}) {
            EventBus.$emit('@showAlert', {title, content, callback});
        }

        // Confirm Modal
        Vue.prototype.$showConfirm = function({title, content, callback}) {
            EventBus.$emit('@showConfirm', {title, content, callback});
        }

        // Toast
        Vue.prototype.$showToast = function({type, content, callback}) {
            EventBus.$emit('@showToast', {type, content, callback});
        }

        // Loading
        Vue.prototype.$showLoading = function() {
            EventBus.$emit('@showLoading');
        }
        Vue.prototype.$hideLoading = function() {
            EventBus.$emit('@hideLoading');
        }
    }
}

Vue.use(GlobalComponents)

export default GlobalComponents;