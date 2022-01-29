import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { LaravelPlain } from '../../index'

const stories = storiesOf('laravel', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <LaravelPlain />
    </Fragment>
  )
})
