//

const myData = {
    demian: {
        age: 24,
        eyeColor: 'brown',
        hairColor: 'chestnut',
        height: 188 + 'cm',
        weight: 92 + 'kg',
        isTheSupremeCyberlord: false,
        greetMe(name) {
            console.log(`Hello ${name}`)
        }
    }
}
myData.demian.greetMe('Demian')

//

const usersData = [
    {
        userName: 'Sam',
        isAdmin: false
    },
    {
        userName: 'Ray',
        isAdmin: true
    },
    {
        userName: 'Max',
        isAdmin: false
    },
    {
        userName: 'Lee',
        isAdmin: true
    }
]
let notAnAdmin = 0
for (h = 0; h < usersData.length; h++) {
    if (usersData[h].isAdmin) {
        notAnAdmin++
    }
}
console.log(notAnAdmin)


