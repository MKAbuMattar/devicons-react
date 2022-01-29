import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ZendPlain } from '../../index'

const stories = storiesOf('zend', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ZendPlain />
    </Fragment>
  )
})
