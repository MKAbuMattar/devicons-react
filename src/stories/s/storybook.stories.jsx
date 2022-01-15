import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { StorybookPlain } from '../../index'

const stories = storiesOf('storybook', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <StorybookPlain />
    </Fragment>
  )
})
