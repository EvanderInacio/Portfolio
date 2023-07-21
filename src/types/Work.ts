export interface Tag {
  id: string
  name: string
  icon: string
}

export interface Print {
  id: string
  image: string
  name: string
  description: string
}

export interface Work {
  id: string
  url: string
  imgUrl: string
  title: string
  logo: string
  subTitle: string
  description: string
  tags: Tag[]
  prints: Print[]
  date: string
}