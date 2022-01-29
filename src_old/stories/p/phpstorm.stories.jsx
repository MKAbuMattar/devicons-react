import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PHPStormPlain } from '../../index'

const stories = storiesOf('phpstorm', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PHPStormPlain />
    </Fragment>
  )
})
