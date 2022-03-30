import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SalesforcePlain } from '../../index'

const stories = storiesOf('salesforce', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SalesforcePlain />
    </Fragment>
  )
})
