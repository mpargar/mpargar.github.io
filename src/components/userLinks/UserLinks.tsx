import "./UserLinks.css";
import { mdiGithub, mdiLinkedin, mdiGmail, mdiTwitter } from "@mdi/js";
import Icon from "../icon/Icon";

const UserLinks = () => {
  return (
    <div className="UserLinks">
      <Icon href="https://github.com/mpargar" icon={mdiGithub} />
      <Icon
        href="https://www.linkedin.com/in/miguel-parra-garc%C3%ADa-479a21127/"
        icon={mdiLinkedin}
      />
			<Icon href="mailto:miguelparradev@gmail.com" icon={mdiGmail} />
      <Icon href="https://twitter.com/MiguelParGar" icon={mdiTwitter} />
    </div>
  );
};
export default UserLinks;
