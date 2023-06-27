import Color from './color';
import StyleSheet from "./stylesheet";

export default class StylesheetModifier {
  selector;

  constructor(selector) {
    this.selector = selector;
  }

  setBackgroundColor(color) {
    StyleSheet.setGlobalStyle(this.selector, `
      --bs-btn-bg: ${color} !important;
      --bs-btn-disabled-bg: ${color};
    `);

    return this;
  }

  setBorderColor(color) {
    StyleSheet.setGlobalStyle(this.selector, `
      --bs-btn-border-color: ${color};
      --bs-btn-disabled-border-color: ${color};
    `);

    return this;
  }

  setTextColor(color) {
    StyleSheet.setGlobalStyle(this.selector, `
      --bs-btn-color: ${color};
      --bs-btn-disabled-color: ${color};
    `);

    return this;
  }

  setHoverTextColor(color) {
    StyleSheet.setGlobalStyle(this.selector, `
      --bs-btn-hover-color: ${color};
      --bs-btn-active-color: ${color};
    `);

    return this;
  }

  setHoverEffect(color) {
    const selector = this.selector;

    const hoverBgColor = new Color(color).darken(10).toString();
    const borderColor = new Color(color).darken(25).toString();
    const shadowRGB = new Color(color).darken(75).toRgbString();

    const css = selector ? `${selector}:not([disabled]):not(.disabled):hover,
      ${selector}:not([disabled]):not(.disabled):focus,
      ${selector}:not([disabled]):not(.disabled):active {
          background-color: ${hoverBgColor};
          border-color: ${borderColor};
      }
      ${selector}:not([disabled]):not(.disabled):focus {
          box-shadow: 0 0 0 .2rem rgba(${shadowRGB}, .5);
      }` : `:root:not([disabled]):not(.disabled):hover,
      :root:not([disabled]):not(.disabled):focus,
      :root:not([disabled]):not(.disabled):active {
          background-color: ${hoverBgColor};
          border-color: ${borderColor};
      }
      :root:not([disabled]):not(.disabled):focus {
          box-shadow: 0 0 0 .2rem rgba(${shadowRGB}, .5);
      }`;

    StyleSheet.setGlobalStyle('body', css);

    return this;
  }

  setColorAuto(color) {
    const isLight = new Color(color).isLight();

    const borderColor = new Color(color).darken(15).toString();
    const textColor = isLight ? 'black' : 'white';

    this.setBackgroundColor(color);
    this.setTextColor(textColor);
    this.setBorderColor(borderColor);
    this.setHoverEffect(color);
    this.setHoverTextColor(textColor);

    return this;
  }

  setOutlineColorAuto(color, backgroundColor) {
    const isLight = new Color(color).isLight();
    const isLightBg = new Color(backgroundColor ?? '#ffffff').isLight();

    const borderColor = new Color(color).darken(15).toString();

    const hoverTextColor = isLight ? 'black' : 'white';

    this.setBorderColor(borderColor);
    this.setHoverEffect(color);
    this.setHoverTextColor(hoverTextColor);

    let textColor = color;

    if (isLightBg && isLight) {
      textColor = 'black';
    }

    this.setTextColor(textColor);

    return this;
  }
};
