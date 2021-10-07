import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { YiiPlain } from '../../index'

const stories = storiesOf('yii', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <YiiPlain />
    </Fragment>
  )
})
