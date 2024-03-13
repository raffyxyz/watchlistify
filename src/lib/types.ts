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

export interface EpisodeType {
  id: string;
  number: number;
  url: string;
}

export interface AnimeInfo {
  id: string;
  title: string;
  url: string;
  image: string;
  releaseDate: string | null;
  description: string | null;
  genres: string[];
  subOrDub: "sub"; // Restrict value to the literal string 'sub'
  type: string | null;
  status: "Ongoing"; // Restrict value to the literal string 'Ongoing'
  otherName: string | null;
  totalEpisodes: number;
  episodes: EpisodeType[];
}

export interface AnimeVideoDetailsType {
  download: string;
  headers: {
    Referer: string;
  };
  sources: Array<AnimeVideoSourceType>;
}

export interface AnimeVideoSourceType {
  isM3U8: boolean;
  quality: string;
  url: string;
}
