import './App.css';
import {connect} from 'react-redux';
import SearchBar from './components/SearchBar/SearchBar'
import Results from './components/Results/Results';
import BookModal from './components/Results/BookModal/BookModal';
import {closeModal} from './redux/reducer';

function App({isError, errorMessage, isModalOpen, book, closeModal}) {
  return (
    <div>
      <SearchBar/>
      {
      isError && 
        <div className="error">
          {errorMessage}
        </div>
      }
      <Results/>
      {
        isModalOpen && book &&
        <BookModal {...book} closeModal={closeModal}/>
      }
    </div>
  )
}

const mapStateToProps = (store) => (
  {
    isError: store.isError,
    isModalOpen: store.isModalOpen,
    book: store.book,
    errorMessage: store.errorMessage
  }
)

export default connect (mapStateToProps, {closeModal})(App);
