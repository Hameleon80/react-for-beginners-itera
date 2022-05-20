import { PureComponent } from "react";
import styles from '../styles/App.module.css'

class Footer extends PureComponent{
    render(){
        return(
            <footer className={styles.textFooter}>&copy; 2022 hameleon80</footer>
        )
    }
}

export default Footer