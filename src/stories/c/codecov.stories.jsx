import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CodecovPlain } from '../../index'

const stories = storiesOf('codecov', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CodecovPlain height="128" width="128" />
    </Fragment>
  )
})
