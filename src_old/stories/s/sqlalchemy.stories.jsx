import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SQLAlchemyPlain } from '../../index'

const stories = storiesOf('sqlalchemy', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SQLAlchemyPlain />
    </Fragment>
  )
})
