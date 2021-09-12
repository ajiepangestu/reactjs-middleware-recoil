const { atom } = require('recoil')

const authenticated = atom({
    key: 'authenticated',
    default: {
        check: true,
        user: {
            name: 'Ajie Pangestu'
        }
    }
})

export { authenticated }
