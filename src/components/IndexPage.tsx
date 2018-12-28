import * as React from 'react'

import PostList, { IPostListProps } from 'components/PostList'
import BaseLayout from 'components/BaseLayout'

export default class IndexPage extends React.PureComponent<IPostListProps, {}> {
  public render() {
    const { postDetails } = this.props

    return (
      <BaseLayout>
        <PostList postDetails={postDetails} />
      </BaseLayout>
    )
  }
}
