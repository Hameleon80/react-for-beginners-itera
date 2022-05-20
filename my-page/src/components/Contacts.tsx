import { FC } from "react";
import styles from '../styles/App.module.css'

type ContactsType = { email: string, phone: string };

export const Contacts: FC<ContactsType> = (props) => {
    return (
        <div className={styles.textStyle}>
            <h2>
                <i className={styles.textName}>Contacts:</i>
                <div className={styles.text}>Email: {props.email}</div>
                <div className={styles.text}>Phone: {props.phone}</div>
            </h2>
        </div>
    )
}