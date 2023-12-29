import {Route, Switch} from 'react-router-dom'

import LoginPage from './Components/Login'
import Home from './Components/Home'
import JobSection from './Components/Jobs'
import AllJobsContent from './Components/AllJobs'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={JobSection} />
      <Route exact path="/jobs/id" component={AllJobsContent} />
    </Switch>
  </div>
)

export default App
