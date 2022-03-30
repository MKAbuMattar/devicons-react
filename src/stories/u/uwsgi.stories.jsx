import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { UwsgiPlain } from '../../index'

const stories = storiesOf('uwsgi', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <UwsgiPlain />
    </Fragment>
  )
})
