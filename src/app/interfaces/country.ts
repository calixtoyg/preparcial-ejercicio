export interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  region: string;
  population: number;
  subregion: string;
  latlng: Array<number>;
  demonym: string;
  timezones: Array<string>;
}
