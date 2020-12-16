const express = require('express')

const router = express.Router()

// get all tv shows
router.get('/', (res, req) => {
  console.log('getting all tv')
})

module.exports = router
