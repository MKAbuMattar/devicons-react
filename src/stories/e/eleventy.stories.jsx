import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { EleventyPlain } from '../../index'

const stories = storiesOf('eleventy', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <EleventyPlain />
    </Fragment>
  )
})
