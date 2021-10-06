import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ApachePlain } from '../../index'

const stories = storiesOf('apache', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ApachePlain />
    </Fragment>
  )
})
