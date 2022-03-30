<p align="center">
    <a href="https://github.com/MKAbuMattar/devicons-react/releases">
        <img alt="GitHub release (latest by semver)" src="https://img.shields.io/github/v/release/MKAbuMattar/devicons-react?color=%2360be86&label=Latest%20release&style=for-the-badge&sort=semver">
    </a>
    <a href="/LICENSE">
        <img alt="GitHub" src="https://img.shields.io/github/license/MKAbuMattar/devicons-react?color=%2360be86&style=for-the-badge">
    </a>
    <a href="https://github.com/MKAbuMattar/devicons-react/stargazers">
        <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/MKAbuMattar/devicons-react?color=%2360be86&label=github%20stars&style=for-the-badge">
    </a>
</p>
<br/>

<div align="center">
    <a href="https://github.com/MKAbuMattar/devicons-react">
        <img src="https://raw.githubusercontent.com/MKAbuMattar/devicons-react/main/docs/assets/img/logo.png" alt="Devicon Logo" height="140" />
    </a>
    <p align="center">
        Devicons React is a collection of icons that symbolize programming languages, design tools, and development software, build into <a href="https://github.com/devicons/devicon">devicon</a>
    </p>
    <p align="center">
        <a target="__blank" href="https://devicons-react.vercel.app/">Demo</a>
    </p>
</div>

<h2>Install package</h2>

```bash
#npm
npm install --save devicons-react

#yarn
yarn add devicons-react
```

<h3 id="default">Icon Behavior / props</h3>
<p>Default behavior for icon</p>

```js
import { Fragment } from 'react'
import { Aarch64Plain } from 'devicons-react'

const App = () => {
  return (
    <Fragment>
      <Aarch64Plain />
    </Fragment>
  )
}

export default App
```

<p>Change size and color for icon</p>

```js
import { Fragment } from 'react'
import { Aarch64Plain, ReactOriginal } from 'devicons-react'
import AndroidOriginal from 'devicons-react/icons/AndroidOriginal'

const App = () => {
  return (
    <Fragment>
      <Aarch64Plain />
      <ReactOriginal fill="red" height="500" width="500" />
      <AndroidOriginal fill="#d35" height="128" width="128" />
    </Fragment>
  )
}

export default App
```
