import TicketCard from "./TicketCard";
import blankAvatar from "../images/blank-profile-pic.jpeg";

const AvatarDisplay = ({ ticket }) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img
          src={ticket.avatar ? ticket.avatar : blankAvatar}
          alt={"image of " + ticket.owner}
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;
