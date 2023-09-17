const router = require('express').Router()
router.get('/',(req, res) => {
    res.status(200).send("Hello World!");
})

router.get('/get-data',(req, res)=>{
    const responseData = {
        message: 'This is a GET request to /api/data',
        data: [1, 2, 3, 4, 5],
    };

    res.json(responseData);
})

module.exports = router
