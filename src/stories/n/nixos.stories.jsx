import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { NixosPlain } from '../../index'

const stories = storiesOf('nixos', module)

stories.add('original', () => {
  return (
    <Fragment>
      <NixosPlain />
    </Fragment>
  )
})
