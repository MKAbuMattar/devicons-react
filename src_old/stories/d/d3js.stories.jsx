import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { D3jsPlain } from '../../index'

const stories = storiesOf('d3js', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <D3jsPlain />
    </Fragment>
  )
})
