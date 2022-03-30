import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GradlePlain } from '../../index'

const stories = storiesOf('gradle', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GradlePlain />
    </Fragment>
  )
})
