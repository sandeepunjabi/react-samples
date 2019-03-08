import React from 'react';

function Welcome(props) {
  const { isLoggedIn } = props;
  let button;

  if (isLoggedIn) {
    button = <button onClick={/*doLogout*/}>Logout</button>;
  } else {
    button = <button onClick={/*doLogin*/}>Login</button>
  }

  return (
    <div>
      <p>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</p>
      {button}
    </div>
  );
}

export default Welcome;
