const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color;
    switch (status) {
      case "Complete":
        color = "rgb(178, 255, 102)";
        break;

      case "In progress":
        color = "rgb(250, 161, 25)";
        break;
      default:
        color = "rgb(255, 15, 15)";
    }
    return color;
  };
  return (
    <div
      className="status-display"
      style={{ backgroundColor: getColor(status) }}
    >
      {" "}
      {status}{" "}
    </div>
  );
};

export default StatusDisplay;
