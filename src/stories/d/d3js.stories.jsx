import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { D3JsOriginal, D3JsPlain } from '../../index'

const stories = storiesOf('d3js', module)

stories.add('original', () => {
  return (
    <Fragment>
      <D3JsOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <D3JsPlain height="128" width="128" />
    </Fragment>
  )
})
