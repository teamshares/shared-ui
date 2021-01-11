import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["toggleable"];

  connect () {
    this.element[this.identifier] = this;
    this.toggleClass = this.data.get("class") || "hidden";
    this.externalTargets = document.getElementsByClassName(this.data.get("externalTargetClass"));
  }

  toggle (event) {
    if (!this.data.has("allowDefault")) {
      event.preventDefault();
    }

    this.toggleControllerTargets();
    this.toggleExternalTargets();
  }

  toggleControllerTargets () {
    this.toggleableTargets.forEach(target => {
      this.toggleElementClassList(target);
    });
  }

  toggleExternalTargets () {
    for (let i=0; i < this.externalTargets.length; ++i) {
      this.toggleElementClassList(this.externalTargets[i]);
    }
  };

  toggleElementClassList(targetElement) {
    targetElement.classList.toggle(this.toggleClass);
  }
}
