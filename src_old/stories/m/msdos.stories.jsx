import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { MSDosPlain } from '../../index'

const stories = storiesOf('msdos', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <MSDosPlain />
    </Fragment>
  )
})
