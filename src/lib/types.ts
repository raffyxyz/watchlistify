export interface RecentAnimeTypes {
  id: string;
  episodeId: string;
  episodeNumber: number;
  title: string;
  image: string;
  url: string;
}

export interface AnimeResultTypes {
  id: string;
  title: string;
  image: string;
  releaseDate: string;
  subOrDub: string;
}

export interface DramaResultTypes {
  id: string;
  url: string;
  title: string;
  image: string;
  releaseDate: string;
  type: string;
}

export interface TopAnimeTypes {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: Array<string>;
}

export interface RecentAnimeRequestTypes {
  currentPage: string | undefined;
  hasNextPage: boolean;
  results: RecentAnimeTypes[];
}

export interface TopAiringAnimeRequestType {
  currentPage: string | undefined;
  hasNextPage: boolean;
  results: TopAnimeTypes[];
}

export interface AnimeResultRequestTypes {
  currentPage: number;
  hasNextPage: boolean;
  results: AnimeResultTypes[];
}

export interface DramaResultRequestTypes {
  currentPage: number;
  haxNextPage: boolean;
  results: DramaResultTypes[];
}
