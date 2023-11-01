import { Component } from "solid-js";

const ModalSection:Component = ()=>  <section id="modal">
<h2>Modal</h2>
<div class='mg-col mg-l3'>
<button data-toggle="modal" data-target="modal-1">
  Show modal
</button>
<button data-toggle="modal" data-target="modal-6">
  Show bottom modal
  <span class="mg-arrow mg-arrow--down"></span>
</button>
<button data-toggle="modal" data-target="modal-7">
  Show up modal
  <span class="mg-arrow mg-arrow--up"></span>
</button>
<button data-toggle="modal" data-target="modal-2">
  Show scrollable modal
</button>
<button data-toggle="modal" data-target="modal-4">
  <span class="mg-arrow mg-arrow--left"></span>
  Show side left bottom modal
</button>
<button data-toggle="modal" data-target="modal-5">
  Show side right top modal
  <span class="mg-arrow mg-arrow--right"></span>
</button>
<button data-toggle="modal" data-target="modal-3">
  Show side right top modal
  <span class="mg-arrow mg-arrow--right"></span>
</button>
</div>
<div class="mg-container" id="modal-example">
  <div class="mg-modal" id="modal-1">
    <div class="mg-modal--content mg-container">
      <h3>
        Modal Dialog
        <span class="mg-close mg-right" data-action="close"></span>
      </h3>
      <div>
        <p>
          This is a modal window. You can do the following things
          with it:
        </p>
        <ul>
          <li>
            <strong>Read:</strong> modal windows will probably tell
            you something important so don't forget to read what
            they say.
          </li>
          <li>
            <strong>Look:</strong> a modal window enjoys a certain
            kind of attention; just look at it and appreciate its
            presence.
          </li>
          <li>
            <strong>Close:</strong> click on the button on top to
            close modal the modal.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="mg-modal" id="modal-2">
  <div class="mg-modal--content mg-container">
    <h3>
      Modal scrollable Dialog
      <span class="mg-close mg-right" data-action="close"></span>
    </h3>
    <div class="mg-modal--body">
      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur euismod tortor eget magna auctor, eu hendrerit
          ipsum mattis. Etiam vitae ligula nulla. Nulla facilisi.
          Maecenas eu orci ac erat mollis fringilla. Donec semper,
          metus vitae laoreet fringilla, nisl velit auctor ligula,
          vitae hendrerit lectus elit eu tellus. Mauris finibus,
          ante quis malesuada interdum, odio massa scelerisque eros,
          ac iaculis tellus turpis vitae dolor. Nullam id diam eu
          tellus dictum tempor. Vestibulum finibus eros vitae
          pretium varius.
        </p>
        <p>
          Aenean in ex eu ante viverra semper. Nullam at condimentum
          quam. Sed elit sapien, maximus ac pretium ac, viverra
          aliquam tortor. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Cras
          sed sapien fermentum, elementum mi efficitur, congue
          tellus. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Cras malesuada lorem enim, eget scelerisque
          orci vestibulum a. Proin scelerisque enim nibh, egestas
          euismod nunc aliquam vel. Pellentesque facilisis lacus
          tortor, nec dictum augue porttitor nec. Quisque ut lacus
          eleifend lorem lobortis fermentum nec sit amet lacus.
          Vestibulum vehicula lobortis lectus ut pellentesque.
          Nullam tempus in ligula at lacinia. Etiam accumsan
          eleifend nunc, at rhoncus nulla tincidunt sed. Sed turpis
          dui, hendrerit vitae finibus ut, luctus quis ligula.
          Aenean venenatis id diam tempor interdum. Nulla mauris
          est, lacinia a fermentum at, ullamcorper ut ante.
        </p>
        <p>
          Suspendisse gravida diam sit amet malesuada interdum. Cras
          odio ipsum, scelerisque ac auctor ac, rutrum eget elit.
          Nulla sodales hendrerit leo, eget mattis velit suscipit
          vitae. Quisque interdum quam at convallis vestibulum.
          Aenean est ex, lacinia in leo vitae, euismod ullamcorper
          enim. Donec vulputate odio non metus elementum tincidunt.
          Integer bibendum ultricies risus a viverra. Fusce mattis
          turpis justo, non vehicula mauris feugiat vel. Etiam ut
          mauris ultrices orci aliquam placerat.
        </p>
        <p>
          Praesent varius ut eros ut sollicitudin. Curabitur
          vehicula fermentum massa, nec scelerisque diam posuere
          quis. Etiam ut diam nec quam sollicitudin finibus sit amet
          in ipsum. Suspendisse cursus in urna eu condimentum. Cras
          ultricies sed nibh id mollis. Sed gravida ex sed tortor
          rhoncus malesuada eu non lorem. Cras vel erat tristique,
          pretium neque nec, sagittis velit. Nulla non iaculis
          dolor. Aenean a nulla a elit ornare consequat ac fringilla
          nibh. Praesent volutpat orci tellus, in hendrerit leo
          imperdiet eget. Aliquam erat volutpat.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Quisque nunc est, convallis ac ultricies sit
          amet, sagittis ac eros. Morbi gravida interdum sapien, ac
          elementum orci sollicitudin quis. Donec suscipit arcu non
          est rutrum cursus vitae eget lacus. Curabitur pulvinar sit
          amet lectus in efficitur. Pellentesque ultricies ultricies
          mauris, a ultrices leo sodales vel. Aliquam sapien turpis,
          egestas eu volutpat at, semper vel ligula. Sed pretium
          lacus ut tellus blandit, nec ornare sapien varius. Nulla
          in ornare mi, eu congue libero. Curabitur non urna quis
          dui eleifend dictum. Vivamus quis enim sem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur euismod tortor eget magna auctor, eu hendrerit
          ipsum mattis. Etiam vitae ligula nulla. Nulla facilisi.
          Maecenas eu orci ac erat mollis fringilla. Donec semper,
          metus vitae laoreet fringilla, nisl velit auctor ligula,
          vitae hendrerit lectus elit eu tellus. Mauris finibus,
          ante quis malesuada interdum, odio massa scelerisque eros,
          ac iaculis tellus turpis vitae dolor. Nullam id diam eu
          tellus dictum tempor. Vestibulum finibus eros vitae
          pretium varius.
        </p>
        <p>
          Aenean in ex eu ante viverra semper. Nullam at condimentum
          quam. Sed elit sapien, maximus ac pretium ac, viverra
          aliquam tortor. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Cras
          sed sapien fermentum, elementum mi efficitur, congue
          tellus. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Cras malesuada lorem enim, eget scelerisque
          orci vestibulum a. Proin scelerisque enim nibh, egestas
          euismod nunc aliquam vel. Pellentesque facilisis lacus
          tortor, nec dictum augue porttitor nec. Quisque ut lacus
          eleifend lorem lobortis fermentum nec sit amet lacus.
          Vestibulum vehicula lobortis lectus ut pellentesque.
          Nullam tempus in ligula at lacinia. Etiam accumsan
          eleifend nunc, at rhoncus nulla tincidunt sed. Sed turpis
          dui, hendrerit vitae finibus ut, luctus quis ligula.
          Aenean venenatis id diam tempor interdum. Nulla mauris
          est, lacinia a fermentum at, ullamcorper ut ante.
        </p>
        <p>
          Suspendisse gravida diam sit amet malesuada interdum. Cras
          odio ipsum, scelerisque ac auctor ac, rutrum eget elit.
          Nulla sodales hendrerit leo, eget mattis velit suscipit
          vitae. Quisque interdum quam at convallis vestibulum.
          Aenean est ex, lacinia in leo vitae, euismod ullamcorper
          enim. Donec vulputate odio non metus elementum tincidunt.
          Integer bibendum ultricies risus a viverra. Fusce mattis
          turpis justo, non vehicula mauris feugiat vel. Etiam ut
          mauris ultrices orci aliquam placerat.
        </p>
        <p>
          Praesent varius ut eros ut sollicitudin. Curabitur
          vehicula fermentum massa, nec scelerisque diam posuere
          quis. Etiam ut diam nec quam sollicitudin finibus sit amet
          in ipsum. Suspendisse cursus in urna eu condimentum. Cras
          ultricies sed nibh id mollis. Sed gravida ex sed tortor
          rhoncus malesuada eu non lorem. Cras vel erat tristique,
          pretium neque nec, sagittis velit. Nulla non iaculis
          dolor. Aenean a nulla a elit ornare consequat ac fringilla
          nibh. Praesent volutpat orci tellus, in hendrerit leo
          imperdiet eget. Aliquam erat volutpat.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Quisque nunc est, convallis ac ultricies sit
          amet, sagittis ac eros. Morbi gravida interdum sapien, ac
          elementum orci sollicitudin quis. Donec suscipit arcu non
          est rutrum cursus vitae eget lacus. Curabitur pulvinar sit
          amet lectus in efficitur. Pellentesque ultricies ultricies
          mauris, a ultrices leo sodales vel. Aliquam sapien turpis,
          egestas eu volutpat at, semper vel ligula. Sed pretium
          lacus ut tellus blandit, nec ornare sapien varius. Nulla
          in ornare mi, eu congue libero. Curabitur non urna quis
          dui eleifend dictum. Vivamus quis enim sem.
        </p>
      </div>
    </div>
  </div>
</div>
<div class="mg-modal mg-right" id="modal-3">
  <div class="mg-modal--content mg-container">
    <h3>
      Modal side right Dialog
      <span class="mg-close mg-right" data-action="close"></span>
    </h3>
    <div class="mg-modal--body">
      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur euismod tortor eget magna auctor, eu hendrerit
          ipsum mattis. Etiam vitae ligula nulla. Nulla facilisi.
          Maecenas eu orci ac erat mollis fringilla. Donec semper,
          metus vitae laoreet fringilla, nisl velit auctor ligula,
          vitae hendrerit lectus elit eu tellus. Mauris finibus,
          ante quis malesuada interdum, odio massa scelerisque eros,
          ac iaculis tellus turpis vitae dolor. Nullam id diam eu
          tellus dictum tempor. Vestibulum finibus eros vitae
          pretium varius.
        </p>
        <p>
          Aenean in ex eu ante viverra semper. Nullam at condimentum
          quam. Sed elit sapien, maximus ac pretium ac, viverra
          aliquam tortor. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Cras
          sed sapien fermentum, elementum mi efficitur, congue
          tellus. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Cras malesuada lorem enim, eget scelerisque
          orci vestibulum a. Proin scelerisque enim nibh, egestas
          euismod nunc aliquam vel. Pellentesque facilisis lacus
          tortor, nec dictum augue porttitor nec. Quisque ut lacus
          eleifend lorem lobortis fermentum nec sit amet lacus.
          Vestibulum vehicula lobortis lectus ut pellentesque.
          Nullam tempus in ligula at lacinia. Etiam accumsan
          eleifend nunc, at rhoncus nulla tincidunt sed. Sed turpis
          dui, hendrerit vitae finibus ut, luctus quis ligula.
          Aenean venenatis id diam tempor interdum. Nulla mauris
          est, lacinia a fermentum at, ullamcorper ut ante.
        </p>
        <p>
          Suspendisse gravida diam sit amet malesuada interdum. Cras
          odio ipsum, scelerisque ac auctor ac, rutrum eget elit.
          Nulla sodales hendrerit leo, eget mattis velit suscipit
          vitae. Quisque interdum quam at convallis vestibulum.
          Aenean est ex, lacinia in leo vitae, euismod ullamcorper
          enim. Donec vulputate odio non metus elementum tincidunt.
          Integer bibendum ultricies risus a viverra. Fusce mattis
          turpis justo, non vehicula mauris feugiat vel. Etiam ut
          mauris ultrices orci aliquam placerat.
        </p>
        <p>
          Praesent varius ut eros ut sollicitudin. Curabitur
          vehicula fermentum massa, nec scelerisque diam posuere
          quis. Etiam ut diam nec quam sollicitudin finibus sit amet
          in ipsum. Suspendisse cursus in urna eu condimentum. Cras
          ultricies sed nibh id mollis. Sed gravida ex sed tortor
          rhoncus malesuada eu non lorem. Cras vel erat tristique,
          pretium neque nec, sagittis velit. Nulla non iaculis
          dolor. Aenean a nulla a elit ornare consequat ac fringilla
          nibh. Praesent volutpat orci tellus, in hendrerit leo
          imperdiet eget. Aliquam erat volutpat.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Quisque nunc est, convallis ac ultricies sit
          amet, sagittis ac eros. Morbi gravida interdum sapien, ac
          elementum orci sollicitudin quis. Donec suscipit arcu non
          est rutrum cursus vitae eget lacus. Curabitur pulvinar sit
          amet lectus in efficitur. Pellentesque ultricies ultricies
          mauris, a ultrices leo sodales vel. Aliquam sapien turpis,
          egestas eu volutpat at, semper vel ligula. Sed pretium
          lacus ut tellus blandit, nec ornare sapien varius. Nulla
          in ornare mi, eu congue libero. Curabitur non urna quis
          dui eleifend dictum. Vivamus quis enim sem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur euismod tortor eget magna auctor, eu hendrerit
          ipsum mattis. Etiam vitae ligula nulla. Nulla facilisi.
          Maecenas eu orci ac erat mollis fringilla. Donec semper,
          metus vitae laoreet fringilla, nisl velit auctor ligula,
          vitae hendrerit lectus elit eu tellus. Mauris finibus,
          ante quis malesuada interdum, odio massa scelerisque eros,
          ac iaculis tellus turpis vitae dolor. Nullam id diam eu
          tellus dictum tempor. Vestibulum finibus eros vitae
          pretium varius.
        </p>
        <p>
          Aenean in ex eu ante viverra semper. Nullam at condimentum
          quam. Sed elit sapien, maximus ac pretium ac, viverra
          aliquam tortor. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Cras
          sed sapien fermentum, elementum mi efficitur, congue
          tellus. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Cras malesuada lorem enim, eget scelerisque
          orci vestibulum a. Proin scelerisque enim nibh, egestas
          euismod nunc aliquam vel. Pellentesque facilisis lacus
          tortor, nec dictum augue porttitor nec. Quisque ut lacus
          eleifend lorem lobortis fermentum nec sit amet lacus.
          Vestibulum vehicula lobortis lectus ut pellentesque.
          Nullam tempus in ligula at lacinia. Etiam accumsan
          eleifend nunc, at rhoncus nulla tincidunt sed. Sed turpis
          dui, hendrerit vitae finibus ut, luctus quis ligula.
          Aenean venenatis id diam tempor interdum. Nulla mauris
          est, lacinia a fermentum at, ullamcorper ut ante.
        </p>
        <p>
          Suspendisse gravida diam sit amet malesuada interdum. Cras
          odio ipsum, scelerisque ac auctor ac, rutrum eget elit.
          Nulla sodales hendrerit leo, eget mattis velit suscipit
          vitae. Quisque interdum quam at convallis vestibulum.
          Aenean est ex, lacinia in leo vitae, euismod ullamcorper
          enim. Donec vulputate odio non metus elementum tincidunt.
          Integer bibendum ultricies risus a viverra. Fusce mattis
          turpis justo, non vehicula mauris feugiat vel. Etiam ut
          mauris ultrices orci aliquam placerat.
        </p>
        <p>
          Praesent varius ut eros ut sollicitudin. Curabitur
          vehicula fermentum massa, nec scelerisque diam posuere
          quis. Etiam ut diam nec quam sollicitudin finibus sit amet
          in ipsum. Suspendisse cursus in urna eu condimentum. Cras
          ultricies sed nibh id mollis. Sed gravida ex sed tortor
          rhoncus malesuada eu non lorem. Cras vel erat tristique,
          pretium neque nec, sagittis velit. Nulla non iaculis
          dolor. Aenean a nulla a elit ornare consequat ac fringilla
          nibh. Praesent volutpat orci tellus, in hendrerit leo
          imperdiet eget. Aliquam erat volutpat.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Quisque nunc est, convallis ac ultricies sit
          amet, sagittis ac eros. Morbi gravida interdum sapien, ac
          elementum orci sollicitudin quis. Donec suscipit arcu non
          est rutrum cursus vitae eget lacus. Curabitur pulvinar sit
          amet lectus in efficitur. Pellentesque ultricies ultricies
          mauris, a ultrices leo sodales vel. Aliquam sapien turpis,
          egestas eu volutpat at, semper vel ligula. Sed pretium
          lacus ut tellus blandit, nec ornare sapien varius. Nulla
          in ornare mi, eu congue libero. Curabitur non urna quis
          dui eleifend dictum. Vivamus quis enim sem.
        </p>
      </div>
    </div>
  </div>
</div>
<div class="mg-modal mg-left mg-bottom" id="modal-4">
  <div class="mg-modal--content mg-container">
    <h3>
      Modal side left Dialog
      <span class="mg-close mg-right" data-action="close"></span>
    </h3>
    <div class="mg-modal--body">
      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur euismod tortor eget magna auctor, eu hendrerit
          ipsum mattis. Etiam vitae ligula nulla. Nulla facilisi.
          Maecenas eu orci ac erat mollis fringilla. Donec semper,
          metus vitae laoreet fringilla, nisl velit auctor ligula,
          vitae hendrerit lectus elit eu tellus. Mauris finibus,
          ante quis malesuada interdum, odio massa scelerisque eros,
          ac iaculis tellus turpis vitae dolor. Nullam id diam eu
          tellus dictum tempor. Vestibulum finibus eros vitae
          pretium varius.
        </p>
      </div>
    </div>
  </div>
</div>
<div class="mg-modal mg-right mg-top" id="modal-5">
  <div class="mg-modal--content mg-container">
    <h3>
      Modal side left Dialog

      <span class="mg-close mg-right" data-action="close"></span>
    </h3>
    <div class="mg-modal--body">
      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur euismod tortor eget magna auctor, eu hendrerit
          ipsum mattis. Etiam vitae ligula nulla. Nulla facilisi.
          Maecenas eu orci ac erat mollis fringilla. Donec semper,
          metus vitae laoreet fringilla, nisl velit auctor ligula,
          vitae hendrerit lectus elit eu tellus. Mauris finibus,
          ante quis malesuada interdum, odio massa scelerisque eros,
          ac iaculis tellus turpis vitae dolor. Nullam id diam eu
          tellus dictum tempor. Vestibulum finibus eros vitae
          pretium varius.
        </p>
      </div>
    </div>
  </div>
</div>
<div class="mg-modal mg-bottom" id="modal-6">
  <div class="mg-modal--content mg-container">
    <h3>
      Modal bottom Dialog

      <span class="mg-close mg-right" data-action="close"></span>
    </h3>
    <div class="mg-modal--body">
      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur euismod tortor eget magna auctor, eu hendrerit
          ipsum mattis. Etiam vitae ligula nulla. Nulla facilisi.
          Maecenas eu orci ac erat mollis fringilla. Donec semper,
          metus vitae laoreet fringilla, nisl velit auctor ligula,
          vitae hendrerit lectus elit eu tellus. Mauris finibus,
          ante quis malesuada interdum, odio massa scelerisque eros,
          ac iaculis tellus turpis vitae dolor. Nullam id diam eu
          tellus dictum tempor. Vestibulum finibus eros vitae
          pretium varius.
        </p>
      </div>
    </div>
  </div>
</div>
<div class="mg-modal mg-top" id="modal-7">
  <div class="mg-modal--content mg-container">
    <h3>
      Modal top Dialog

      <span class="mg-close mg-right" data-action="close"></span>
    </h3>
    <div class="mg-modal--body">
      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur euismod tortor eget magna auctor, eu hendrerit
          ipsum mattis. Etiam vitae ligula nulla. Nulla facilisi.
          Maecenas eu orci ac erat mollis fringilla. Donec semper,
          metus vitae laoreet fringilla, nisl velit auctor ligula,
          vitae hendrerit lectus elit eu tellus. Mauris finibus,
          ante quis malesuada interdum, odio massa scelerisque eros,
          ac iaculis tellus turpis vitae dolor. Nullam id diam eu
          tellus dictum tempor. Vestibulum finibus eros vitae
          pretium varius.
        </p>
      </div>
    </div>
  </div>
</div>
<div class="example">
  <pre class="prettyprint" data-toggle="prettify" data-source="modal-example"></pre>
</div>
</section>

export default ModalSection;