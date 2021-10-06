import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CrystalOriginal } from '../../index'

const stories = storiesOf('crystal', module)

stories.add('original', () => {
  return (
    <Fragment>
      <CrystalOriginal />
    </Fragment>
  )
})
