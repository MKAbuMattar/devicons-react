import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CoffeescriptOriginal, CoffeescriptOriginalWordmark } from '../../index'

const stories = storiesOf('coffeescript', module)

stories.add('original', () => {
  return (
    <Fragment>
      <CoffeescriptOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <CoffeescriptOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})
