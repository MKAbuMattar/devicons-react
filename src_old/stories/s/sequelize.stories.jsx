import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SequelizePlain } from '../../index'

const stories = storiesOf('sequelize', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SequelizePlain />
    </Fragment>
  )
})
