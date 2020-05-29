import React from 'react';

const LandingPage = (props) => {
  return (
    <div>
      <h1>My Tasks</h1>
      <p>Any Task, Any Goal.  Get Organized, Get Things Done.</p>

      <button type="button">Sign Up</button>
      <button type="button" onClick={() => props.history.push('/login')}>Log In</button>
    </div>
  );
};

export default LandingPage;