import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AtomOriginal } from '../../index'

const stories = storiesOf('atom', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AtomOriginal />
    </Fragment>
  )
})
