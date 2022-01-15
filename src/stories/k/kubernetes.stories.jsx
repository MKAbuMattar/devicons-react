import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { KubernetesPlain } from '../../index'

const stories = storiesOf('kubernetes', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <KubernetesPlain />
    </Fragment>
  )
})
