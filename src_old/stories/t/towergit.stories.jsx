import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { TowergitPlain } from '../../index'

const stories = storiesOf('towergit', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <TowergitPlain />
    </Fragment>
  )
})
