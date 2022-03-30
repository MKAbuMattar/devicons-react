import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { NuxtJSPlain } from '../../index'

const stories = storiesOf('nuxtjs', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <NuxtJSPlain />
    </Fragment>
  )
})
