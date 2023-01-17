import MobileButton from '../../components/buttons/mobile-buttons/mobile-button'
import Card from '../../components/card/card'
import styles from './not-found.module.css'

export default function NotFound() {

    const props = {
        text: 'Volver a inicio',
        url: '/',
    }

    return (
        <div className={styles.errorPage}>
            <Card>
                <>
                    <h1>Oh cielos!</h1>
                    <p>No hemos encontrado nada en esta ruta</p>
                    <MobileButton text={props.text} url={props.url}/>
                </>
            </Card>
        </div>
    )
}
