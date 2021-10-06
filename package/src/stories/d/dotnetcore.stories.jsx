import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DotnetcorePlain } from '../../index'

const stories = storiesOf('dotnetcore', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <DotnetcorePlain />
    </Fragment>
  )
})
