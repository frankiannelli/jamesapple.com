import { graphql } from 'gatsby'

export const displayMarkdownFragment = graphql`
  fragment DisplayMarkdown on MarkdownRemark {
    html

    frontmatter {
      date(formatString: "MMMM YYYY")
      path
      title

      headerImage {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export const previewMarkdownFragment = graphql`
  fragment PreviewMarkdown on MarkdownRemark {
    excerpt(format: PLAIN, pruneLength: 200)

    frontmatter {
      date(formatString: "MMMM YYYY")
      path
      title

      headerImage {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`