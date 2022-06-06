const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Habit {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.frequency = data.frequency
        this.goal = data.goal
        this.current = data.current
        this.completed = data.completed
        this.streak = data.streak
        this.startdate = data.startdate
        this.userId = data.userId
    }

    static get all() {
        return new Promise (async (res, rej) => {
            try {
                const db = await init()
                const habitsData = await db.collection('habits').find().toArray()
                const habits = habitsData.map(d => new Habit({ ...d, id: d._id }))
                res(habits);
            } catch (err) {
                console.log(err);
                rej("Error retrieving habits")
            }
        })
    }

    // Find with habit ID
    static findById(id) {
        return new Promise (async (res, rej) => {
            try {
                const db = await init();
                let habitData = await db.collection('habits').find({ _id: ObjectId(id) }).toArray()
                let habit = new Habit({...habitData[0], id: habitData[0]._id});
                res(habit);
            } catch(err) {
                rej('Habit not found')
            }
        })
    }
}

module.exports = Habit;
