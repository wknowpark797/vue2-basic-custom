import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faHouse } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse);

Vue.component('font-awesome-icon', FontAwesomeIcon);