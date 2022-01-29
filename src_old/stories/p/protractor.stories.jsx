import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ProtractorPlain } from '../../index'

const stories = storiesOf('protractor', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ProtractorPlain />
    </Fragment>
  )
})
