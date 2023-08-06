import { Connect, connect } from "react-redux";
import styles from './Favorites.module.css';
import Card from '../Card/Card';

function Favorites({ myFavorites }) {
    return (
        <div className={styles.container}>
            {myFavorites?.map(({ id,
                name,
                status,
                species,
                gender,
                origin,
                image }) => (<Card 
                    id= {id}
                    name= {name} 
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin}
                    image={image} />))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)
