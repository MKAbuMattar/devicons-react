import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Neo4jPlain } from '../../index'

const stories = storiesOf('neo4j', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <Neo4jPlain />
    </Fragment>
  )
})
