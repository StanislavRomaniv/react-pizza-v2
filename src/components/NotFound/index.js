import smile from '../../assets/images/sad_face.png';
import styles from './styles.module.scss'

const NotFound = () => {
    return (
        <div className={styles.container}>
            <img src={smile} alt={smile} className={styles.img} />
            <h2 className={styles.header}>No such page</h2>
            <p className={styles.descr} >Unfortunetely, we haven`t page you`re looking for in our shop</p>
        </div>
    );
}

export default NotFound;