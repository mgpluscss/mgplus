import { Component } from "solid-js";

const TimelineSection:Component = ()=>  <section id="timeline">
<h2>Timeline</h2>
<h3>vertical (default)</h3>
<div class="mg-container" id="timeline-example">
  <div class="mg-timeline">
    <ul>
      <li class="active">
        <div>Step 1</div>
        <div>active</div>
      </li>
      <li class="active">
        <div>Step 2</div>
        <div>active</div>
      </li>
      <li class="current">
        <div>Step 3</div>
        <div>current</div>
      </li>
      <li>
        <div>Step 4</div>
        <div>not active</div>
      </li>
    </ul>
  </div>
  <h3>inline</h3>
  <div class="mg-timeline-inline">
    <ul>
      <li class="active">
        <div>Step 1</div>
        <div>active</div>
      </li>
      <li class="active">
        <div>Step 2</div>
        <div>active</div>
      </li>
      <li class="current">
        <div>Step 3...</div>
        <div>current</div>
      </li>
      <li>
        <div>Step 4</div>
        <div>not active</div>
      </li>
    </ul>
  </div>
</div>
<div class="example"> 
  <pre class="prettyprint" data-toggle="prettify" data-source="timeline-example"></pre>
</div>
</section> 

export default TimelineSection;