import { Component } from "solid-js";

const AlertSection:Component = ()=>  <section id="alert">
<h2>Alert</h2>
<div class="mg-alert" id="default-alert-example">
  <span class="mg-close mg-right" >
  </span>
  This is an default alert box.
</div>
<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="default-alert-example"></pre>
</div>
<div class="mg-alert danger" id="danger-alert-example">
  <span class="mg-close mg-right" >
  </span>
  This is an danger alert box.
</div>
<div class="mg-alert success" id="success-alert-example">
  <span class="mg-close mg-right" >
  </span>
  This is an success alert box.
</div>
<div class="mg-alert warning" id="warning-alert-example">
  <span class="mg-close mg-right" >
  </span>
  This is an warning alert box.
</div>
<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="warning-alert-example"></pre>
</div>
</section>

export default AlertSection;