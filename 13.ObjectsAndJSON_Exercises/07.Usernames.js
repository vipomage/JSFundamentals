function userNames(strArr) {
    let out = new Map();

    for (let name of strArr) {
        out.set(name, name.length)
    }
    for (let name of [...out].sort((a, b) => {
        if (a[1] !== b[1]) {
            return (a[1] - b[1]);
        } else {
            return a[0].localeCompare(b[0]);
        }
    })) {
        console.log(name[0]);
    }
}

userNames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);
userNames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);