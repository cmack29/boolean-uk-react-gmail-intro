import './App.css'
import Article from './components/Article'
import EmailToolbar from './components/EmailToolbar'
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import Main from './components/Main'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftSidebar />
      <Main />
      <EmailToolbar />
      <Article />
      
      
    </div>
  )
}

export default App
