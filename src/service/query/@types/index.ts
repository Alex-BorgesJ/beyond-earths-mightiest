interface IDataResults {
  count: number;
  limit: number;
  offset: number;
  results: Array<IHeroes>;
  total: number;
}

interface IHeroes {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
}

export interface IThumbnail {
  path: string;
  extension: string;
}

export interface IResponse {
  code: number;
  data: IDataResults;
  status: string;
}
