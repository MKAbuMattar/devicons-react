import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { UnityOriginal } from '../../index'

const stories = storiesOf('unity', module)

stories.add('original', () => {
  return (
    <Fragment>
      <UnityOriginal />
    </Fragment>
  )
})
