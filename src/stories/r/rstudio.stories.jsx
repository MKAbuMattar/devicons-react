import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { RstudioPlain } from '../../index'

const stories = storiesOf('rstudio', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <RstudioPlain />
    </Fragment>
  )
})
