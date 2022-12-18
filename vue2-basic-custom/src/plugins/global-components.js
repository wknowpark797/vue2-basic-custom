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
    }
}

Vue.use(GlobalComponents)

export default GlobalComponents;