import React from 'react'; 
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom'; 

const boxStyle = { 
  border: '1px solid #ddd', 
  borderRadius: '8px', 
  padding: '20px', 
  margin: '20px',  
  boxShadow: '0 0 10px rgba(0,0,0,0.1)', 
};

const headingStyle = { 
  fontSize: '1.5rem',  
  marginBottom: '10px', 
};

const paragraphStyle = { 
  marginBottom: '8px', 
};


const VersionComponent = ({ version }) => ( 
  <div style={boxStyle}> 
    <h1 style={headingStyle}>Git Updates</h1> 
    <div style={paragraphStyle}> 
      <p><strong>Commit:</strong> {process.env.GIT_COMMIT}</p> 
      <p><strong>Version:</strong> {version}</p> 
      <p><strong>Branch:</strong> {process.env.GIT_BRANCH}</p> 
      <p><strong>Build Time:</strong>  {process.env.BUILD_TIME}</p>    </div> 
  </div> 
); 

function App() {
  const version = process.env.GIT_VERSION || 'Unknown Version';   
 
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Navigate to="/version" replace />} /> 
        <Route path="/version" element={<VersionComponent version={version} />} /> 
      </Routes> 
    </Router> 
  ); 
}

export default App;
