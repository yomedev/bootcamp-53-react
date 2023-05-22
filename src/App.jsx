import { Link } from "./components/Link";
import { Profile } from "./components/Profile";

export const App = () => {
  return (
    <>
      <Profile name="Bob" isOnline />
      <Profile name="Jhon" />
      <Link data={{ name: "Bob" }}>Home</Link>
      <br />
      <Link href="/contacts">Contacts</Link>
      <br />
      <Link href="/about">About</Link>
    </>
  );
};

// Link({href: "/"})
