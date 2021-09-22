export interface IWish {
  id: string,
  userId: string,
  url: string,
  pic?: string,
  urlPic?: string,
  name: string,
  price?: number,
  currency?: Currency,
  description?: string,
  intent: IWishIntent,
  stores?: IWishStore[],
}

export enum Currency {
  Dollar = '$',
  Ruble = '₽',
  Euro = '€',
}

export interface IWishIntent {
  count: number,
  icon: string,
}

export interface IWishStore {
  url?: string,
  name?: string,
}
