import PropTypes from "prop-types";
import { Profile } from "./Profile/Profile";

export const ProfilesList = ({ profiles, title }) => {
  return (
    <>
      {title && <h3>{title}</h3>}
      <ul>
        {profiles?.map((profile) => (
          <li key={profile.id}>
            <Profile {...profile} />
          </li>
        ))}
      </ul>
    </>
  );
};

ProfilesList.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      isOnline: PropTypes.bool,
      email: PropTypes.string,
      phone: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
};
