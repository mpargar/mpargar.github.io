import Icon from "../icon/Icon";
import picture from "../../assets/img/UserPicture.png";
import "./UserProfilePicture.css";

const UserProfilePicture = () => {
  const handleOpenProfile = () => {
    console.log("user profile clicked");
  };
  return (
    <div className="UserProfilePicture">
      <Icon
        onClick={handleOpenProfile}
        src={picture}
        hoverEffect={false}
      ></Icon>
    </div>
  );
};

export default UserProfilePicture;
