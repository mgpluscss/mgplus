import { Show, createSignal } from "solid-js";

const PickerPanel = () => 
{
const [isVisible, setVisibility] = createSignal(false);

const toogleVisibility = ()=>{
    console.log("toogleVisibility",isVisible() );    
    setVisibility(!isVisible());
    
}

return <div id="pickerPanel" class="mg-dropdown" classList={{'opened': isVisible()}}>
<button title="menu" data-toggle="dropdown" class="mg-dropdown--button  mg-button--small" onClick={toogleVisibility}>
<span class="mg-icon mg-icon--colors" /> 
</button>
  <div class="mg-dropdown--content mg-dropdown--content-left" >
  <div class="mg-row">
    <label class="mg-toggle">
      Dark theme
      <input type="checkbox" id="theme-switcher" />
      <span class="checkmark"></span>
    </label>
  </div> 
  <div id="picker"></div>
</div> 
</div>
}
export default PickerPanel;