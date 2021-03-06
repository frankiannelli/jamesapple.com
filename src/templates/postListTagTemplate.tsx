import React from 'react'
import { graphql } from 'gatsby'
import PreviewMarkdown, { IPreviewMarkdownFragment } from 'models/PreviewMarkdown'
import PostListPage from 'components/PostListPage'
import SEO from 'components/SEO'

interface IIndexPageContainerProps {
  pageContext: {
    tag: string
    limit: number
    skip: number
    pageCount: number
    currentPage: number
  }
  data: {
    allMarkdownRemark: {
      edges: [{ node: IPreviewMarkdownFragment }]
    }
  }
}

export const postListQuery = graphql`
  query postListTagQuery($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } tags: { in: [$tag] } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PreviewMarkdown
        }
      }
    }
  }
`

export default class PostListTemplate extends React.PureComponent<IIndexPageContainerProps, {}> {
  private get previewMarkdowns(): PreviewMarkdown[] {
    if(!this.props.data.allMarkdownRemark) return []
    const { edges } = this.props.data.allMarkdownRemark
    return edges.map(({ node: remark }) => PreviewMarkdown.fromFragment(remark))
  }

  public render() {
    const { pageCount, currentPage, tag } = this.props.pageContext

    return (
      <>
        <SEO
          title={`Tag Page ${tag} ${currentPage}`}
          description="Software Engineering Blog of James Apple."
          pathname={`/tags${currentPage === 1 ? `/${tag}` : `/${tag}/${currentPage}`}`}
        />

        <PostListPage
          previewMarkdowns={this.previewMarkdowns}
          pageCount={pageCount}
          currentPage={currentPage}
          pathPrefix={`/tags/${tag}/`}
        />
      </>
    )
  }
}
