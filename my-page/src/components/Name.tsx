import { Component } from "react";
import styles from '../styles/App.module.css'

type NameType = ({ name: string })

export class Name extends Component<NameType>{
    render() {
        return (
            <div>
                <h2>
                    <i className={styles.textName}>Name:</i>
                    <div className={styles.text}>{this.props.name}</div>
                </h2>
            </div>
        )
    }
}