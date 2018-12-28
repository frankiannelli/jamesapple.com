import * as React from 'react'

import UnthemedPostPage from './PostPage'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../utils/withThemeProvider'

const PostPage = withThemeProvider(UnthemedPostPage)

const html = `
<p>
When implementing a user interface in a browser, it’s good to minimize those
differences and issues wherever you can, so that the UI is predictable. Keeping
track of all of those differences is hard, so I’ve put together a list of
common issues, with their solutions, as a handy reference guide for when you’re
  working on a new project.
  </p>

<strong>
Let’s begin.
  </strong>


<p> 
Reset The Backgrounds Of button And input Elements When adding a button,
reset its background, or else it will look different across browsers.  In the
  example below, the same button is shown in Chrome and in Safari.  The latter
adds a default gray background.  
  </p>

<pre>
console.log('Hello')
</pre>
`

storiesOf('PostPage', module).add('Default', () => {
  return (
    <PostPage
      title={'Redefining JavaScript Dynamically at Runtime'}
      date={'December 2019'}
      html={html}
    />
    )
})