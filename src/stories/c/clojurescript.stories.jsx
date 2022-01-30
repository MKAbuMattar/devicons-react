import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ClojurescriptOriginal, ClojurescriptPlain } from '../../index'

const stories = storiesOf('clojurescript', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ClojurescriptOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('plain', () => {
  return (
    <Fragment>
      <ClojurescriptPlain height="128" width="128" />
    </Fragment>
  )
})
