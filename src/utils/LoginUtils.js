export const genUsername = (name) =>
    name
        .toLowerCase()
        .split(' ')
        .map((name, i) => {
            if (i === 0) {
                return name[0]
            } else {
                return name
            }
        })
        .join('')
        .concat(Math.floor(Math.random() * 99))

export const genPassword = () => 'abc' // TODO: password generator
