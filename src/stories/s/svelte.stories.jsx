import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SveltePlain } from '../../index'

const stories = storiesOf('svelte', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SveltePlain />
    </Fragment>
  )
})
