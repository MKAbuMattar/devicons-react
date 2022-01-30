import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { CouchdbOriginal, CouchdbOriginalWordmark, CouchdbPlain, CouchdbPlainWordmark } from '../../index'

const stories = storiesOf('couchdb', module)

stories.add('original', () => {
  return (
    <Fragment>
      <CouchdbOriginal height="128" width="128" />
    </Fragment>
  )
})

stories.add('original wordmark', () => {
  return (
    <Fragment>
      <CouchdbOriginalWordmark height="128" width="128" />
    </Fragment>
  )
})


stories.add('plain', () => {
  return (
    <Fragment>
      <CouchdbPlain height="128" width="128" />
    </Fragment>
  )
})


stories.add('plain wordmark', () => {
  return (
    <Fragment>
      <CouchdbPlainWordmark height="128" width="128" />
    </Fragment>
  )
})

