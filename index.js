import app from './app.js'

// Start localhost
app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('111 Server OK')
})