import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JavaPlain } from '../../index'

const stories = storiesOf('java', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JavaPlain />
    </Fragment>
  )
})
