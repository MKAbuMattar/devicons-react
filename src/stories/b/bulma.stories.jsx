import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BulmaPlain } from '../../index'

const stories = storiesOf('bulma', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <BulmaPlain />
    </Fragment>
  )
})
