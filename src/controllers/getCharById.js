const axios = require('axios');
const API_Key = "henrym-djoel95";
const URL = "https://rym2-production.up.railway.app/api/character/"



const getCharById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios.get(`${URL}${id}?key=${API_Key}`)
        const { status, name, species, origin, image, gender } = response?.data || {}
        const character = { id, status, name, species, origin, image, gender }
        return character.name ? res.status(200).json(character) : res.status(404).json({ error: "Not Found" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    } 

}

module.exports = getCharById;

