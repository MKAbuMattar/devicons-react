import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { VSCodePlain } from '../../index'

const stories = storiesOf('vscode', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <VSCodePlain />
    </Fragment>
  )
})
