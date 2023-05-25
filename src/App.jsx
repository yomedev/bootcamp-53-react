import { Link } from "./components/Link/Link";
import { ProfilesList } from "./components/ProfilesList";
import profilesJson from './data/users.json'


export const App = () => {
  console.log("App");
  return (
    <>
    <Link>Link</Link>
      <ProfilesList profiles={profilesJson} title='Profiles' />
    </>
  );
};
