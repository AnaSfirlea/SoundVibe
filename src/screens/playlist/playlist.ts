import { StackScreen } from "../../navigation/screensToStackScreen";
import Routes from "./routes";
import PlaylistBrowseScreen from "./playlistBrowseScreen";
const options = ({ route }) => ({ title: `Segment ${route.params.segmentID}` });

const Stack: StackScreen[] = [
  { name: Routes.BROWSE, component: PlaylistBrowseScreen, options },
];

export default Stack;
