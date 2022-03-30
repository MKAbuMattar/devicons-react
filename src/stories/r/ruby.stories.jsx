import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { RubyPlain } from '../../index'

const stories = storiesOf('ruby', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <RubyPlain />
    </Fragment>
  )
})
