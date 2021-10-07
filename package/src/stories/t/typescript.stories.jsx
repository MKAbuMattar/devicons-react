import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { TypeScriptPlain } from '../../index'

const stories = storiesOf('typescript', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <TypeScriptPlain />
    </Fragment>
  )
})
