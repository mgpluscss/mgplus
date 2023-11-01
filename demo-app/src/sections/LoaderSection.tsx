import { Component } from "solid-js";

const LoaderSection:Component = ()=>     <section id="loader">
<h2>Loader</h2>
<div class="mg-container" id="loader-example">
  <div class="mg-loader">
    <button id="loader-button">
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

export default LoaderSection;