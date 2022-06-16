import React from 'react';

import { TextField } from './TextField';
const App: React.FC = () => {
  return <div>
    <TextField person={{firstName: '', lastName: ''}}/>
  </div>
}

export default App;