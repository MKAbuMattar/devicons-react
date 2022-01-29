import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { FeathersjsOriginal } from '../../index'

const stories = storiesOf('feathersjs', module)

stories.add('original', () => {
  return (
    <Fragment>
      <FeathersjsOriginal />
    </Fragment>
  )
})
