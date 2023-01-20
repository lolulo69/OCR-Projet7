import React from 'react';
import { textList } from '../datas/textList';
import TextSlider from './TextSlider';

/**
 * Ce composant affiche une liste de composants `TextSlider` à partir d'un tableau de données importées.
 * Il utilise la fonction `map()` pour parcourir le tableau et créer un composant `TextSlider` pour chaque entrée.
 * Il utilise également un `React.Fragment` pour contenir tous les composants `TextSlider` enfants sans ajouter de noeud supplémentaire à l'arbre de rendu.
 */
function AboutTextSliders() {
    return (
        <React.Fragment>
            {textList.map((item) => (
                <TextSlider
                    key={item.title}
                    page="about"
                    title={item.title}
                    text={item.text}
                />
            ))}
        </React.Fragment>
    );
}

export default AboutTextSliders;
