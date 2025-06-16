
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </>
  )
}

export default App
