export default class Color {
  constructor(color) {
    // Normalize color to hexadecimal
    this.color = color.startsWith('#') ? color.slice(1) : color;
    this.rgb = this.hexToRgb(this.color);
  }

  hexToRgb(hex) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return {r, g, b};
  }

  rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  darken(percent) {
    const ratio = (100 - percent) / 100;

    const r = Math.floor(this.rgb.r * ratio);
    const g = Math.floor(this.rgb.g * ratio);
    const b = Math.floor(this.rgb.b * ratio);

    return new Color(this.rgbToHex(r, g, b));
  }

  isLight() {
    // Lightness determination based on perceived luminance
    const {r, g, b} = this.rgb;
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5;
  }

  toRgbString() {
    const {r, g, b} = this.rgb;
    return `rgb(${r}, ${g}, ${b})`;
  }

  toString() {
    return this.rgbToHex(this.rgb.r, this.rgb.g, this.rgb.b);
  }
}
