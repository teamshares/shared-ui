import { Controller } from 'stimulus';

class input_clipboard_controller extends Controller {
  copy(event) {
    const clipboardCopyEl = this.element;
    clipboardCopyEl.classList.add("clicked");
    setTimeout(() => {
      clipboardCopyEl.classList.remove("clicked");
    }, 5000);
  }

}

const Inputmask = require("inputmask").default;

class input_mask_controller extends Controller {
  connect() {
    Inputmask(this.data.get("pattern")).mask(this.element);
  }

}

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

  toggleOff(event) {
    if (!this.data.has("allowDefault")) {
      event.preventDefault();
    }

    if (this.element.classList.contains("open")) {
      this.toggleControllerTargets();
      this.toggleExternalTargets();
    }
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
  // for now, hard-coded to work with /for-leaders page.
  // future PR will remove hard-coded classes and add value for customizable active and inactive classes.
  connect() {
    this.element[this.identifier] = this;
  }

  switch(event) {
    if (!this.data.has("allowDefault")) {
      event.preventDefault();
    }

    this.deactivate();
    this.activate(event.target);
  }

  deactivate() {
    this.switchableTargets.forEach(target => {
      target.classList.add("hidden");
    });
    this.clickableTargets.forEach(target => {
      target.classList.remove("text-gray-100", "border-gray-100");
      target.classList.add("border-gray-900");
    });
  }

  activate(currentElement) {
    currentElement.classList.remove("border-gray-900");
    currentElement.classList.add("text-gray-100", "border-gray-100");
    document.querySelector(`.${currentElement.id}`).classList.remove("hidden");
  }

}

_defineProperty(_class, "targets", ["switchable", "clickable"]);

export { input_clipboard_controller as InputClipboardController, input_mask_controller as InputMaskController, _class as SwitchController, _class$1 as ToggleController };
