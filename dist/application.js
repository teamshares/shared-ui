(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('stimulus')) :
  typeof define === 'function' && define.amd ? define(['exports', 'stimulus'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TeamsharesUI = {}, global.Stimulus));
}(this, (function (exports, stimulus) { 'use strict';

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

  class _class extends stimulus.Controller {
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

  _defineProperty(_class, "targets", ["toggleable"]);

  class input_clipboard_controller extends stimulus.Controller {
    copy(event) {
      const clipboardCopyEl = this.element;
      clipboardCopyEl.classList.add("clicked");
      setTimeout(() => {
        clipboardCopyEl.classList.remove("clicked");
      }, 5000);
    }

  }

  exports.InputClipboardController = input_clipboard_controller;
  exports.ToggleController = _class;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
