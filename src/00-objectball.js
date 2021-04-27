
const testName = "Alan Anderson";
const testTeam = "Brooklyn Nets";

class Team {
    constructor(teamName, colors, players = []) {
        this.teamName = teamName,
            this.colors = colors,
            this.players = players
    };
}
class PlayerStatObj {
    constructor(number, shoe, points, rebounds, assists, steals, blocks, slamDunks) {
        this.number = number,
            this.shoe = shoe,
            this.points = points,
            this.rebounds = rebounds,
            this.assists = assists,
            this.steals = steals,
            this.blocks = blocks,
            this.slamDunks = slamDunks
    }
}

function gameObject() {
    return {
        home: new Team("Brooklyn Nets", ["Black", "White"], {
            "Alan Anderson": new PlayerStatObj(0, 16, 22, 12, 12, 3, 1, 1),
            "Reggie Evans": new PlayerStatObj(30, 14, 12, 12, 12, 12, 12, 7),
            "Brook Lopez": new PlayerStatObj(11, 17, 17, 19, 10, 3, 1, 15),
            "Mason Plumlee": new PlayerStatObj(1, 19, 26, 12, 6, 3, 8, 5),
            "Jason Terry": new PlayerStatObj(31, 15, 19, 2, 2, 4, 11, 1)
        }),
        away: new Team("Charlotte Hornets", ["Turquoise", "Purple"], {
            "Jeff Adrien": new PlayerStatObj(4, 18, 10, 1, 1, 2, 7, 2),
            "Bismak Biyombo": new PlayerStatObj(0, 16, 12, 4, 7, 7, 15, 10),
            "DeSagna Diop": new PlayerStatObj(2, 14, 24, 12, 12, 4, 5, 5),
            "Ben Gordon": new PlayerStatObj(8, 15, 33, 3, 2, 1, 1, 0),
            "Brendan Haywood": new PlayerStatObj(33, 15, 6, 12, 12, 22, 5, 12)
        })
    }
}


const game = gameObject();

function findPlayer(playerName) {
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName]
        }
    }
}

function numPointsScored(playerName) {
    return findPlayer(playerName).points
}

function shoeSize(playerName) {
    return findPlayer(playerName).shoe
}

function teamColors(teamName) {
    for (const team in game) {
        return game[team].colors;
    }
}

function teamNames() {
    let names = []
    for (const team in game) {
        names.push(game[team].teamName)
    }
    return names;
}

function playerNumbers(targetTeamName) {
    for (const team in game) {
        let numbers = [];
        if (game[team].teamName === targetTeamName) {
            for (const player in game[team].players) {
                numbers.push(game[team].players[player].number);
            }
        }
        return numbers;
    }
}

function playerStats(playerName) {
    return findPlayer(playerName);
}

function bigShoeRebounds() {
    let biggestShoePlayer = undefined;
    for (const team in game) {
        for (const player in game[team].players) {
            const playerObj = game[team].players[player];
            if (biggestShoePlayer == undefined) {
                biggestShoePlayer = playerObj;
            } else if (biggestShoePlayer.shoe < playerObj.shoe) {
                biggestShoePlayer = playerObj
            }
        }
    }
    return biggestShoePlayer.rebounds;
}

//Bonus Functions

function mostPointsScored() {
    let mostPoints = 0;
    for (const team in game) {
        for (const player in game[team].players) {
            const playerObj = game[team].players[player];
            if (biggestShoePlayer == undefined) {
                biggestShoePlayer = playerObj;
            } else if (biggestShoePlayer.shoe < playerObj.shoe) {
                biggestShoePlayer = playerObj
            }
        }
    }
    return biggestShoePlayer.rebounds;
}

console.log(bigShoeRebounds());




