const bad_request = (error, req, res, next) => {
    console.log(error)
    if (error.status == 400) {
        return res.status(400).json({
            success: false,
            response: error,
            message: 'Bad request: The parameter was not found or is invalid.'
        })
    }
    next(error)
}
export default bad_request