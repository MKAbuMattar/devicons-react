import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CodeigniterPlain } from '../../index'

const stories = storiesOf('codeigniter', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CodeigniterPlain />
    </Fragment>
  )
})
