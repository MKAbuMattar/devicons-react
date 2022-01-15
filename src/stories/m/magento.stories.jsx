import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MagentoOriginal } from '../../index'

const stories = storiesOf('magento', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MagentoOriginal />
    </Fragment>
  )
})
