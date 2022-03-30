import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AftereffectsOriginal, AftereffectsPlain } from '../../index'

const stories = storiesOf('aftereffects', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AftereffectsOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <AftereffectsPlain height="128" width="128" />
    </Fragment>
  )
})
