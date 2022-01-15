import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PycharmPlain } from '../../index'

const stories = storiesOf('pycharm', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PycharmPlain />
    </Fragment>
  )
})
