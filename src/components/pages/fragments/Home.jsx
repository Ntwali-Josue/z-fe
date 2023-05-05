/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Alert from '../../shared/Alert';
import image from '../../../assets/images/home-logo.svg';

function Home({ alert: defaultAlert }) {
  const [alert] = useState(defaultAlert);
  const [showAlert, setShowAlert] = useState(true);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className="bg-white py-3">
      {(showAlert && alert) && (<Alert info={alert} handleCloseAlert={handleCloseAlert} />)}
      <div className="flex justify-between">
        <div>
          <img src={image} alt="home-logo" className="" />
        </div>
        <div className="d-flex flex-column home_content p-4">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolor! Sunt officiis nesciunt accusantium iusto dolor, soluta temporibus rem dignissimos praesentium commodi vel cum exercitationem sapiente inventore corporis reprehenderit? Nobis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolor! Sunt officiis nesciunt accusantium iusto dolor, soluta temporibus rem dignissimos praesentium commodi vel cum exercitationem sapiente inventore corporis reprehenderit? Nobis.</p>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolor! Sunt officiis nesciunt accusantium iusto dolor, soluta temporibus rem dignissimos praesentium commodi vel cum exercitationem sapiente inventore corporis reprehenderit? Nobis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolor! Sunt officiis nesciunt accusantium iusto dolor, soluta temporibus rem dignissimos praesentium commodi vel cum exercitationem sapiente inventore corporis reprehenderit? Nobis.</p>
        </div>
      </div>
    </div>
  );
}

Home.defaultProps = {
  alert: {
    type: 'info',
    message: 'Welcome to ZPLATFOM. Continue enjoying our services',
  },
};

export default Home;
