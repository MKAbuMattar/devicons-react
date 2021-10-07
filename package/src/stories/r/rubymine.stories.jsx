import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { RubyMinePlain } from '../../index'

const stories = storiesOf('rubymine', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <RubyMinePlain />
    </Fragment>
  )
})
