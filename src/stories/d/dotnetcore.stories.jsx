import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DotnetcoreOriginal, DotnetcorePlain } from '../../index'

const stories = storiesOf('dotnetcore', module)

stories.add('original', () => {
  return (
    <Fragment>
      <DotnetcoreOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <DotnetcorePlain height="128" width="128" />
    </Fragment>
  )
})


