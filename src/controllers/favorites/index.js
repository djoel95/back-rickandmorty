let myFavorites = [];

export const postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character);
    return res.status(201).json(myFavorites);
}

export const deleteFav = (req, res) => {
    const id = req.params.id;
    myFavorites = myFavorites.filter(character => character.id !== id);
    return res.status(200).json(myFavorites);
}
