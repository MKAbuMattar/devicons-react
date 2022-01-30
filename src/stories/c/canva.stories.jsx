import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CanvaOriginal } from '../../index'

const stories = storiesOf('canva', module)

stories.add('original', () => {
  return (
    <Fragment>
      <CanvaOriginal height="128" width="128" />
    </Fragment>
  )
})
