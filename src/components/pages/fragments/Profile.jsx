/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Outlet, Link, useLocation,
} from 'react-router-dom';
// import { Button } from '../../shared/Elements';
import { BsPersonFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import useGlobalState from '../../../hooks/useGlobalState';

export default function Profile() {
  const location = useLocation();
  const pathname = location?.pathname;
  const { appState: { user } } = useGlobalState();
  const [userInfo, setUserInfo] = useState(user);
  const photo = userInfo?.profile?.photo;
  const firstName = userInfo?.profile?.first_name;
  const lastName = userInfo?.profile?.last_name;
  const userRole = userInfo.role === '1.0.0' ? 'User' : 'Admin';
  const avatar = (firstName || lastName) ? `${firstName[0]}${lastName[0]}`.toUpperCase() : <BsPersonFill />;
  const name = (firstName && lastName) ? `${firstName} ${lastName}`.toUpperCase() : user.email.split('@')[0];
  useEffect(() => { setUserInfo(user); }, [user, pathname]);

  return (
    <div className="profile-container mt-4">
      <div className="d-flex flex-column flex-md-row">
        <div className="d-flex flex-column col-md-3 col-12 j-c-left">
          <div className="d-flex flex-column j-c-left-inner justify-content-center align-items-center">
            <div className="profile-img-container mt-5">
              {photo ? (
                user?.account_verified === 'VERIFIED' && (
                <div>
                  <img className="relative inline-flex items-center w-full h-full text-sm font-medium text-center text-white rounded-xl profile-image" src={photo} alt="profile" />
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -bottom-0 -right-0">
                    <GoVerified />
                  </div>
                </div>
                )
              ) : (
                <div className="profile-image d-flex justify-content-center align-items-center">
                  <span>{avatar}</span>
                </div>
              )}
            </div>
            <div className="py-3">
              <h5>{name}</h5>
            </div>
          </div>
          <div className="edit-profile pb-5">
            <Link to="/profile" className={`btn-1 ${pathname === '/profile' && 'active'} py-2`}>Profile info</Link>
            <Link to="/profile/edit" className={`btn-1 ${pathname === '/profile/edit' && 'active'} py-2`}>Edit profile</Link>
            <Link to="/profile/settings" className={`btn-1 ${pathname === '/profile/settings' && 'active'} py-2`}>Settings</Link>
            {
              (userRole === 'User' && user?.account_verified === 'UNVERIFIED') && (
                <Link to="/profile/verify" className={`btn-1 ${pathname === '/profile/settings' && 'active'} py-2`}>Verification</Link>
              )
            }
          </div>
        </div>
        <div className="d-flex col-md-9 col-12 j-c-right">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export function ProfileInfo() {
  const { appState: { user } } = useGlobalState();
  // const navigate = useNavigate();
  const [age] = useState(user?.profile?.age || undefined);
  const [dbf] = useState(user?.profile?.date_of_birth || undefined);
  const [gender] = useState(user?.profile?.gender || undefined);
  const [mStatus] = useState(user?.profile?.marital_status || undefined);
  const [nationality] = useState(user?.profile?.nationality || undefined);

  return (
    <div className="d-flex w-100 j-c-right-inner p-5">
      <div className="d-flex w-100 flex-column">
        <h6 className="mb-3">Profile Information</h6>
        <hr />
        <div className="grid grid-cols-3 gap-y-5 mt-4">
          <div>
            <span>
              <p className="text-blue-500 underline font-bold">Email: </p>
              {user?.email}
            </span>
          </div>
          <div>
            <span>
              <p className="text-blue-500 underline font-bold">Gender: </p>
              {gender || 'N/A'}
            </span>
          </div>
          <div>
            <span>
              <p className="text-blue-500 underline font-bold">Age: </p>
              {age || 'N/A'}
            </span>
          </div>
          <div>
            <span>
              <p className="text-blue-500 underline font-bold">Date of birth: </p>
              {dbf || 'N/A'}
            </span>
          </div>
          <div>
            <span>
              <p className="text-blue-500 underline font-bold">Marital status: </p>
              {mStatus || 'N/A'}
            </span>
          </div>
          <div>
            <span>
              <p className="text-blue-500 underline font-bold">Nationality: </p>
              {nationality || 'N/A'}
            </span>
          </div>
          <div>
            <span>
              <p className="text-blue-500 underline font-bold">ID/PASSPORT NUMBER: </p>
              {user?.profile?.n_id || 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
