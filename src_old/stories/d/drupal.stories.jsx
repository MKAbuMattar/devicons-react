import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { DrupalPlain } from '../../index'

const stories = storiesOf('drupal', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <DrupalPlain />
    </Fragment>
  )
})
