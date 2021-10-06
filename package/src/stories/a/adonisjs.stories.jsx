import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AdonisjsOriginalWordmark } from '../../index'

const stories = storiesOf('adonisjs', module)

stories.add('original word mark', () => {
  return (
    <Fragment>
      <AdonisjsOriginalWordmark />
    </Fragment>
  )
})
