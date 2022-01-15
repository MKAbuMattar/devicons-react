import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AppceleratorOriginal } from '../../index'

const stories = storiesOf('appcelerator', module)

stories.add('original', () => {
  return (
    <Fragment>
      <AppceleratorOriginal />
    </Fragment>
  )
})
