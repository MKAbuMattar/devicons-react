import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GulpPlain } from '../../index'

const stories = storiesOf('gulp', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GulpPlain />
    </Fragment>
  )
})
