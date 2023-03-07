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

export type FilmType = {
  description: string,
  filmId: number
  general: boolean
  nameEn: string,
  nameRu: string,
  professionKey: string,
  rating: string,
}

export type ActorTypes = {
  personId: number,
  webUrl: string,
  nameRu: string,
  nameEn: string,
  sex: string,
  posterUrl: string,
  growth: string,
  birthday: string,
  death: string,
  age: number,
  birthplace: string,
  deathplace: string,
  hasAwards: number,
  profession: string,
  facts: string[],
  films: FilmType[]
}