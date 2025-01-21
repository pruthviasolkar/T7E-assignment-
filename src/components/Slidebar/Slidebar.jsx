import React, { useState } from 'react';
import './slidebar.css';

const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`slidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="headslide">
          {/* Conditionally render the logoslide */}
          {isOpen && (
            <div className="logoslide">
              <img src="/logodash.png" alt="Logo" />
            </div>
          )}
          <button className="toggle-button" onClick={toggleSidebar}>
            <img src="/menuicon.png" alt="Toggle" />
          </button>
        </div>

        <ul className="menu">
        <li>
                            <img src="/collage.png" alt="Home" className="icon" />
                            {isOpen && <span>MLP Dashboard</span>}
                        </li>
                        <li>
                            <img src="/collage.png" alt="Profile" className="icon" />
                            {isOpen && <span>RLP Dashboard</span>}
                        </li>
                        <li>
                            <img src="/wrench.png" alt="Settings" className="icon" />
                            {isOpen && <span>View Mechanic</span>}
                        </li>
                        <li>
                            <img src="/people.png" alt="About" className="icon" />
                            {isOpen && <span>View Retailer</span>}
                        </li>
                        <li>
                            <img src="/gasoline.png" alt="About" className="icon" />
                            {isOpen && <span>User Insights</span>}
                        </li>
                        <li>
                            <img src="/search-data.png" alt="About" className="icon" />
                            {isOpen && <span>SKU-wise Data</span>}
                        </li>
                        <li>
                            <img src="/graph.png" alt="About" className="icon" />
                            {isOpen && <span>Slab-based Consumption</span>}
                        </li>
                        <li>
                            <img src="/gift.png" alt="About" className="icon" />
                            {isOpen && <span>View Redemption</span>}
                        </li>
                        <li>
                            <img src="/expiry.png" alt="About" className="icon" />
                            {isOpen && <span>View Expiry</span>}
                        </li>
                        <li>
                            <img src="/mobile.png" alt="About" className="icon" />
                            {isOpen && <span>View E-Transfer</span>}
                        </li>
                        <li>
                            <img src="/ticket.png" alt="About" className="icon" />
                            {isOpen && <span>View Transaction</span>}
                        </li>
                        <li>
                            <img src="/collage.png" alt="About" className="icon" />
                            {isOpen && <span>Rewards Catalogue</span>}
                        </li>
                        <li>
                            <img src="/people.png" alt="About" className="icon" />
                            {isOpen && <span>User Activity</span>}
                        </li>
                        
        </ul>
      </div>
    </div>
  );
};

export default Slidebar;
