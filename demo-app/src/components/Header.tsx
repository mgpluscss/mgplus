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
      <a href="https://github.com/medevod/mgplus">Github</a>
      <h4>Extended version of Milligram</h4> 
        <a href="https://github.com/milligram/milligram">Milligram</a> 
      <Waves></Waves>
    </header>
  );
};

export default Header;
