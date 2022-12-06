import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; //font-awesome 

import { faUser, faHome, faUserSecret, faSearch, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons"; //import icons
import { } from "@fortawesome/free-regular-svg-icons";
import { } from "@fortawesome/free-brands-svg-icons"

library.add(faUser, faHome, faUserSecret, faSearch, faBell, faEnvelope); //add imported icons here

createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app");
