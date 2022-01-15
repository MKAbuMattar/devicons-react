import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ClojurescriptPlain } from '../../index'

const stories = storiesOf('clojurescript', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ClojurescriptPlain />
    </Fragment>
  )
})
