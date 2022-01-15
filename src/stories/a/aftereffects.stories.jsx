import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AftereffectsPlain } from '../../index'

const stories = storiesOf('aftereffects', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <AftereffectsPlain />
    </Fragment>
  )
})
