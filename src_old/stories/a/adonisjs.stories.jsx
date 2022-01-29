import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AdonisjsOriginal, AdonisjsOriginalWordmark } from '../../index'

const stories = storiesOf('adonisjs', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AdonisjsOriginal />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <AdonisjsOriginalWordmark />
    </Fragment>
  )
})
