import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GraphqlPlain } from '../../index'

const stories = storiesOf('graphql', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GraphqlPlain />
    </Fragment>
  )
})
