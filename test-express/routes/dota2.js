const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const connectMongoDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/my_database')
  console.log('Connected to MongoDB...')
}
// connectMongoDB()

const Dota2 = require('../model/dota2.js')

const createHero = async () => {
  const data2 = new Dota2({
    name: 'abc',
    localized_name: 'Anti-Mage',
  })

  await data2.save()
}

const findAllHero = async () => {
  return await Dota2.find({})
}

const findOneHero = async (id) => {
  return await Dota2.findById(id)
}

const updateHero = async (filter, update) => {
  // const filter = { name: 'abc' }

  // const updateName = { name: 'xyz' }
  // const updateLocalizedName = {
  //   localized_name: 'Anti-Mage',
  // }
  // const update = { name: 'abc', localized_name: 'Anti-Mage' }
  return await Dota2.findOneAndUpdate(filter, update)
}

const deleteOne = async (filter) => {
  return await Dota2.deleteOne(filter)
}

router.get('/', async (req, res) => {
  try {
    Dota2.find({}, (err, heroes) => {
      res.status(200).json({
        resultCode: 20000,
        resultDescription: 'Success',
        resultData: {
          heroes,
        },
      })
    })
    // const heroes = await Dota2.find({})
    // res.status(200).json({
    //   resultCode: 20000,
    //   resultDescription: 'Success',
    //   resultData: {
    //     heroes,
    //   },
    // })
  } catch (error) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: 'Error',
      resultData: error.message,
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id: _id } = req.params

    Dota2.find({ _id }, (err, hero) => {
      if (err)
        res.status(404).json({
          resultCode: 40400,
          resultDescription: 'Not Found',
        })

      res.status(200).json({
        resultCode: 20000,
        resultDescription: 'Success',
        resultData: {
          hero,
        },
      })
    })
  } catch (error) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: 'Error',
      resultData: error.message,
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, localized_name } = req.body

    // const data2 = new Dota2({
    //   name,
    //   localized_name,
    // })
    // const result = await data2.save()
    // res.status(201).json({
    //   resultCode: 20100,
    //   resultDescription: 'Create',
    //   resultData: {
    //     result,
    //   },
    // })

    Dota2.findOne({ name }, (err, hero) => {
      const duplicate = hero
      if (duplicate) {
        res.status(409).json({
          resultCode: 40900,
          resultDescription: 'Duplicate',
        })
      } else {
        const createHero = Dota2.create(
          {
            name,
            localized_name,
            created: new Date(),
          },
          (err, done) => {
            res.status(201).json({
              resultCode: 20100,
              resultDescription: 'Create',
              resultData: {
                done,
              },
            })
          }
        )
      }
    })
  } catch (error) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: 'Error',
      resultData: error.message,
    })
  }
})

router.put('/', async (req, res) => {
  try {
    const { name, new_name } = req.body
    console.log(name)
    console.log(new_name)
    const filter = { name }
    const update = { name: new_name }

    Dota2.findOneAndUpdate(filter, update, function (err, updateHero) {
      const updateHero2 = updateHero
      console.log(updateHero2)
      res.status(200).json({
        resultCode: 20000,
        resultDescription: 'Success',
      })
    })
  } catch (error) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: 'Error',
      resultData: error.message,
    })
  }
})

router.delete('/', async (req, res) => {
  try {
    const { name } = req.body
    const filter = { name: name }
    Dota2.deleteOne(filter, (err, done) => {
      res.status(200).json({
        resultCode: 20000,
        resultDescription: `Delete Hero ${name}!!`,
      })
    })
  } catch (error) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: 'Error',
      resultData: error.message,
    })
  }
})

module.exports = router
