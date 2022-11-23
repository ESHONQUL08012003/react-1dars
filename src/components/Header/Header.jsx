import "../../styles/App.css"
import logo from "../../assests/svg/logo.svg"

export default function Header() {
  return (
   <>
   <header>
    <div className="container">
      <div className="header-info">
        <div>
          <a href={"#"}>
            <img src={logo} alt="" />
          </a>
        </div>

        <nav>
          <ul className='nav-list'>
            <li className="nav-item">
              <a className='nav-item-link' href={"#"}>Beranda</a>
            </li>
            <li className="nav-item">
              <a className='nav-item-link' href={"#"}>Koleksi</a>
            </li>
            <li className="nav-item">
              <a className='nav-item-link' href={"#"}>Syarat dan Ketentuan</a>
            </li>
            <li className="nav-item">
              <a className='nav-item-link' href={"#"}>Kontak</a>
            </li>
          </ul>

          <button className='header-btn'>Masuk</button>
        </nav>
      </div>
    </div>
   </header>
   </>
  )
}
