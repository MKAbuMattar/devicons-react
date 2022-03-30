import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { JupyterPlain } from '../../index'

const stories = storiesOf('jupyter', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <JupyterPlain />
    </Fragment>
  )
})
