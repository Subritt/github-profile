import React from "react";

import Router from 'components/Router';

import 'assets/css/style.css';

function App() {
  useEffect(() => {
    document.title = myInfo.firstName + ' ' + myInfo.lastName;
  }, []);

  return (
    <Router />
  );
}

export default App;
