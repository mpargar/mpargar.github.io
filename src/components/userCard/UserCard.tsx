import UserProfilePicture from "../userProfilePicture/UserProfilePicture";
import "./UserCard.css";
import UserLinks from "../userLinks/UserLinks";

const UserCard = () => {
  return (
    <div className="UserCard">
      <UserProfilePicture />
      <div className="UserCardData">
        <h1>Miguel Parra García</h1>
        <h2>Software Developer</h2>
				<UserLinks />
      </div>
    </div>
  );
};
export default UserCard;
