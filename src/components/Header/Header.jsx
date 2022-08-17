import React from "react";

function Header() {
  return (
    <div>
      <header className="App-header ">
        <div className="topbar ma flex-row justify-space-between align-items-center">
          <div className="w33 location">
            <p>283 N. Glenwood Street, Levittown, NY</p>
          </div>
          <div className="w33 announcement">
            <p>Best special offers every week! 40% Off!</p>
          </div>
          <div className="w33 action-buttons flex-row justify-center align-items-center">
            <div className="currency-converter">
              <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
              </select>
            </div>
            <div className="cart-icon">
              <img src="assets/cart-icon.svg" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
