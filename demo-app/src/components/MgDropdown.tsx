import { ParentComponent, Show, createSignal } from "solid-js";

interface MgDropdownProps { 
  title: string;
  text: string;
  orientation: "left" | "right" ;
  icon?: string;
  size?: "small" | "default" | "large";
}

const MgDropDown:ParentComponent<MgDropdownProps> = (props)=> { 
const [isOpened, setOpened] = createSignal( false);

const toggleOpened = ()=>{
  setOpened(!isOpened());
    
} 
    
return <div class="mg-dropdown" classList={{'opened': isOpened()}}>
<button title={props.title} class="mg-dropdown--button" classList={{'mg-button--small': props.size=="small",'mg-button--large': props.size=="large" }}  onClick={toggleOpened}>
<Show when={props.icon}><span class={`mg-icon mg-icon--${props.icon}`} /> </Show>
{props.text}
</button>
  <div class={`mg-dropdown--content mg-${props.orientation ?? "right"}`}>
    {props.children} 
</div>
</div>
}

export default MgDropDown;