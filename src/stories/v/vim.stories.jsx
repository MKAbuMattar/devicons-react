import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { VimPlain } from '../../index'

const stories = storiesOf('vim', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <VimPlain />
    </Fragment>
  )
})
