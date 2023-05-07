/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

function ProfilePic({ user: { profile, account_verified }, width, height }) {
  const profileIcon = profile?.first_name ? `${profile?.first_name[0]}${profile?.last_name[0]}`.toLocaleUpperCase() : <BsPersonFill />;
  const [photo, setPhoto] = useState(profile?.photo);

  const handleLoadImageError = () => {
    setPhoto(undefined);
  };

  return (
    <div
      className="d-block profile-pic link-dark text-decoration-none"
      id="dropdownUser1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {photo ? (
        account_verified === 'VERIFIED' && (
        <div>
          <img alt="mdo" width={width} height={height} onError={handleLoadImageError} className="relative inline-flex items-center text-sm font-medium text-center text-white rounded-xl rounded-circle" src={photo} />
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full right-16 top-9">
            <GoVerified size={10} />
          </div>
        </div>
        )
      ) : (
        <div style={{ width, height }} className="rounded-circle profile-pic-n-p d-flex justify-content-center align-items-center">
          <strong>{profileIcon}</strong>
        </div>
      )}
    </div>
  );
}

ProfilePic.defaultProps = {
  width: 32,
  height: 32,
};

export default ProfilePic;
