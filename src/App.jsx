import './App.css'
import ContactList from './components/ContactList'
import Header from './components/Header'
import ContactDetail from './components/ContactDetail'
import contacts from './data/contact'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="featured-contact">
          <ContactDetail contact={contacts[0]} />
        </div>
        <div className="contact-list-container">
          <ContactList contacts={contacts} />
        </div>
      </main>
    </div>
  )
}

export default App
