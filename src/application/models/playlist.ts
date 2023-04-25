import SongData from "./song";

interface PlaylistData {
  id: number;
  startPoint: string;
  endPoint: string;
  currentSong: SongData;
  // trip: RoadSegmentData[];
}

export default PlaylistData;
