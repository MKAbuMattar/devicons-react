import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CSharpPlain } from '../../index'

const stories = storiesOf('csharp', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CSharpPlain />
    </Fragment>
  )
})
