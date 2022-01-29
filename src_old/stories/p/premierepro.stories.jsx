import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { PremiereProPlain } from '../../index'

const stories = storiesOf('premierepro', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <PremiereProPlain />
    </Fragment>
  )
})
