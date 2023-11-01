import { Component } from "solid-js";

const TabSection:Component = ()=> <section id="tabs">
<h2>Tabs</h2>
<div class="mg-tabs" data-toggle="tabs" id="tabs-example">
  <ul>
    <li class="mg-tabs--item active" data-target="tab1">
      <a href="#" >First tab</a>
    </li>
    <li class="mg-tabs--item" data-target="tab2">
      <a href="#" >Second tab</a>
    </li>
    <li class="mg-tabs--item" data-target="tab3">
      <a href="#">Third tab</a>
    </li>
  </ul>
  <div class="mg-tabs--content" id="tab1">
    1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Magni iste, placeat voluptates sapiente blanditiis fuga ullam.
    Iure dolorum libero fugit quidem, voluptate veniam aut animi
    nihil voluptas mollitia, aliquid inventore.
  </div>
  <div class="mg-tabs--content" id="tab2">
    2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Magni iste, placeat voluptates sapiente blanditiis fuga ullam.
    Iure dolorum libero fugit quidem, voluptate veniam aut animi
    nihil voluptas mollitia, aliquid inventore.
  </div>
  <div class="mg-tabs--content" id="tab3">
    3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Magni iste, placeat voluptates sapiente blanditiis fuga ullam.
    Iure dolorum libero fugit quidem, voluptate veniam aut animi
    nihil voluptas mollitia, aliquid inventore.
  </div>
</div>
<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="tabs-example"></pre>
</div>
</section>
export default TabSection;