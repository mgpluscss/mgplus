import { createSignal } from "solid-js";
import Logo from "../logo.svg?component-solid";
import styles from "./Header.module.css";

const NavBar = ()=> {
    const [setDarkMode, isDarkMode] = createSignal(false);
    return <nav id="nav" class="mg-navbar mg-fixed-top mg-w100">
<div class="mg-container mg-row mg-x--between mg-pad-t1"> 
  <span class="mg-group">   
  <button class="button">
  <span class="mg-icon mg-icon--darkmode"></span>
  </button>
  <button class="button">
  <span class="mg-icon mg-icon--colors"></span>
  </button>
  </span>
  <button class={styles.hamburger}> 
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>
</nav>}

export default NavBar;