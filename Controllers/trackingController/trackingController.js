import { v4 as uuid_v4 } from "uuid";
import Strategy from '../../models/strategy'

const createSleepTime = async (req, res) => {
    const { user_id, sleeping_time, walk_time: walkup_time } = req.body
    const Startegy = new Strategy({
        sleep_id: uuid_v4(), user_id, sleeping_time, walkup_time, current_date: '54444',
    })
    const response = await Startegy.save();
    if (response) {
        return res.status(201).json(response)
    } else {
        return res.status(500).send("some thing went wrong")
    }
}

const getTimeSleepByUserId = async (req, res) => {
    const strategy = await Strategy.find({ user_id: '54455555' }).limit(2)
    console.log(`strategy`, strategy)
}

export {
    createSleepTime,
    getTimeSleepByUserId
}