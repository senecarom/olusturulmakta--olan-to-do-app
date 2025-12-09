import { FaPlus } from "react-icons/fa";
import styles from "./FloatingButton.module.css"

const FloatingButton = ({onAddModalOpen})=>{

    
    return(
        <button className={styles.floatingButton} onClick={onAddModalOpen}>
            <FaPlus />
        </button>
    )
}

export default FloatingButton