import './index.css';
import { SearchIcon } from '@material-ui/icons';

function Header() {
  return(
    <header className="container">
      <div className="logo-area">
        <div className="logo-image"></div>
      </div>

      <div className="search--area">
        <div className="search--icon">

        </div>
        <input type="text" placeholder="Search..."/>
      </div>

      <div className="notification--area">

      </div>

      <div className="user--area">
        <div className="icon--area">

        </div>
        <div className="identify--user">
          <h1 className="user--name">Username</h1>
          <p className="user--occupation">Occupation</p>
        </div>
      </div>
      
    </header>
  )
}