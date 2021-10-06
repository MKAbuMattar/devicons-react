import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { IllustratorPlain } from '../../index'

const stories = storiesOf('illustrator', module)

stories.add('original', () => {
  return (
    <Fragment>
      <IllustratorPlain />
    </Fragment>
  )
})
