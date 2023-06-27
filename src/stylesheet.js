export default class StyleSheet {
  static setGlobalStyle(selector, styles) {
    const css = selector ? `${selector} { ${styles} }` : `:root { ${styles} }`;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);
  }
}
