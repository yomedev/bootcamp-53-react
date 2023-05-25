import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";
import styled from "styled-components";
import {FaReact} from 'react-icons/fa'
import defaultAvatar from "../../images/user.png";
import styles from "./Profile.module.css";

const Image = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  width: 50px;
`;

const SquereImage = styled(Image)`
 border-radius: 0; 
`

const Status = styled.p`
  font-size: 14px;
  font-weight: 800;
  color: ${(props) => props.isOnline ? 'blue' : 'red'};
`;

export const Profile = ({ firstName, lastName, isOnline, email, image }) => {
  console.log(styles.base);

  return (
    <>
      {[].map((item) => (
        <div key={item}>{item}</div>
      ))}
      <SquereImage src={image || defaultAvatar} alt={`${firstName} ${lastName}`} />
      <p>{firstName + " " + lastName}</p>
      {/* <p
        className={classNames(styles.base, {
          [styles.online]: isOnline,
          [styles.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p> */}
      <Status isOnline={isOnline}>{isOnline ? "Online" : "Offline"}</Status>
      <a href="/" className={styles.link}>
        {email}
      </a>
      <FaReact />
    </>
  );
};

const key = "name";

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
