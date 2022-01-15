import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ComposerLine } from '../../index'

const stories = storiesOf('composer', module)

stories.add('original', () => {
  return (
    <Fragment>
      <ComposerLine />
    </Fragment>
  )
})
