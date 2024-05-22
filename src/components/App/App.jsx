import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
