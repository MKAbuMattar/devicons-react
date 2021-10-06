import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { OracleOriginal } from '../../index'

const stories = storiesOf('oracle', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <OracleOriginal />
    </Fragment>
  )
})
