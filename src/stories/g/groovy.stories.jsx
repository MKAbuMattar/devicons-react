import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { GroovyPlain } from '../../index'

const stories = storiesOf('groovy', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <GroovyPlain />
    </Fragment>
  )
})
