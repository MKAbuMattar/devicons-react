import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CodepenPlain } from '../../index'

const stories = storiesOf('codepen', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CodepenPlain />
    </Fragment>
  )
})
