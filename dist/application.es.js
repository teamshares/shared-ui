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

class _class$1 extends Controller {
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

_defineProperty(_class$1, "targets", ["toggleable"]);

class _class extends Controller {
  select(event) {
    this.inputTarget.select();
  }

  copy(event) {
    if (!this.data.has("allowDefault")) {
      event.preventDefault();
    } // document.execCommand("copy");


    this.ctaTarget.textContent = "Copied";
    setTimeout(() => {
      this.ctaTarget.textContent = "Copy";
    }, 5000);
  }

}

_defineProperty(_class, "targets", ["input", "cta"]);

export { _class as InputClipboardController, _class$1 as ToggleController };
