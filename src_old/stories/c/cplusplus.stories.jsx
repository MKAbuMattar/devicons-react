import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CPlusPlusPlain } from '../../index'

const stories = storiesOf('cplusplus', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CPlusPlusPlain />
    </Fragment>
  )
})
