
import styles from './Waves.module.css';

const Waves = () => {

return  <svg xmlns="http://www.w3.org/2000/svg"  class={styles["waves"]}
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class={styles["animated-waves"]}>
  <use href="#gentle-wave" x="48" y="0" />
  <use href="#gentle-wave" x="48" y="3" />
  <use href="#gentle-wave" x="48" y="5" />
  <use href="#gentle-wave" x="48" y="7" />
</g>
</svg> 
}

export default Waves;