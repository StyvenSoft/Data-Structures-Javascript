function staircase(n, row = 0, string = "") {
    if (n === row) {
        return
    }
    if (n === string.length) {
        console.log(string)
        return staircase(n, row + 1)
    }

    const add = string.length <= row ? "#" : " "
    staircase(n, row, add + string)
}

staircase(5);

//     #
//    ##
//   ###
//  ####
// #####