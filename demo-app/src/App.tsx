import type { Component } from 'solid-js';

import Logo from './logo.svg?component-solid';
import styles from './App.module.css';
import Waves from './components/Waves';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <nav class='mg-navbar mg-fixed-top mg-bg-primary mg-w100 mg-theme--dark mg-control-shadow'>
        <h2>test</h2>
      </nav>
      <header class={styles.header}>
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
      </header>
   
    </div>
  );
};

export default App;
