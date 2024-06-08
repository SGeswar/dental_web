import '../App.css'

const Popup = ({ isOpen, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="popup-overlay">
        <div className="popup-content">{children}</div>
      </div>
    );
  };
  
  export default Popup;
  