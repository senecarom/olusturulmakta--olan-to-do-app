import { FaPlus } from "react-icons/fa";
import styles from "./FloatingButton.module.css"

const FloatingButton = ({openModal})=>{


    return(
        <button className={styles.floatingButton} onClick={openModal}>
            <FaPlus />
        </button>
    )
}

export default FloatingButton