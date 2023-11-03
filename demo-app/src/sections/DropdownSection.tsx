import { Component } from "solid-js";
import MgDropDown from "../components/MgDropdown";

const DropdownSection:Component = ()=> 
<section id="dropdown">
<h2>Dropdown</h2>
<div class="mg-dropdown">
<button title="choose a car" class="mg-dropdown--button" data-toggle="dropdown">
  Choose a car
</button>
<div class="mg-dropdown--content">
  <div class="mg-nav">
    <ul>
      <li data-value="audi">Audi</li>
      <li data-value="bmw">BMW</li>
      <li data-value="citroen">Citroen</li>
      <li data-value="ford">Ford</li>
      <li data-value="honda">Honda</li>
      <li data-value="jaguar">Jaguar</li>
      <li data-value="land-rover">Land Rover</li>
      <li data-value="mini">Mini</li>
      <li data-value="nissan">Nissan</li>
      <li data-value="toyota">Toyota</li>
      <li data-value="volvo">Volvo</li>
    </ul>
    </div>
  </div>
</div>
 
<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="dropdown-example"></pre>
</div>

<div class="mg-dropdown" data-value="bmw" id="dropdown-example2">
  <button data-toggle="dropdown" class="mg-dropdown--button">
    left side
  </button>
  <div class="mg-dropdown--content mg-left mg-nav">
    <ul>
      <li data-value="audi">Audi</li>
      <li data-value="bmw">BMW</li>
      <li data-value="mercedes">Mercedes long! very very long!</li>
    </ul>
  </div>
</div>
<div class="mg-dropdown mg-right" data-value="bmw" id="dropdown-example2">
  <button data-toggle="dropdown" class="mg-dropdown--button">
    right side
  </button>
  <div class="mg-dropdown--content mg-right mg-nav">
    <ul>
      <li data-value="audi">Audi</li>
      <li data-value="bmw">BMW</li>
      <li data-value="mercedes">Mercedes long! very long!</li>
    </ul>
  </div>
</div>
</section>

export default DropdownSection;