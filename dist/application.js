(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('stimulus')) :
  typeof define === 'function' && define.amd ? define(['exports', 'stimulus'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TeamsharesUI = {}, global.Stimulus));
}(this, (function (exports, stimulus) { 'use strict';

  class input_clipboard_controller extends stimulus.Controller {
    copy(event) {
      const clipboardCopyEl = this.element;
      clipboardCopyEl.classList.add("clicked");
      setTimeout(() => {
        clipboardCopyEl.classList.remove("clicked");
      }, 5000);
    }

  }

  const Inputmask = require("inputmask").default;

  class input_mask_controller extends stimulus.Controller {
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

  class _class$1 extends stimulus.Controller {
    connect() {
      this.element[this.identifier] = this;
      this.classToToggle = this.hasToggleClass ? this.toggleClass : "hidden";
      this.externalTargets = document.getElementsByClassName(this.data.get("externalTargetClass"));
    }

    classIsApplied() {
      return this.element.classList.contains(this.classToToggle);
    }

    toggle(event) {
      if (!this.data.has("allowDefault")) event.preventDefault();
      this.toggleControllerTargets();
      this.toggleExternalTargets();
      this.optionallyToggleOthers();
    }

    toggleOff(event) {
      if (!this.data.has("allowDefault")) event.preventDefault();
      if (this.classIsApplied()) this.toggle(event);
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
      targetElement.classList.toggle(this.classToToggle);
    }

    optionallyToggleOthers() {
      if (!this.hasCloseOthersClass) return;
      document.querySelectorAll(`.${this.closeOthersClass}:not(.${this.classToToggle})`).forEach(element => {
        if (!this.element.contains(element)) this.toggleElementClassList(element);
      });
    }

  }

  _defineProperty(_class$1, "targets", ["toggleable"]);

  _defineProperty(_class$1, "classes", ["toggle", "closeOthers"]);

  class _class extends stimulus.Controller {
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
      document.querySelectorAll(`.${currentElement.id}`).forEach(element => {
        element.classList.remove("hidden");
      });
    }

  }

  _defineProperty(_class, "targets", ["switchable", "clickable"]);

  exports.InputClipboardController = input_clipboard_controller;
  exports.InputMaskController = input_mask_controller;
  exports.SwitchController = _class;
  exports.ToggleController = _class$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
