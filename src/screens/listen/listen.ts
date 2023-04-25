import { StackScreen } from "../../navigation/screensToStackScreen";
import Routes from "./routes";
import ListenDetailScreen from "./listenDetailScreen";
const options = ({ route }) => ({ title: `Segment ${route.params.segmentID}` });

const Stack: StackScreen[] = [
  { name: Routes.DETAIL, component: ListenDetailScreen, options },
];

export default Stack;
