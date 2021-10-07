import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { SubversionOriginal } from '../../index'

const stories = storiesOf('subversion', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <SubversionOriginal />
    </Fragment>
  )
})
