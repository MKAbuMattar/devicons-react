import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { HerokuPlain } from '../../index'

const stories = storiesOf('heroku', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <HerokuPlain />
    </Fragment>
  )
})
