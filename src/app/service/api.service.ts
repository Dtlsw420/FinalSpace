import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url = "https://finalspaceapi.com/api/v0/character";

  constructor() {}
  getCharacters() {
    return fetch(this.url).then((response) => response.json());
  }
  getCitas() {
    return fetch(
      `https://finalspaceapi.com/api/v0/quote`
    ).then((response) => response.json());
  }
  getLocations() {
    return fetch(
      `https://finalspaceapi.com/api/v0/location`
    ).then((response) => response.json());
  }
  getCharacter(id) {
    return fetch(
      `https://finalspaceapi.com/api/v0/character/${id}`
    ).then((response) => response.json());
  }
  getEpisodes() {
    return fetch(`https://finalspaceapi.com/api/v0/episode`).then((response) =>
      response.json()
    );
  }
  getEpisode = async (id) => {
    let response: Response = await fetch(
      `https://finalspaceapi.com/api/v0/episode/${id}`
    );
    let episode = await response.json();

    let fetchs: Array<Response> = episode.characters.map((url) => fetch(url));

    let responses = await Promise.all(fetchs);

    let responseToJson = responses.map((response) => response.json());

    episode.characters = await Promise.all(responseToJson);

    return episode;
  };
  getLocation = async (id) => {
    let response: Response = await fetch(
      `https://finalspaceapi.com/api/v0/location/${id}`
    );
    let location = await response.json();

    let fetchs: Array<Response> = location.notable_residents.map((url) => fetch(url));

    let responses = await Promise.all(fetchs);

    let responseToJson = responses.map((response) => response.json());

    location.notable_residents = await Promise.all(responseToJson);

    return location;
  };
  
}
