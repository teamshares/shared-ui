import { Controller } from 'stimulus';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class _class extends Controller {
  connect() {
    this.element[this.identifier] = this;
    this.toggleClass = this.data.get("class") || "hidden";
    this.externalTargets = document.getElementsByClassName(this.data.get("externalTargetClass"));
  }

  toggle(event) {
    if (!this.data.has("allowDefault")) {
      event.preventDefault();
    }

    this.toggleControllerTargets();
    this.toggleExternalTargets();
  }

  toggleControllerTargets() {
    this.toggleableTargets.forEach(target => {
      this.toggleElementClassList(target);
    });
  }

  toggleExternalTargets() {
    for (let i = 0; i < this.externalTargets.length; ++i) {
      this.toggleElementClassList(this.externalTargets[i]);
    }
  }

  toggleElementClassList(targetElement) {
    targetElement.classList.toggle(this.toggleClass);
  }

}

_defineProperty(_class, "targets", ["toggleable"]);

export { _class as ToggleController };
