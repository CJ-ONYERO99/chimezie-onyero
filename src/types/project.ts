export type Project = {
  slug: string
  title: string
  summary: string
  role?: string
  tools?: string[]
  highlights?: string[]
  problem?: string
  approach?: string
  results?: string
  links?: { github?: string; demo?: string }
  cover?: string
  date?: string
  tags?: string[]
}
