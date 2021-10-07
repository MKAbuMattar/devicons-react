import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { TrelloPlain } from '../../index'

const stories = storiesOf('trello', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <TrelloPlain />
    </Fragment>
  )
})
