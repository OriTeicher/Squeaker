export function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomColor(): string {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(
        16
    )}`

    return color
}

export function getCurrentDate(): string {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Sep',
        'Oct',
        'Nov',
        'December'
    ]
    const date = new Date()
    const day = date.getDate().toString().padStart(2, '0')
    const month = date.getMonth()

    const formattedDate = `${months[month - 1]} ${day}`
    return formattedDate
}

export function getInitials(fullName: string) {
    const nameParts = fullName.split(' ')
    const firstInitial = nameParts[0].charAt(0)
    const lastInitial = nameParts[nameParts.length - 1].charAt(0)
    const initials = `${firstInitial}${lastInitial}`
    return initials
}

export function generateId() {
    const keys = 'ABCDEFGHIJQLMNOP1234567890'
    let resId = ''
    for (let i = 0; i < 5; i++) {
        resId += keys[getRandomIntInclusive(0, keys.length - 1)]
    }
    return resId
}