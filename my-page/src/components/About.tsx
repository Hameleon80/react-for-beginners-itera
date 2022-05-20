import { Bio } from "./Bio";
import { Contacts } from "./Contacts";
import Footer from "./Footer";
import { Name } from "./Name";
import { aboutMeUa, aboutMeEn } from '../store/data';
import styles from '../styles/App.module.css';
import { useParams } from "react-router-dom";

export function About() {
    const { ln } = useParams();
    const aboutMe = ln === 'en' ? aboutMeEn : aboutMeUa;

    return (
        <div className={styles.App}>
            <Name name={aboutMe.name} />
            <Bio biography={aboutMe.biography} />
            <Contacts email={aboutMe.email} phone={aboutMeUa.phone} />
            <Footer />
        </div>
    )
}