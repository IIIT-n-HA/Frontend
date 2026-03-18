import React from 'react';

function App() {
  // Vulnerability for Task 5: Hardcoded sensitive info
  const api_key = "AIzaSyB-DUMMY-KEY-12345"; 
  
  return (
    <div>
      <h1>Security Testing Frontend</h1>
      <p>This is a dummy app for CI/CD integration.</p>
    </div>
  );
}

export default App;
