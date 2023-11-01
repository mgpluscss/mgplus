import { Component } from "solid-js";

const GridSection:Component = ()=>  <section id="grid" >
<h2>Grids</h2>
<h5>Row sizing and placement</h5>
<div class="mg-container" id="grid-example">
  <div class="mg-row ">
    <div class="mg-bg-primary mg-light mg-x4">x4</div>
    <div class="mg-bg-primary mg-light mg-x3">x3</div>
    <div class="mg-bg-primary mg-light mg-x2">x2</div>
  </div>
  <div class="mg-row">
    <div class="mg-bg-primary mg-light mg-x6">x6</div>
    <div class="mg-bg-primary mg-light mg-x6">x6</div>
  </div>
  <div class="mg-row">
    <div class="mg-bg-primary mg-light mg-x6 mg-x--offset3">x6 offset3</div>
  </div>
  <div class="mg-col">
    <div class="mg-row mg-x--start">
      <div class="mg-bg-primary mg-light mg-x6">x6 start</div>
    </div>
    <div class="mg-row mg-x--end">
      <div class="mg-bg-primary mg-light mg-x6">x6 end</div>
    </div>
    <h5>Hidden effect (s,m,l,xl)</h5>
    <div class="mg-row">
      <div class="mg-bg-primary mg-light mg-s--hidden">
        hidden until small screen
      </div>
      <div class="mg-bg-primary mg-light mg-m--hidden">
        hidden until medium screen
      </div>
      <div class="mg-bg-primary mg-light mg-l--hidden">
        hidden until large screen
      </div>
      <div class="mg-bg-primary mg-light mg-xl--hidden">
        hidden until extra large screen
      </div>
      <div class="mg-bg-primary mg-light mg-s--display">
        display until small screen
      </div>
      <div class="mg-bg-primary mg-light mg-m--display">
        display until medium screen
      </div>
      <div class="mg-bg-primary mg-light mg-l--display">
        display until large screen
      </div>
      <div class="mg-bg-primary mg-light mg-xl--display">
        display until extra large screen
      </div>
    </div>
    <div class="example">
      <pre class="prettyprint" data-toggle="prettify" data-source="grid-example"></pre>
    </div>
  </div>
</div>
<h5>Row alignment</h5>
<div class="mg-container" id="grid-example3">
  <div class="mg-row">
    <div class="mg-col mg-x4 mg-x--start">
      start
      <div class="mg-bg-primary mg-light mg-row mg-x4">x4</div>
      <div class="mg-bg-primary mg-light mg-row mg-x3">x3</div>
      <div class="mg-bg-primary mg-light mg-row mg-x2">x2</div>
      <div class="mg-bg-primary mg-light mg-row mg-x2">x2</div>
    </div>
    <div class="mg-col mg-x4 mg-x--center">
      center
      <div class="mg-bg-primary mg-light mg-row mg-x4">x4</div>
      <div class="mg-bg-primary mg-light mg-row mg-x3">x3</div>
      <div class="mg-bg-primary mg-light mg-row mg-x2">x2</div>
    </div>
    <div class="mg-col mg-x4 mg-x--end">
      end
      <div class="mg-bg-primary mg-light mg-row mg-x4">x4</div>
      <div class="mg-bg-primary mg-light mg-row mg-x3">x3</div>
      <div class="mg-bg-primary mg-light mg-row mg-x2">x2</div>
    </div>
  </div>
  <div class="example">
    <pre class="prettyprint" data-toggle="prettify" data-source="grid-example3"></pre>
  </div>
</div>
<h5>Col alignment</h5>
<div class="mg-container" id="grid-example4">
  <div class="mg-row mg-25vh">
    <div class="mg-col mg-x4 mg-x--top">
      top
      <div class="mg-bg-primary mg-light mg-row">x4</div>
      <div class="mg-bg-primary mg-light mg-row">x4</div>
    </div>
    <div class="mg-col mg-x4 mg-x--middle">
      middle
      <div class="mg-bg-primary mg-light mg-row">x4</div>
      <div class="mg-bg-primary mg-light mg-row">x4</div>
    </div>
    <div class="mg-col mg-x4 mg-x--bottom">
      bottom
      <div class="mg-bg-primary mg-light mg-row">x4</div>
      <div class="mg-bg-primary mg-light mg-row">x4</div>
    </div>
  </div>
  <div class="example">
    <pre class="prettyprint" data-toggle="prettify" data-source="grid-example4"></pre>
  </div>
</div>
<h5>Row grow</h5>
<div class="mg-container" id="grid-example5">
  <div class="mg-row mg-25vh">
    <div class="mg-col mg-x4">
      <div class="mg-bg-primary mg-light mg-x--grow">x4 grow</div>
      <div class="mg-bg-primary mg-light">x4</div>
    </div>
    <div class="mg-col mg-x4">
      <div class="mg-bg-primary mg-light mg-x--grow">x4 grow</div>
    </div>
    <div class="mg-col mg-x4">
      <div class="mg-bg-primary mg-light">x4</div>
      <div class="mg-bg-primary mg-light mg-x--grow">x4 grow</div>
      <div class="mg-bg-primary mg-light">x4</div>
    </div>
  </div>
  <div class="example">
    <pre class="prettyprint" data-toggle="prettify" data-source="grid-example5"></pre>
  </div>
</div>
</section>

export default GridSection;