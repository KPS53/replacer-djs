/**
 * github.com/KPS53
 * @param {string} data [String which contains the values that have to be replaced]
 * @param {object} replaced [Object which has one or several key(s) (to be replaced) and their value (replaced by)]
 *
 *
 */

function replace(data, replaced) {
    if (!data) throw Error(`You must provide a data.`);
    if (!replaced) throw Error(`You must provide a replaced object.`)
    for (w in replaced) {
        data = data.replace(data, replaced[w])
    }
    return data
}

module.exports = replace
