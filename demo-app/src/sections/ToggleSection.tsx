import { Component } from "solid-js";

const ToggleSection:Component = ()=>   <section id="toggle">
<h2>Toggle</h2>

<div class="mg-row" id="toggle-example">
  <label class="mg-toggle">
    on
    <input type="checkbox" checked />
    <span class="checkmark"></span>
  </label>
  <label class="mg-toggle">
    off
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>
  <label class="mg-toggle">
    disabled
    <input type="checkbox" disabled checked />
    <span class="checkmark"></span>
  </label>
</div>
<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="toggle-example"></pre>
</div>
</section>

export default ToggleSection;