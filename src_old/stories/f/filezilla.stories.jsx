import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { FilezillaPlain } from '../../index'

const stories = storiesOf('filezilla', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <FilezillaPlain />
    </Fragment>
  )
})
