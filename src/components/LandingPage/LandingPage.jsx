import React from 'react';

const LandingPage = ({ history }) => {
  return (
    <div>
      <h1>My Tasks</h1>
      <p>Any Task, Any Goal. Get Organized, Get Things Done.</p>

      <button 
        type="button" 
        onClick={() => history.push('/signup')}
      >
        Sign Up
      </button>
      <button 
        type="button" 
        onClick={() => history.push('/login')}
      >
        Log In
      </button>
    </div>
  );
};

export default LandingPage;