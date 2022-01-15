import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { NginxOriginal } from '../../index'

const stories = storiesOf('nginx', module)

stories.add('original', () => {
  return (
    <Fragment>
      <NginxOriginal />
    </Fragment>
  )
})
