import "./button.css";

export const Button = ({ label, funcionClick }) => {
  return (
    <button className="custom-button" onClick={funcionClick}>
      {label}
    </button>
  );
};
