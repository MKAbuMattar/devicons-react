import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CakephpPlain } from '../../index'

const stories = storiesOf('cakephp', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CakephpPlain />
    </Fragment>
  )
})
