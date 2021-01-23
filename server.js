const express = require('express')
const app = express()
const PORT = 3000

const characters = [
    {
        name: 'Yoda',
        role: 'Jedi Master',
        forcePoints: 10000,
        age: 900,
        avatar: 'data:image/jpeg;base64,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',
        routeName: 'yoda'
    },
    {
        name: 'Luke Skywalker',
        role: 'Jedi Knight',
        forcePoints: 5000,
        age: 40,
        avatar: 'data:image/jpeg;base64,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',
        routeName: 'lukeskywalker'
    },
    {
        name: 'Princess Leia',
        role: 'General',
        forcePoints: 1000,
        age: 40,
        avatar: 'data:image/jpeg;base64,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',
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

// /api/characters/:routeName - show individual character
app.get('/api/characters/:routeName', (req, res) => {
    const targetCharacter = req.params.routeName
    const character = characters.find(character => {
        return character.routeName === targetCharacter
    })
    res.json(character)
})
    
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})



