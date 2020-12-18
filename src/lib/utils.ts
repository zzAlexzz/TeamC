/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 * refer to: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
import { Data } from '../../App';

export function shuffle(arrData: string[]): string[] {
    if (arrData.length === 0) return [];

    const arr = [...arrData]; // no change input parameter

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export function processData(users: string[]): Data {
    const newUsers = shuffle(users);
    const newTeam1 = [];
    const newTeam2 = [];

    for (let i = 0; i <= newUsers.length -1; i ++) {
        if ((i + 1) % 2) {
            newTeam1.push(newUsers[i]);
        } else {
            newTeam2.push(newUsers[i]);
        }
    }

    return {
        users: newUsers,
        team1: newTeam1,
        team2: newTeam2,
    };
}
