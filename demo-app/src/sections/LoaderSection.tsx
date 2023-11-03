import { Component, createEffect, createSignal } from "solid-js";

const LoaderSection:Component = ()=>
{
const [isLoading, setLoading] = createSignal(false);
const [isLoaded, setLoaded] = createSignal(false);

const load = () => {
  setLoading(true);
  setLoaded(false);
  setTimeout(() => { 
    setLoading(false);
    setLoaded(true);
  }, 3000); 
}

return <section id="loader">
<h2>Loader</h2>
<div class="mg-container" id="loader-example">
  <div class="mg-loader" classList={{"mg-loader--loading" : isLoading(), "mg-loader--loaded" : isLoaded()}}>
    <button id="loader-button" onClick={load}>
      Load
      <span class="mg-icon mg-icon--loader mg-loader--status"></span>
    </button>
  </div>
  <div class="mg-loader--status">
    Loading...
    <span class="mg-icon mg-icon--loader mg-loader--status"></span>
  </div>
  <div class="mg-loader--result">Loaded</div>
</div>

<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="loader-example"></pre>
</div>
</section>
}
export default LoaderSection;