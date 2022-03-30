import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { KarmaPlain } from '../../index'

const stories = storiesOf('karma', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <KarmaPlain />
    </Fragment>
  )
})
