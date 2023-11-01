import { Component } from "solid-js";

const GroupSection: Component = () =>   <section id="group">
<h2>Group</h2>
<div class="mg-group" id="group-example">
  <div class="mg-dropdown" tabindex="1" data-value="bmw" id="car-dropdown">
    <button title="dropdown" data-toggle="dropdown" class="mg-dropdown--button">
      <span class='mg-icon mg-icon--gears'></span>
    </button>
    <div class="mg-dropdown--content mg-dropdown--content-left mg-nav">
      <ul>
        <li data-value="fr">
        <span class='mg-icon mg-icon--fr'></span>France
        </li>
        <li data-value="es">
        <span class='mg-icon mg-icon--sp'></span>Spain
        </li>
        <li data-value="de">
        <span class='mg-icon mg-icon--de'></span>Deuthshland
        </li>
      </ul>
    </div>              
  </div>
  <input class="mg-x6 mg-m3 mg-l3" type="text" title="test" value="search" />
  <a class="mg-button" href="#group"><span 
      class="mg-icon mg-icon--search"></span></a> 
</div>
<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="group-example"></pre>
</div>
</section>
export default GroupSection;