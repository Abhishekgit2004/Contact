import Navigation from './component/Navigation/Navigation'
import Contact from './component/Contact'
import './App.css'
import ContactHeader from './component/ContactHeader/ContactHeader'
import ContacForm from './component/ContacForm/ContacForm'

function App() {

  return (
    <>
      <Navigation></Navigation>
      <main className='main_container'>
      <ContactHeader/>
      <ContacForm/>
      </main>
    </>
  )
}

export default App
