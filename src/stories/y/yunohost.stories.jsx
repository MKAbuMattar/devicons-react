import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { YunohostPlain } from '../../index'

const stories = storiesOf('yunohost', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <YunohostPlain />
    </Fragment>
  )
})
