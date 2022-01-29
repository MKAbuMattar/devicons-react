import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DigitaloceanPlain } from '../../index'

const stories = storiesOf('digitalocean', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <DigitaloceanPlain />
    </Fragment>
  )
})
