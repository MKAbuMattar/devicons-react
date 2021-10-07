import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ThreeJSOriginal } from '../../index'

const stories = storiesOf('threejs', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ThreeJSOriginal />
    </Fragment>
  )
})
