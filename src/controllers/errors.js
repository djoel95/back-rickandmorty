module.exports = (res, error) => {
    const { response } = error

    if (response) {
        const { status, data } = response;
        const statusCode = status ? status : 404
        const errorMesage = data.error ? data.error : 'Not found'
        res.status(statusCode).send(errorMesage)
    } else {
        res.status(500).send('Internal Server Error')

        return res.status(response.status).json(response.data)
    }
    res.status(error.status || 500).json({ error: error.message });
};
    
