import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faHouse, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faCircleXmark);

Vue.component('font-awesome-icon', FontAwesomeIcon);