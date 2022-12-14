export type PostersTypes = {
  imdbId: string
  kinopoiskId: number
  nameEn: null | string
  nameOriginal: string
  nameRu: string
  posterUrl: string
  posterUrlPreview: string
  ratingImdb: number
  ratingKinopoisk: number
  type: string
  year: number
  genres: PostersGenres[]
  countries: PostersCountries[]
  slogan?: string
  description?: string
  rating?: number
  filmId?: number
};

export type PostersGenres = {
  genre: string
}

export type PostersCountries = {
  country: string
}

export type BudgetTypes = {
  type: string
  amount: number
  currencyCode: string
  name: string
  symbol: string
}

export type VideosTypes = {
  url: string
  name: string
  site: string
}

export type ImagesTypes = {
  imageUrl: string
  previewUrl: string
}

export type StaffTypes = {
  nameEn: string
  nameRu: string
  professionKey: string
}



