import Vue from 'vue'
import AccordionExamComp from '@/components/example/AccordionExamComp'
import AlertModalExamComp from '@/components/example/AlertModalExamComp'
import AvatarExamComp from '@/components/example/AvatarExamComp'
import ButtonExamComp from '@/components/example/ButtonExamComp'
import CheckGroupExamComp from '@/components/example/CheckGroupExamComp'
import CheckSingleExamComp from '@/components/example/CheckSingleExamComp'
import ConfirmModalExamComp from '@/components/example/ConfirmModalExamComp'
import CountExamComp from '@/components/example/CountExamComp'
import DatepickerExamComp from '@/components/example/DatepickerExamComp'
import DropdownExamComp from '@/components/example/DropdownExamComp'
import FileUploadExamComp from '@/components/example/FileUploadExamComp'
import InputExamComp from '@/components/example/InputExamComp'
import LoadingExamComp from '@/components/example/LoadingExamComp'
import ModalExamComp from '@/components/example/ModalExamComp'
import PaginationExamComp from '@/components/example/PaginationExamComp'
import RadioExamComp from '@/components/example/RadioExamComp'
import RatingExamComp from '@/components/example/RatingExamComp'
import ScrollTopExamComp from '@/components/example/ScrollTopExamComp'
import SearchExamComp from '@/components/example/SearchExamComp'
import SelectExamComp from '@/components/example/SelectExamComp'
import SwitchExamComp from '@/components/example/SwitchExamComp'
import TabsExamComp from '@/components/example/TabsExamComp'
import TagsExamComp from '@/components/example/TagsExamComp'
import TextareaExamComp from '@/components/example/TextareaExamComp'
import TimepickerExamComp from '@/components/example/TimepickerExamComp'
import ToastExamComp from '@/components/example/ToastExamComp'

const GlobalExample = {
    install(Vue) {
        Vue.component(AccordionExamComp.name, AccordionExamComp);
        Vue.component(AlertModalExamComp.name, AlertModalExamComp);
        Vue.component(AvatarExamComp.name, AvatarExamComp);
        Vue.component(ButtonExamComp.name, ButtonExamComp);
        Vue.component(CheckGroupExamComp.name, CheckGroupExamComp);
        Vue.component(CheckSingleExamComp.name, CheckSingleExamComp);
        Vue.component(ConfirmModalExamComp.name, ConfirmModalExamComp);
        Vue.component(CountExamComp.name, CountExamComp);
        Vue.component(DatepickerExamComp.name, DatepickerExamComp);
        Vue.component(DropdownExamComp.name, DropdownExamComp);
        Vue.component(FileUploadExamComp.name, FileUploadExamComp);
        Vue.component(InputExamComp.name, InputExamComp);
        Vue.component(LoadingExamComp.name, LoadingExamComp);
        Vue.component(ModalExamComp.name, ModalExamComp);
        Vue.component(PaginationExamComp.name, PaginationExamComp);
        Vue.component(RadioExamComp.name, RadioExamComp);
        Vue.component(RatingExamComp.name, RatingExamComp);
        Vue.component(ScrollTopExamComp.name, ScrollTopExamComp);
        Vue.component(SearchExamComp.name, SearchExamComp);
        Vue.component(SelectExamComp.name, SelectExamComp);
        Vue.component(SwitchExamComp.name, SwitchExamComp);
        Vue.component(TabsExamComp.name, TabsExamComp);
        Vue.component(TagsExamComp.name, TagsExamComp);
        Vue.component(TextareaExamComp.name, TextareaExamComp);
        Vue.component(TimepickerExamComp.name, TimepickerExamComp);
        Vue.component(ToastExamComp.name, ToastExamComp);
    }
}

Vue.use(GlobalExample)

export default GlobalExample;