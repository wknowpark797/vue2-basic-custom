import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faHouse, faCircleXmark, faXmark, faPen } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faCircleXmark, faXmark, faPen);

Vue.component('font-awesome-icon', FontAwesomeIcon);