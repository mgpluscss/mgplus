import { Component } from "solid-js";

const CoreSection: Component = () => (
  <>
    <section id="typography">
      <h2>Typography</h2>
      <div id="typography-example">
        <p>The base type is 1.6rem (16px) over 1.6 line height (24px)</p>

        <a>Anchor</a>
        <em>Emphasis</em>
        <small>Small</small>
        <strong>Strong</strong>
        <u>Underline</u>

        <h1>
          Heading <span class="mg-badge">h1</span>
        </h1>
        <h2>
          Heading <span class="mg-badge">h2</span>
        </h2>
        <h3>
          Heading <span class="mg-badge">h3</span>
        </h3>
        <h4>
          Heading <span class="mg-badge">h4</span>
        </h4>
        <h5>
          Heading <span class="mg-badge">h5</span>
        </h5>
        <h6>
          Heading <span class="mg-badge">h6</span>
        </h6>

        <span class="mg-text-s">Text</span>
        <span class="mg-text-m">Text</span>
        <span class="mg-text-l">Text</span>
        <span class="mg-text-xl">Text</span>
        <span class="mg-text-2xl">Text</span>
        <span class="mg-text-3xl">Text</span>
        <span class="mg-text-4xl">Text</span>
        <span class="mg-text-5xl">Text</span>
      </div>

      <div class="example">
        <pre
          class="prettyprint"
          data-toggle="prettify"
          data-source="typography-example"
        ></pre>
      </div>
    </section>
    <section id="blockquotes">
      <h2>Blockquotes</h2>
      <div id="blockquotes-example">
        <blockquote>
          <p>
            <em>Yeah!! Milligram is amazing.</em>
          </p>
        </blockquote>
      </div>
      <div class="example">
        <pre
          class="prettyprint"
          data-toggle="prettify"
          data-source="blockquotes-example"
        ></pre>
      </div>
    </section>
    <section id="buttons">
      <h2>Buttons</h2>
      <div id="buttons-example" class="mg-col mg-l3">
        <a class="mg-button" href="#">
          Default Button
        </a>
        <button class="mg-button mg-button--outline">Outlined Button</button>
        <input
          class="mg-button mg-button--clear"
          type="submit"
          value="Clear Button"
        />
        <button class="mg-button mg-button--small">Small Button</button>
        <button class="mg-button mg-button--large">Large Button</button>
        <button class="mg-button mg-button--small mg-button--link">
          small link Button
        </button>
      </div>
      <div class="example">
        <pre
          class="prettyprint"
          data-toggle="prettify"
          data-source="buttons-example"
        ></pre>
      </div>
    </section>
    <section id="lists">
      <h2>Lists</h2>
      <div id="lists-example">
        <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
          <li>Unordered list item 3</li>
          <li>Unordered list item 4</li>
        </ul>

        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
        </ol>

        <dl>
          <dt>Description list item 1</dt>
          <dd>Description list item 1.1</dd>
        </dl>
      </div>
      <div class="example">
        <pre
          class="prettyprint"
          data-toggle="prettify"
          data-source="lists-example"
        ></pre>
      </div>
    </section>
    <section id="tables">
      <h2>Tables</h2>
      <div id="tables-example">
        <table class="table--responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Height</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stephen Curry</td>
              <td>27</td>
              <td>1,91</td>
              <td>Akron, OH</td>
            </tr>
            <tr>
              <td>Klay Thompson</td>
              <td>25</td>
              <td>2,01</td>
              <td>Los Angeles, CA</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="example">
        <pre
          class="prettyprint"
          data-toggle="prettify"
          data-source="tables-example"
        ></pre>
      </div>
    </section>
    <section id="codes">
      <h2>Codes</h2>
      <div id="codes-example">
        <pre>
          <code>&lt;html&gt;</code>
        </pre>
      </div>
      <div class="example">
        <pre
          class="prettyprint"
          data-toggle="prettify"
          data-source="codes-example"
        ></pre>
      </div>
    </section>
    <section id="range">
      <h2>Range</h2>
      <div class="mg-row" id="range-example">
        <label for="myRange">Input range</label>
        <input type="range" min="1" max="100" value="50" id="myRange" />
        <label for="myRange2">Input range disabled</label>
        <input
          type="range"
          disabled
          min="1"
          max="100"
          value="50"
          id="myRange2"
        />
      </div>
      <div class="example">
        <pre
          class="prettyprint"
          data-toggle="prettify"
          data-source="range-example"
        ></pre>
      </div>
    </section>
  </>
);

export default CoreSection;