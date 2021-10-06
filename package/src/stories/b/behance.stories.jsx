import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { BehancePlain } from '../../index'

const stories = storiesOf('behance', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <BehancePlain />
    </Fragment>
  )
})
