import { Link, Links, useActionData, useLocation } from "react-router-dom";
import styles from './ResultPage.module.css'
import { ROUTES } from "./const";
import Result from "../components/Result/Result";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";

export default function ResultPage() {
    const [active, setActive] = useState(false);
    const location = useLocation();
    const { maxQuizLen, correctNumLen } = location.state || {};

    useEffect(() => {
        setTimeout(() => setActive(true), 3000);
    },[])

    return (
    <>
    <Loading active={active} />
        <h1>Result</h1>
        <div className={styles.ResultPage}>
        <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen}></Result>
            <br />
        </div>
        )}
    </>
    )
}