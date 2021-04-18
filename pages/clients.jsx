import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/ClientsPage/ClientsPage.module.scss'

function ClientsPage() {
    const [searchInTableValue, setSearchInTableValue] = useState('')

    return (
        <div className={`table-responsive ${styles.clientsPageCustom}`}>
            <div className="row">
                <div className="col-md-3">
                    <div className="d-grid gap-2 d-md-block">
                        <button type="button" className="btn btn-primary btn-prim"><FontAwesomeIcon icon={faUserPlus} /> Nuevo Cliente</button>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <div className="mb-3 row">
                        <label htmlFor="filterInTable" className="col-1 col-form-label"><FontAwesomeIcon icon={faFilter} /></label>
                        <div className="col-11">
                            <select onChange={(el)=> setSearchInTableValue('')/*console.log(el.target.value)*/} className="form-select" id="filterInTable">
                                <option value="rut">Rut</option>
                                <option value="business_name">Razón social</option>
                                <option value="email">Email</option>
                                <option value="phone">Teléfono</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="mb-3 row">
                        <label htmlFor="searchInTable" className="col-1 col-form-label"><FontAwesomeIcon icon={faSearch} /></label>
                        <div className="col-11">
                            <input onChange={(el)=> setSearchInTableValue(el.target.value)} value={searchInTableValue} type="text" className="form-control" id="searchInTable" placeholder="Buscar" />
                        </div>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Rut</th>
                        <th>Razón Social</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://.../data`)
//     const data = await res.json()

//     // Pass data to the page via props
//     return { props: { data } }
// }

export default ClientsPage