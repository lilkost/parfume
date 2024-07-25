import createSlider from "./components/slider.js";
import dropdown from "./components/dropdown.js";
import createMaskPhone from "./components/phones.mask.js";
import modals from "./components/modals.js";
import mobileMenu from "./components/mobileMenu.js";
import { useDynamicAdapt } from './components/dynamicAdapt.js'

useDynamicAdapt();
createSlider();
dropdown();
createMaskPhone();
modals();
mobileMenu();