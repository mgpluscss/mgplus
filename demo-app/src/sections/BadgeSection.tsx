import { Component } from "solid-js";

const BadgeSection:Component = ()=>   <section id="badges">
<h2>Badges</h2>
<div id="badges-example">
  <span class="mg-badge">default</span>
  <span class="mg-badge success">danger</span>
  <span class="mg-badge warning">success</span>
  <span class="mg-badge danger">warning</span>
</div>

<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="badges-example"></pre>
</div>
</section>

export default BadgeSection;