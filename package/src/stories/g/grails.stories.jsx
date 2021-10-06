import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GrailsPlain } from '../../index'

const stories = storiesOf('grails', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GrailsPlain />
    </Fragment>
  )
})
