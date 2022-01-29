import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { VagrantPlain } from '../../index'

const stories = storiesOf('vagrant', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <VagrantPlain />
    </Fragment>
  )
})
