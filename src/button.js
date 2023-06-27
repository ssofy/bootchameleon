import Color from './color';
import StyleSheet from "./stylesheet";

export default class StylesheetModifier {
  selector;

  constructor(selector) {
    this.selector = selector;
  }

  setBackgroundColor(color) {
    StyleSheet.setGlobalStyle(this.selector, `
      --bs-btn-bg: ${color};
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

    const hoverBgColor = new Color(color).darken(5).toString();
    const borderColor = new Color(color).darken(15).toString();
    const shadowRGB = new Color(color).darken(50).toRgbString();

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
    const selector = this.selector;

    const isLight = new Color(color).isLight();

    const borderColor = new Color(color).darken(15).toString();
    const textColor = isLight ? 'black' : 'white';

    this.setBackgroundColor(selector, color);
    this.setTextColor(selector, textColor);
    this.setBorderColor(selector, borderColor);
    this.setHoverEffect(selector, color);
    this.setHoverTextColor(selector, textColor);

    return this;
  }

  setOutlineColorAuto(color, backgroundColor) {
    const selector = this.selector;

    const isLight = new Color(color).isLight();
    const isLightBg = new Color(backgroundColor ?? '#ffffff').isLight();

    const borderColor = new Color(color).darken(15).toString();

    const hoverTextColor = isLight ? 'black' : 'white';

    this.setBorderColor(selector, borderColor);
    this.setHoverEffect(selector, color);
    this.setHoverTextColor(selector, hoverTextColor);

    let textColor = color;

    if (isLightBg && isLight) {
      textColor = 'black';
    }

    this.setTextColor(selector, textColor);

    return this;
  }
};
