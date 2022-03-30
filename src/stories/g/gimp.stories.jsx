import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GIMPPlain } from '../../index'

const stories = storiesOf('gimp', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GIMPPlain />
    </Fragment>
  )
})
