import Color from './color';
import StyleSheet from "./stylesheet";

export default class Raw {
  selector;

  constructor(selector) {
    this.selector = selector;
  }

  setBackgroundColor(color) {
    StyleSheet.setGlobalStyle(this.selector, `
      background-color: ${color} !important;
    `);

    return this;
  }

  setBorderColor(color) {
    StyleSheet.setGlobalStyle(this.selector, `
      border-color: ${color} !important;
    `);

    return this;
  }

  setTextColor(color) {
    StyleSheet.setGlobalStyle(this.selector, `
      color: ${color} !important;
    `);

    return this;
  }

  setColorAuto(color) {
    const isLight = new Color(color).isLight();

    const borderColor = new Color(color).darken(15).toString();
    const textColor = isLight ? 'black' : 'white';

    this.setBackgroundColor(color);
    this.setTextColor(textColor);
    this.setBorderColor(borderColor);

    return this;
  }
};
