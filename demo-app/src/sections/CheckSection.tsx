import { Component } from "solid-js";

const CheckSection:Component = ()=>  <section id="check">
<h2>Check</h2>
<div class="mg-row" id="check-example">
  <label class="mg-check">
    on
    <input type="checkbox" checked />
    <span class="checkmark"></span>
  </label>
  <label class="mg-check">
    off
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>
  <label class="mg-check">
    disabled
    <input type="checkbox" checked disabled />
    <span class="checkmark"></span>
  </label>
</div>
<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="check-example"></pre>
</div>
</section>

export default CheckSection;