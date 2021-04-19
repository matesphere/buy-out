export const genUsername = (firstName, lastName) =>
    [firstName.toLowerCase()[0], lastName.toLowerCase()]
        .join('')
        .concat(Math.floor(Math.random() * 99))

export const genPassword = () => 'abc' // TODO: password generator
