<div align="center">
  <a href="https://devicons-react.vercel.app/">
    <img src="https://raw.githubusercontent.com/MKAbuMattar/devicons-react/main/src/assets/devicons-react-original.svg" alt="Devicon Logo" height="140" />
  </a>

  <h1>Devicons React</h1>

  <a href="https://devicons-react.vercel.app/">https://devicons-react.vercel.app/</a>

  <br/>

  <p>Devicons React is a collection of icons that symbolize programming languages, design tools, and development software, build into <a href="https://github.com/devicons/devicon">devicon</a>.</p>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/devicons-react" target="_blank">
    <img src="https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt=""/>
  </a>

  <a href="https://github.com/MKAbuMattar/devicons-react" target="_blank">
    <img src="https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" alt=""/>
  </a>

  <a href="https://github.com/MKAbuMattar/devicons-react/releases">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/MKAbuMattar/devicons-react?color=%23d52128&label=Latest%20release&style=for-the-badge" />
    </a>

  <a href="/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/MKAbuMattar/devicons-react?color=%23d52128&style=for-the-badge">
  </a>

  <a href="https://github.com/MKAbuMattar/devicons-react/stargazers">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/MKAbuMattar/devicons-react?color=%23d52128&label=github%20stars&style=for-the-badge">
  </a>
</div>

## Install package

### Latest

```sh
#npm
npm install --save devicons-react@latest

#yarn
yarn add devicons-react@latest

#pnpm
pnpm add devicons-react@latest
```

### Beta

```sh
#npm
npm install --save devicons-react@beta

#yarn
yarn add devicons-react@beta

#pnpm
pnpm add devicons-react@beta
```

<h3 id="default">Icon Behavior / props</h3>
<p>Default behavior for icon</p>

```js
import { Aarch64Plain } from 'devicons-react'

const App = () => {
  return (
    <>
      <Aarch64Plain />
    </>
  )
}

export default App
```

<p>Change size and color for icon</p>

```js
import { Aarch64Plain } from 'devicons-react'

const App = () => {
  return (
    <>
      <Aarch64Plain color="red" size="500"  />
    </>
  )
}

export default App
```
