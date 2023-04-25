import HttpAPI from "./httpAPI";

class BackendAPI extends HttpAPI {
  getBaseUrl(): string {
    return "http://192.168.1.9:8000/"; //192.168.1.9:8000 , 192.168.1.32:8000
  }

  // async login(username, password) {
  //   return this.post('api/login', { username, password });
  // }

  // async register(params) {
  //   return this.post('api/register', params);
  // }

  async processVideo(url, rotate, segmentID) {
    return this.post("api/process/video", { url, rotate, segmentID });
  }

  async playlists() {
    return this.get("api/playlists");
  }

  async createPlaylist(params) {
    return this.post("api/playlists", params);
  }

  async updateCurrentSegment(playlistID: number, segmentID: number) {
    return this.post(`api/playlists/${playlistID}`, { segmentID });
  }

  async segments() {
    return this.get("api/segments");
  }
}

export default BackendAPI;
