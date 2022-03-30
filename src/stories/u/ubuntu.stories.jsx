import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { UbuntuPlain } from '../../index'

const stories = storiesOf('ubuntu', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <UbuntuPlain />
    </Fragment>
  )
})
