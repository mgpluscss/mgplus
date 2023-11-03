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
        <div class="mg-dropdown mg-right">
            <button data-toggle="dropdown" class="mg-dropdown--button hamburger">
             <span></span>
             <span></span>
             <span></span>
            </button>
            <div class="mg-dropdown--content mg-right mg-nav mg-50vw">
              <ul class="mg-text-bold mg-text-l">
                <li><a href="#home">Home</a></li>
                <li><a href="#typography">Typography</a></li>
                <li><a href="#blockquotes">Blockquotes</a></li>
                <li><a href="#buttons">Buttons</a></li>
                <li><a href="#lists">Lists</a></li>
                <li><a href="#tables">Tables</a></li>
                <li><a href="#codes">Codes</a></li>
                <li><a href="#range">Range</a></li>
                <li><a href="#nav">Nav</a></li>
                <li><a href="#nav-inline">Nav inline</a></li>
                <li><a href="#dropdown">Dropdown</a></li>
                <li><a href="#select">Select</a></li>
                <li><a href="#radio">Radio</a></li>
                <li><a href="#check">Check</a></li>
                <li><a href="#alert">Alert</a></li>
                <li><a href="#badges">Badges</a></li>
                <li><a href="#tabs">Tabs</a></li>
                <li><a href="#group">Group</a></li>
                <li><a href="#grid">Grids</a></li>
                <li><a href="#modal">Modal</a></li>
                <li><a href="#toggle">Toggle</a></li>
                <li><a href="#forms">Forms</a></li>
                <li><a href="#loader">Loader</a></li>
                <li><a href="#timeline">Timeline</a></li>
                <li><a href="#icons">Icons</a></li>
              </ul>
            </div>
          </div> 
      </div>
    </nav>
  );
};

export default NavBar;
