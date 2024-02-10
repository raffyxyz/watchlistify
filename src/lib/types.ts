export interface RecentAnimeTypes {
  id: string;
  episodeId: string;
  episodeNumber: number;
  title: string;
  image: string;
  url: string;
}

export interface TopAnimeTypes {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: Array<string>;
}
