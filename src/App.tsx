import axios from 'axios';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:8888'; // Get baseUrl from environment variable

const Comments = lazy(() => import('./pages/Comments'));

const App = () => (
  <Suspense fallback={<div>Loading ...</div>}>
    <BrowserRouter>
      <Switch>
        <Route path="/comments"><Comments /></Route>
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default App;
