import React from 'react'

const BuggyPage = () => {
    let user = null;

  return (
    <div className="container">
        <h1>💥BuggyPage</h1> 

        <div className="card">
            <p>User Name: {user.name}</p>
        </div>
    </div>
  );
};

export default BuggyPage;

// (Error Boundary Demo)

//❌ you cannot read .name from null

// That's why BuggyPage throws error intentionally,just to test ErrorBoundary working.