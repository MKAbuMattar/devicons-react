import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { OcamlPlain } from '../../index'

const stories = storiesOf('ocaml', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <OcamlPlain />
    </Fragment>
  )
})
