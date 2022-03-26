function upCheck(ri, ci) {

    element = map[ri][ci]

    ret = "no match found at " + (ri + 1) + ", " + (ci + 1)
    if (ri != 0) {
      if (element == map[ri - 1][ci]) { //above1
        if (ri != rowNum - 1) {
          if (element == map[ri + 1][ci]) {    //1 above + 1 below
            ret = "Match Found! above and below position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          }
        }
        if (ri != 1) {
          if (element == map[ri - 2][ci]) { //above2
            ret = "Match Found! 2 above position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          }
        }
      }

    }
    return ret
  }

  function downCheck(ri, ci) {

    element = map[ri][ci]
    ret = "no match found at " + (ri + 1) + ", " + (ci + 1)
    if (ri != rowNum - 1) {
      if (element == map[ri + 1][ci]) { //below1
        if (ri != rowNum - 2) {
          if (element == map[ri + 2][ci]) { //below2
            ret = "Match Found! 2 below position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          }
        }
      }

    }
    return ret
  }

  function leftCheck(ri, ci) {

    element = map[ri][ci]

    ret = "no match found at " + (ri + 1) + ", " + (ci + 1)
    if (ci != 0) {
      if (element == map[ri][ci - 1]) { //left1
        if (ci != 0) {
          if (element == map[ri][ci + 1]) {    //1 above + 1 below
            ret = "Match Found! left and right position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          }
        }
        if (ci != 1) {
          if (element == map[ri][ci - 2]) { //left2
            ret = "Match Found! 2 to left of  position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          }
        }
      }

    }
    return ret
  }

  function rightCheck(ri, ci) {

    element = map[ri][ci]
    ret = "no match found at " + (ri + 1) + ", " + (ci + 1)
    if (ci != columnNum) {
      if (element == map[ri][ci + 1]) { //right1
        if (ci != columnNum - 1) {
          if (element == map[ri][ci + 2]) { //right2
            ret = "Match Found! 2 to the right of x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          }
        }
      }

    }
    return ret
  }

  function check(ri, ci) {
    matches = ""

    up = upCheck(ri, ci)
    if (up.includes("no match found")) { } else { matches = matches + "\n" + up }
    down = downCheck(ri, ci)
    if (down.includes("no match found")) { } else { matches = matches + "\n" + down }
    right = rightCheck(ri, ci)
    if (right.includes("no match found")) { } else { matches = matches + "\n" + right }
    left = leftCheck(ri, ci)
    if (left.includes("no match found")) { } else { matches = matches + "\n" + left }

    if (matches == "") {
      matches = "no match found at " + (ri + 1) + ", " + (ci + 1)
    }
    return matches
  }
