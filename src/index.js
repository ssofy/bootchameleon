import Button from './button';
import Raw from './raw';

window.bootchameleon = {
  buttons: (selector) => new Button(selector),
  raw: (selector) => new Raw(selector),
};
