import React, { lazy, Suspense, useState } from 'react';
import './App.css';

const LoadLater = lazy(() => import('./Later'))

const App: React.FC = () => {
  const [loadLater, setLoadLater] = useState<boolean>(false)
  return (
    <div className="App">
      <button onClick={() => setLoadLater(true)}>
        Load Later
      </button>
      {loadLater &&
        <Suspense fallback="Loading...">
          <LoadLater />
        </Suspense>
      }
    </div>
  );
}

export default App;
