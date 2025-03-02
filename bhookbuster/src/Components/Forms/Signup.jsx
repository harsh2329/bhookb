import React from 'react'
import { useState } from 'react'

const Signup = () => {

  const [userType, setUserType] = useState('user');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    // Restaurant specific fields
    restaurantName: '',
    address: '',
    phone: '',
    cuisineType: '',
    openingHours: '',
    description: ''
  });
 
  return (
    <div>
      <div className="auth-container">
        <div className="auth-card">
        <div className="user-type-selector">
          {['User', 'Restaurant'].map(type => (
            <button   className={`user-type-btn  ${userType === type ? 'active' : ''} `}
            onClick={() => setUserType(type)}  type="button">{type}</button>
          ))}
        </div>
    </div>

    <form >
      <div className="form-group">
      <label className="form-label">FULL NAME</label>
      <input type="text" placeholder="Full Name" className="form-input" />
      </div>

      <div className="form-group">
        <label className="form-label">EMAIL ADDRESS</label>
        <input type="text" placeholder="Email" className="form-input" />
      </div>

      <div className="form-group">
        <label className="form-label">PASSWORD</label>
        <input type='password' placeholder="Password" className="form-input" />
      </div>

      {userType === 'Restaurant' && (
        <div className="auth-form">
        <div className="form-group">
          <label className="form-label">RESTAURANT NAME</label>
          <input type="text" placeholder="Restaurant Name" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">RESTAURANT ADDRESS</label>
          <input type="text" placeholder="Restaurant Address" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">RESTAURANT PHONE</label>
          <input type="text" placeholder="Restaurant Phone" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">CUISNE TYPE</label>
          <input type="text" placeholder="Cuisine Type" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">OPENING HOURS</label>
          <input type="text" placeholder="Opening Hours" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">CLOSING HOURS</label>
          <input type="text" placeholder="Closing Hours" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">DESCRIPTION</label>
          <input type="textarea" height="3" placeholder="Description" className="form-input" />
        </div>
        </div>
      )}

    </form>

    </div>
    </div>
  )

}

export default Signup
