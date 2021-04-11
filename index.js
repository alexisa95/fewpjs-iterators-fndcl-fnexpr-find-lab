function superbowlWin(dates) {
    let wins = dates.find(date => { return date.result === "W" })
    if (typeof wins != "undefined")
        return wins.year
}
