import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ElectronOriginal } from '../../index'

const stories = storiesOf('electron', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ElectronOriginal />
    </Fragment>
  )
})
