import { Component } from "solid-js";

const NavSection:Component = ()=> <>
  <section id="nav">
          <h2>Nav vertical (default)</h2>
          <div class="mg-nav" id="nav-vertical-example" data-toggle="nav">
            <ul>
              <li class="active"><a href="#home">Home</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div class="example">
            <pre class="prettyprint" data-toggle="prettify" data-source="nav-vertical-example"></pre>
          </div>
        </section>
        <section id="nav-inline">
          <h2>Nav inline</h2>
          <div class="mg-nav mg-nav--inline" id="nav-horizontal-example" data-toggle="nav">
            <ul>
              <li class="active"><a href="#home">Home</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#contact">Contact</a></li>
              <li class="mg-right"><a href="#about">About</a></li>
            </ul>
          </div>
          <div class="example">
            <pre class="prettyprint" data-toggle="prettify" data-source="nav-horizontal-example"></pre>
          </div>
        </section>
</>

export default NavSection;