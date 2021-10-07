import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SourcetreeOriginal } from '../../index'

const stories = storiesOf('sourcetree', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SourcetreeOriginal />
    </Fragment>
  )
})
