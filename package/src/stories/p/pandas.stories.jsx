import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PandasPlain } from '../../index'

const stories = storiesOf('pandas', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PandasPlain />
    </Fragment>
  )
})
