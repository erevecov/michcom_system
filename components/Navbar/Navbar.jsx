import { useState } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.scss'


const Navbar = () => {
    const [collapseNavbar, setCollapseNavbar] = useState('')

    const [collapseNavDropdown1, setCollapseNavDropdown1] = useState('')

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.navbarCustom}`}>
            <div className="container-fluid">
                <a className={styles['navbar-brand']} href="#">
                    <Image className="d-inline-block align-text-top" src="/img/logo_michcom.png" alt="me" width="150" height="50" />
                </a>

                <button onClick={()=> (collapseNavbar === '') ? setCollapseNavbar('show') : setCollapseNavbar('')} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${collapseNavbar}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/clients">Clientes</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                onClick={()=>(collapseNavDropdown1 === '') ? setCollapseNavDropdown1('show') : setCollapseNavDropdown1('')}
                                className={`nav-link dropdown-toggle ${collapseNavDropdown1}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className={`dropdown-menu ${collapseNavDropdown1} ${styles.dropdownMenuCustom}`} aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar