import styles from '../styles/App.module.css'
type BioType = { biography: string }

export function Bio(props: BioType) {
    return (
        <div className={styles.textStyle}>
            <h2>
                <i className={styles.textName}>Biography:</i> 
                <div className={styles.text}>{props.biography}</div>
            </h2>
        </div>
    )
}