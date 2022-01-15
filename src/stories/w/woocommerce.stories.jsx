import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { WooCommercePlain } from '../../index'

const stories = storiesOf('woocommerce', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <WooCommercePlain />
    </Fragment>
  )
})
