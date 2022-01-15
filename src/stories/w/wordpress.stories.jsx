import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { WordPressPlain } from '../../index'

const stories = storiesOf('wordpress', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <WordPressPlain />
    </Fragment>
  )
})
