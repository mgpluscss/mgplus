import styles from "./Header.module.css";
import PickerPanel from "./PickerPanel";
import { useColorMode } from 'solidjs-use';

const NavBar = () => {  
  const {mode, setMode} = useColorMode() // Signal<'dark' | 'light'>

  const toggleMode = () => {
    document.body.classList.remove(`mg-theme--${mode()}`); 
    setMode(mode() === 'dark' ? 'light' : 'dark');
    document.body.classList.add(`mg-theme--${mode()}`); 
  }
  return (
    <nav id="nav" class="mg-navbar mg-fixed-top mg-w100">
      <div class="mg-container mg-row mg-x--between mg-pad-t1">
        <span class="mg-group">
          <button class="mg-button mg-button--small" onClick={toggleMode}>
            <span class="mg-icon mg-icon--darkmode"></span>
          </button>  
          <PickerPanel />  
        </span>
        <button class={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
