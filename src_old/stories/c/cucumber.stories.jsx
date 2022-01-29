import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CucumberPlain } from '../../index'

const stories = storiesOf('cucumber', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CucumberPlain />
    </Fragment>
  )
})
