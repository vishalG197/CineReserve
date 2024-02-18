// Loading.js
import React from 'react';
import styled from "styled-components"
const Loading = () => {
  return (<Load>
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <p>Loading...</p>
      </div>
    </Load>
  );
};

export default Loading;

// Loading.css
const Load= styled.div`
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #333;
  border-top: 4px solid #ccc;
  border-radius: 50%;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}`
