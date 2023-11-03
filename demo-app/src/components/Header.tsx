import Logo from "../assets/logo.svg?component-solid";
import Waves from "./Waves";
import styles from "./Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header> 
      <NavBar/>
      <Logo class={styles.logo} />
      <h1 class="mg-text-bolder">Mg+</h1>
      <h2> Micro css framework</h2>
      <a
        class="mg-text-xl mg-text-bolder mg-light"
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      > 
      </a>
      <a href="https://github.com/medevod/mgplus" class="mg-text-xl mg-light mg-text-underline">Github</a>
      <p>Extended version of <a href="https://github.com/milligram/milligram" class="mg-light mg-text-underline">Milligram</a></p> 
       
      <Waves></Waves>
    </header>
  );
};

export default Header;
