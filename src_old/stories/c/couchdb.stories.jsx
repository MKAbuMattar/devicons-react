import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CouchdbPlain } from '../../index'

const stories = storiesOf('couchdb', module)

stories.add('plain', () => {
  return (
    <Fragment>
      <CouchdbPlain />
    </Fragment>
  )
})
