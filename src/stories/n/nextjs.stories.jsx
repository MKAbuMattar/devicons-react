import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { NextJSOriginal } from '../../index'

const stories = storiesOf('nextjs', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <NextJSOriginal />
    </Fragment>
  )
})
