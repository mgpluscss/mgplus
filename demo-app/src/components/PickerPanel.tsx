import { createSignal } from "solid-js"; 
import { HexColorPicker } from "solid-colorful"
 

const PickerPanel = () => 
{ 
  const [color, setColor] = createSignal("#aabbcc")

function updateColor(color: string) {

  setColor(color);
  const root = document.documentElement;
  root.style.setProperty("--mg-color-primary", color); 
}

return  <div class="mg-dropdown">
  <button  data-toggle="dropdown" class="mg-dropdown--button mg-button--small">
    <span class="mg-icon mg-icon--colors"></span>
  </button>
    <div class="mg-dropdown--content">
      <div class="mg-row">
    <HexColorPicker color={color()} onChange={updateColor} /> 
    </div>
  </div>  
  </div>
}
export default PickerPanel;