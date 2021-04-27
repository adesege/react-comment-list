import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
