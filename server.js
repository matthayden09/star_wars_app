const express = require('express')
const app = express()
const PORT = 3000

const characters = [
    {
        name: 'Yoda',
        role: 'Jedi Master',
        forcePoints: 10000,
        age: 900,
        avatar: '',
        routeName: 'yoda'
    },
    {
        name: 'Luke Skywalker',
        role: 'Jedi Knight',
        forcePoints: 5000,
        age: 40,
        avatar: '',
        routeName: 'lukeskywalker'
    },
    {
        name: 'Princess Leia',
        role: 'General',
        forcePoints: 1000,
        age: 40,
        avatar: '',
        routeName: 'princessleia'
    }
]

app.get('/', (req, res) => {
    res.send('May the Force be with you')
})

// /api/characters - show all character data
app.get('/api/characters', (req, res) => {
    res.json(characters)
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})