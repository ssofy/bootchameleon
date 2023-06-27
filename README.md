# Bootchameleon for Bootstrap 5

![](logo.png)

A tiny and independent javascript library for changing the colors of **Bootstrap 5** components in realtime.
It was built primarily to assist theme designers at [SSOfy](https://www.ssofy.com) in supporting theme customization features, but it is also freely available to anybody who finds it useful.

### Contributions are welcome!

The current state only allows for button color changes.
We hope to support more components overtime.
Feel free to seek help from other developers wherever possible.

## Installation

Include the script tag:
```html
<script src="https://cdn.jsdelivr.net/gh/ssofy/bootchameleon/dist/bootchameleon.min.js"></script>
```

## Usage

```javascript
// change primary button color
window.bootchameleon.buttons('.btn-primary')
  .setBackgroundColor('#000000')
  .setTextColor('#ffffff')
  .setHoverEffect('#000000')
  .setHoverTextColor('#ffffff')
  .setBorderColor('#4f4f4f');
```

Alternatively, you may use magic methods to determine the ideal colors automatically:

```javascript
// primary button
window.bootchameleon.buttons('.btn-primary').setColorAuto('#000000');

// outline primary button
window.bootchameleon.buttons('.btn-outline-primary').setOutlineColorAuto('#000000');
```

## Build

```sh
npm install
npm run build
```

## License

The MIT License (MIT). Please see [License](LICENSE) File for more information.
