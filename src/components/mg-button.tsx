// src/components/mg-button/mg-button.tsx

import {
  Component,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "mg-button",
  styleUrl: "mg-button.css",
  shadow: true,
})
export class MgButton {
  @Prop() label: string;
  @Prop() type: "button" | "submit" | "reset" = "button";
  @Prop() disabled: boolean = false;

  @Element() el: HTMLElement;

  @Event() buttonClick: EventEmitter<MouseEvent>;

  private handleClick(event: MouseEvent) {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }

  private forwardAttributes(button: HTMLButtonElement) {
    Array.from(this.el.attributes).forEach((attr) => {
      if (!["label", "type", "disabled"].includes(attr.name)) {
        button.setAttribute(attr.name, attr.value);
      }
    });
  }

  render() {
    return (
      <button
        ref={(el) => this.forwardAttributes(el)}
        type={this.type}
        disabled={this.disabled}
        onClick={(event) => this.handleClick(event)}
      >
        {this.label}
      </button>
    );
  }
}
