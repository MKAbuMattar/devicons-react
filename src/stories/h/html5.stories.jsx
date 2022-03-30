import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { HTML5Plain } from '../../index'

const stories = storiesOf('html5', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <HTML5Plain />
    </Fragment>
  )
})
