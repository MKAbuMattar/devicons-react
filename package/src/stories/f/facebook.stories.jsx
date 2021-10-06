import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { FacebookPlain } from '../../index'

const stories = storiesOf('facebook', module)

stories.add('original', () => {
  return (
    <Fragment>
      <FacebookPlain />
    </Fragment>
  )
})
