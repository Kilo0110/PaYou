import { createApp } from "vue";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFilter, faEllipsisVertical, faCircleChevronDown, faCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFilter, faEllipsisVertical, faCircleChevronDown, faCircle, faCircleInfo)

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import store from "./store";

const app = createApp(App);

app.use(router).use(store);

app.component('font-awesome-icon', FontAwesomeIcon).mount("#app");
