import React from "react";
import PropTypes from 'prop-types'

const UserInfo = ({userinfo}) => (
  <div className="UserInfo">
    <img alt='avatar' src={userinfo.avatar_url} />
    <h1>
      <a href={userinfo.html_url}>{userinfo.name}</a>
    </h1>

    <ul className="ReposInfo">
      <li>- Repositórios: {userinfo.public_repos}</li>
      <li>- Seguidores: {userinfo.followers}</li>
      <li>- Seguindo: {userinfo.following}</li>
    </ul>
  </div>
);

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo;
