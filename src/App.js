import { useEffect, useState } from 'react';
import { Start } from './components/Start';

import { getScrollPercent } from './exports/scroll'

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
      <Start />
    </div>
  );
}

export default App;
