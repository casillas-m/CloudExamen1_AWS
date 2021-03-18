const router = require('express').Router();

router.route("/autor").get((req,res)=>{
    res.json({
        alumno: "MCR",
        servicio: "ECS en AWS"
    })
})

module.exports = router;