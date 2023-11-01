import { Component } from "solid-js";

const RadioSection:Component = ()=>   <section id="radio">
<h2>Radio</h2>
<div class="mg-row" id="radio-example">
  <label class="mg-radio">
    on
    <input type="radio" checked name="radio" />
    <span class="checkmark"></span>
  </label>
  <label class="mg-radio">
    off
    <input type="radio" name="radio" />
    <span class="checkmark"></span>
  </label>
  <label class="mg-radio">
    disabled
    <input type="radio" checked disabled name="radio" />
    <span class="checkmark"></span>
  </label>
</div>
<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="radio-example"></pre>
</div>
</section>

export default RadioSection;