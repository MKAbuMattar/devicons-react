import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ElmPlain } from '../../index'

const stories = storiesOf('elm', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ElmPlain />
    </Fragment>
  )
})
