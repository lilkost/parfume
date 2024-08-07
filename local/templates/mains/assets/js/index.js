import createSlider from "./components/slider.js";
import modal from "./components/modal.js";
import maskPhoneInput from "./components/phoneMask.js";
import inputsPointer from "./components/inputs.js";
import buttonsPointer from "./components/buttons.js";
import dropDown from "./components/dropDown.js";
import stars from "./components/slide.js";
import { useDynamicAdapt } from './components/dynamicAdapt.js';
import scrollPositionMobileButton from "./components/scrollMobileButtons.js";
import catalog from "./components/catalog.js";

useDynamicAdapt();
createSlider();
modal();
maskPhoneInput();
inputsPointer();
buttonsPointer();
dropDown();
stars();
scrollPositionMobileButton();

