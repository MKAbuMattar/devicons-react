import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { VueJSPlain } from '../../index'

const stories = storiesOf('vuejs', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <VueJSPlain />
    </Fragment>
  )
})
