import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { TortoisegitPlain } from '../../index'

const stories = storiesOf('tortoisegit', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <TortoisegitPlain />
    </Fragment>
  )
})
