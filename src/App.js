import { useEffect, useState } from 'react';

import { getScrollPercent } from './exports/scroll'
import { Home } from './components/Home';

const App = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(getScrollPercent())
    })

    return () => {
      document.removeEventListener('scroll', () => {
        getScrollPercent();
      });
    }
    
  }, [scroll])

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
