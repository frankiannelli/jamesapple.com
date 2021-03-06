interface IPreviewMarkdown {
  date: string
  path: string
  title: string
  excerpt: string
  tags: string[]
  description: string
  headerImage: FluidImage | null
}

export interface IPreviewMarkdownFragment {
  excerpt: string

  frontmatter: {
    date: string
    path: string
    title: string
    description: string
    tags: string[]

    headerImage: {
      childImageSharp: {
        fluid: FluidImage
      }
    } | null
  }
}

export default class PreviewMarkdown implements IPreviewMarkdown {
  private get imageData(): FluidImage | null {
    const { headerImage } = this.rawFragment.frontmatter
    if (!headerImage) return null
    return headerImage.childImageSharp.fluid
  }

  public get headerImage(): FluidImage | null {
    if (this._headerImage === undefined) {
      this._headerImage = this.imageData
      return this._headerImage
    }
    return this._headerImage
  }

  public get date(): string {
    return this.rawFragment.frontmatter.date
  }

  public get tags(): string[] {
    return this.rawFragment.frontmatter.tags
  }

  public get description(): string {
    return this.rawFragment.frontmatter.description
  }

  public get title(): string {
    return this.rawFragment.frontmatter.title
  }

  public get path(): string {
    return this.rawFragment.frontmatter.path
  }

  public get excerpt(): string {
    return this.rawFragment.excerpt
  }

  public get value(): IPreviewMarkdown {
    const { tags, description, headerImage, date, path, title, excerpt } = this

    return {
      description,
      tags,
      date,
      path,
      title,
      excerpt,
      headerImage
    }
  }

  public static fromFragment(rawFragment: IPreviewMarkdownFragment) {
    return new PreviewMarkdown(rawFragment)
  }

  private _headerImage: FluidImage | null | undefined
  private rawFragment: IPreviewMarkdownFragment

  private constructor(rawFragment: IPreviewMarkdownFragment) {
    this.rawFragment = rawFragment
  }
}
