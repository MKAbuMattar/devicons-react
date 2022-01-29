import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ConfluenceOriginal } from '../../index'

const stories = storiesOf('confluence', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ConfluenceOriginal />
    </Fragment>
  )
})
