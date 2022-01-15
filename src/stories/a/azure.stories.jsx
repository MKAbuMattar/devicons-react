import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { AzurePlain } from '../../index'

const stories = storiesOf('azure', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <AzurePlain />
    </Fragment>
  )
})
