function player( arr ) {
    let trackId = arr[0];
    let artistId = arr[1];
    let duration = arr[2];

    return `Now Playing: ${artistId} - ${trackId} [${duration}]`
}

console.log(player(['Number One', 'Nelly', '4:09']));