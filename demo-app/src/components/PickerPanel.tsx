import { createSignal } from "solid-js";
import MgDropDown from "./MgDropdown";
import { HexColorPicker, HexColorInput } from "solid-colorful"
 

const PickerPanel = () => 
{ 
  const [color, setColor] = createSignal("#aabbcc")

function updateColor(color: string) {

  setColor(color);
  const root = document.documentElement;
  root.style.setProperty("--mg-color-primary", color); 
}

return  <MgDropDown orientation="left" icon="colors" title="set theme color" text="" size="small">
    <div class="mg-row">
    <HexColorPicker color={color()} onChange={updateColor} /> 
  </div>  
</MgDropDown>
}
export default PickerPanel;