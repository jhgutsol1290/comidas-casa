const ctrl = {}
const Food = require('../models/Food')

ctrl.index = async (req, res) => {
    try {
        const food = await Food.find({})
                        .limit(5)
        res.render('index', {food})
    } catch (error) {
        res.status(500).json({
            ok: false,
            error
        })
    }
}

ctrl.create = async (req, res) => {
    const body = req.body
    const food = new Food()

    food.day = body.day
    food.breakfast = body.breakfast
    food.dinner = body.dinner

    try {
        await food.save()
        res.redirect('/api/food')
    } catch (error) {
        res.status(500).json({
            ok: false,
            error
        })
    }
}

ctrl.update = async (req, res) => {
    async (req, res)=>{
        const id = req.params.id
    
        try {
            const food = await Food.findById(id)
            food.done = !food.done
            await food.save()
            res.redirect('/api/food')
        } catch (error) {
            res.status(500).json({
                ok: false,
                error
            })
        }
    }
}

ctrl.delete = async (req, res) => {
    const id = req.params.id

    try {
        await Food.findByIdAndRemove(id)
        res.redirect('/api/food')
    } catch (error) {
        res.status(500).json({
            ok: false,
            error
        })
    }
}

module.exports = ctrl