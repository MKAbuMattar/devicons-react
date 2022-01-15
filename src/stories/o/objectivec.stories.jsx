import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ObjectivecPlain } from '../../index'

const stories = storiesOf('objectivec', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ObjectivecPlain />
    </Fragment>
  )
})
