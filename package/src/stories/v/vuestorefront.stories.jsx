import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { VuestorefrontPlain } from '../../index'

const stories = storiesOf('vuestorefront', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <VuestorefrontPlain />
    </Fragment>
  )
})
