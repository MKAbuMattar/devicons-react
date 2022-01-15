import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { TomcatLine } from '../../index'

const stories = storiesOf('tomcat', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <TomcatLine />
    </Fragment>
  )
})
