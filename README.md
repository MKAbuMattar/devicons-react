<div align="center">
  <a href="https://devicons-react.vercel.app/">
    <img src="https://raw.githubusercontent.com/MKAbuMattar/devicons-react/main/src/assets/devicons-react-original.svg" alt="Devicon Logo" height="140" />
  </a>

  <h1>Devicons React</h1>

<a href="https://devicons-react.vercel.app/">https://devicons-react.vercel.app/</a>

  <p>Devicons React is a comprehensive collection of icons representing programming languages, design tools, and development software, built on top of <a href="https://github.com/devicons/devicon">Devicon</a>. Perfect for React projects!</p>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/devicons-react/v/latest" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/npm/v/devicons-react/latest?style=for-the-badge&logo=npm&logoColor=white&color=d52128" alt="Latest NPM Version"/>
  </a>

  <a href="https://www.npmjs.com/package/devicons-react/v/beta" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/npm/v/devicons-react/beta?style=for-the-badge&logo=npm&logoColor=white&color=d52128" alt="Beta NPM Version"/>
  </a>

  <a href="https://github.com/MKAbuMattar/devicons-react" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
  </a>

  <a href="https://github.com/MKAbuMattar/devicons-react/releases" target="_blank" rel="noreferrer">
    <img alt="GitHub Release" src="https://img.shields.io/github/v/release/MKAbuMattar/devicons-react?color=%23d52128&label=Latest%20release&style=for-the-badge" />
  </a>

  <a href="/LICENSE" target="_blank" rel="noreferrer">
    <img alt="GitHub License" src="https://img.shields.io/github/license/MKAbuMattar/devicons-react?color=%23d52128&style=for-the-badge">
  </a>

  <a href="https://github.com/MKAbuMattar/devicons-react/stargazers" target="_blank" rel="noreferrer">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/MKAbuMattar/devicons-react?color=%23d52128&label=GitHub%20Stars&style=for-the-badge">
  </a>
</div>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [Latest Version](#latest-version)
  - [Beta Version](#beta-version)
- [Usage](#usage)
  - [Default Behavior](#default-behavior)
  - [Customize Size and Color](#customize-size-and-color)
- [License](#license)
- [Support](#support)

## Features

- **Comprehensive**: A wide range of icons for programming languages, design tools, and development software.
- **React-Friendly**: Designed specifically for React applications.
- **Customizable**: Easily change icon size and color.
- **Lightweight**: Optimized for performance and minimal bundle size.

## Installation

### Latest Version

To install the latest stable version:

```sh
# With npm
npm install --save devicons-react@latest

# With yarn
yarn add devicons-react@latest

# With pnpm
pnpm add devicons-react@latest
```

### Beta Version

To install the beta version:

```sh
# With npm
npm install --save devicons-react@beta

# With yarn
yarn add devicons-react@beta

# With pnpm
pnpm add devicons-react@beta
```

## Usage

### Default Behavior

Render an icon with default settings:

```jsx
import Aarch64Original from "devicons-react/lib/icons/Aarch64Original";

const App = () => {
  return (
    <>
      <Aarch64Original />
    </>
  );
};

export default App;
```

### Customize Size and Color

Customize the icon's size and color:

```jsx
import Aarch64Line from "devicons-react/lib/icons/Aarch64Line";
import Aarch64Original from "devicons-react/lib/icons/Aarch64Original";
import Aarch64Plain from "devicons-react/lib/icons/Aarch64Plain";

const App = () => {
  return (
    <>
      <Aarch64Line color="red" size="50" />
      <Aarch64Original color="blue" size="50" />
      <Aarch64Plain size="50" />
      <Aarch64Original className="custom-class" />
    </>
  );
};

export default App;
```

> [!NOTE]  
> The `color` prop works only with `Plain` and `Line` icons. All SVG props are also supported for advanced customization.

> [!CAUTION]
> Avoid importing multiple icons directly using `import { Aarch64Line, Aarch64Original, Aarch64Plain } from 'devicons-react';` as it will increase the bundle size. Instead, import icons individually as shown above.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Support

For questions, issues, or contributions, please visit the [GitHub repository](https://github.com/MKAbuMattar/devicons-react/issues).
