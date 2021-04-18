import { useState } from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footerCustom}>
            <div className="row">
                <div className="col-md-3">
                    <Image className="d-inline-block align-text-top" src="/img/logo_michcom.png" alt="me" width="150" height="50" />
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    © Copyright Michcom Ltda. Reservados todos los derechos.
                </div>
            </div>
        </div>
    )
}

export default Footer