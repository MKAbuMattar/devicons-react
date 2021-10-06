import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JeetPlain } from '../../index'

const stories = storiesOf('jeet', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JeetPlain />
    </Fragment>
  )
})
