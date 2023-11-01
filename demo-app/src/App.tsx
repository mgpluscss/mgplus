import type { Component } from 'solid-js';

import Logo from './logo.svg?component-solid';
import styles from './App.module.css';
import Waves from './components/Waves';

const App: Component = () => {
  return (
   <>
        <header class="mg-fixed-top mg-w100 mg-bg-secondary ">
        <nav class="mg-navbar  mg-control-shadow mg-row mg-x--between mg-container mg-pad-t1">
        
        <img class="mg-icon "></img>
        <button > 
          <div class="mg-burger">

        
            <span></span>
            <span></span>
            <span></span>   </div>
        </button>       
      </nav>
      </header>

      <main class={styles.header}>
        <Logo class={styles.logo} />
        <h1 class="mg-text-bolder">Mg+</h1>
        <h2> Micro css framework</h2>
        <a 
          class="mg-text-xl mg-text-bolder mg-light"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <Waves></Waves>
      </main>
   
   </>
  );
};

export default App;
