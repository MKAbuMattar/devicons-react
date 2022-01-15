import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { ShopwareOriginal } from '../../index'

const stories = storiesOf('shopware', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <ShopwareOriginal />
    </Fragment>
  )
})
