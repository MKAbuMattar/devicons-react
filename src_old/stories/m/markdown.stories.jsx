import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MarkdownOriginal } from '../../index'

const stories = storiesOf('markdown', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MarkdownOriginal />
    </Fragment>
  )
})
