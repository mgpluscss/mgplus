import { Component } from "solid-js";

const FormSection:Component = ()=>   <section id="forms">
<h2>Forms</h2>
<form id="forms-example">
  <fieldset>
    <label>2 cols input</label>
    <div class="mg-row">
      <div class="mg-col mg-x6">
        <input title="input" type="text" />
      </div>
      <div class="mg-col mg-x6">
        <input title="input" type="text" />
      </div>
    </div>
    <label>Toggle inline</label>
    <div class="mg-row">
      <label class="mg-toggle mg-text-lighter">
        on
        <input type="checkbox" checked />
        <span class="checkmark"></span>
      </label>
      <label class="mg-toggle mg-text-lighter">
        off
        <input type="checkbox" checked />
        <span class="checkmark"></span>
      </label>
    </div>
    <label>Range</label>
    <label for="myRange3">Input range</label>
    <input type="range" min="1" max="100" value="50" id="myRange3" />
    <label for="ageRangeField">Select (mg+)</label>
    <div class="mg-select">
      <select id="ageRangeField2" title="choose">
        <option value="0-13">0-13</option>
        <option value="14-17">14-17</option>
        <option value="18-23">18-23</option>
        <option value="24+">24+</option>
      </select>
    </div>
    <label for="ageRangeField">Select (default)</label>
    <select id="ageRangeField">
      <option value="0-13">0-13</option>
      <option value="14-17">14-17</option>
      <option value="18-23">18-23</option>
      <option value="24+">24+</option>
    </select>
    <label for="commentField">Comment</label>
    <textarea placeholder="Hi CJ …" id="commentField"></textarea>
    <label for="numberField">Numbers only</label>
    <input placeholder="number input" id="numberField" type="number" />
    <label for="car-dropdown"> Choose Action </label>
    <div class="float-right">
      <label class="mg-check" for="confirmField">
        floated right check
        <input type="checkbox" id="confirmField" />
        <span class="checkmark"></span>
      </label>
    </div>
  </fieldset>
</form>
<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="forms-example"></pre>
</div>
</section>

export default FormSection;