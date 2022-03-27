//ret = {"message":"","elements":["r1c1","fd"],"type":"standard"}
//"type": = Party(5), RowHor (4), RowVert(4), Square( 2x2.), Standard (3s)

//every ret display is in Countable/user friendly. (aka gotta subtract one for computer use. )
function upCheck(ri, ci) {
  //gets value at ri,ci
  element = map[ri][ci]
  //defaults to no match. 
  ret = { "message": "", "elements": [], "type": "" }
  ret.message = "no match found at " + (ri + 1) + ", " + (ci + 1)
  if (ri != 0) { //row is not topmost
    if (element == map[ri - 1][ci]) { //does directly above match? 
      if (ri != rowNum - 1) { //row is not bottom row. 
        if (element == map[ri + 1][ci]) {    //does directly below match? 
          ret.message = "Match Found! above and below position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          ret.type = "Standard"
          ret.elements.push({ "row": `${ri}`, "column": `${ci}` })
          ret.elements.push({ "row": `${ri - 1}`, "column": `${ci}` })
          ret.elements.push({ "row": `${ri + 1}`, "column": `${ci}` })
        }
      }
      if (ri != 1) { //is there room to go up from [Element] by two?
        if (element == map[ri - 2][ci]) { //does up 2 match element?
          ret.message = "Match Found! 2 above position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          ret.elements.push({ "row": `${ri}`, "column": `${ci}` })
          ret.elements.push({ "row": `${ri - 1}`, "column": `${ci}` })
          ret.elements.push({ "row": `${ri - 2}`, "column": `${ci}` })
          ret.type = "Standard"
          if (ri != 2) { //is there room to go up from [Element] by three?
            if (element == map[ri - 3][ci]) { //does up 3 match element?
              ret.message = "Match Found! 3 above position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
              ret.type = "RowVert"
              ret.elements.push({ "row": `${ri - 3}`, "column": `${ci}` })
            }
          }
        }

      }
    }

  }
  return ret
}

function downCheck(ri, ci) {

  element = map[ri][ci]
  ret = { "message": "", "elements": [] }
  ret.message = "no match found at " + (ri + 1) + ", " + (ci + 1)
  if (ri != rowNum - 1) {  //row is not bottom row. 
    if (element == map[ri + 1][ci]) { //below1
      if (ri != rowNum - 2) { //is there room to go down from [Element] by two?
        if (element == map[ri + 2][ci]) { //does down 2 match element?
          ret.message = "Match Found! 2 below position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          ret.type = "Standard"
          ret.elements.push({ "row": `${ri}`, "column": `${ci}` })
          ret.elements.push({ "row": `${ri + 1}`, "column": `${ci}` })
          ret.elements.push({ "row": `${ri + 2}`, "column": `${ci}` })
          if (ri != rowNum - 3) { //is there room to go down from [Element] by two?
            if (element == map[ri + 3][ci]) { //does down 2 match element?
              ret.elements.push({ "row": `${ri + 2}`, "column": `${ci}` })
              ret.message = "Match Found! 3 below position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
              ret.type = "RowVert"
            }
          }
        }
      }

    }
  }
  return ret
}

function leftCheck(ri, ci) {

  element = map[ri][ci]

  ret = { "message": "", "elements": [] }
  ret.message = "no match found at " + (ri + 1) + ", " + (ci + 1)
  if (ci != 0) { //column is not leftmost. 
    if (element == map[ri][ci - 1]) { //does left of [element] match
      if (ci != columnNum) { //column is not rightmost
        if (element == map[ri][ci + 1]) {    //does right of [element] match?
          ret.message = "Match Found! left and right of position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          ret.type = "Standard"
          ret.elements.push({ "row": `${ri}`, "column": `${ci}` })
          ret.elements.push({ "row": `${ri}`, "column": `${ci - 1}` })
          ret.elements.push({ "row": `${ri}`, "column": `${ci + 1}` })
        }
      }
      if (ci != 1) { //column is not 2nd column/can it tick 3 total left
        if (element == map[ri][ci - 2]) { //does 2 left of element match?
          ret.elements.push({ "row": `${ri}`, "column": `${ci}` })
          ret.elements.push({ "row": `${ri}`, "column": `${ci - 1}` })
          ret.elements.push({ "row": `${ri}`, "column": `${ci - 2}` })
          ret.message = "Match Found! 2 to left of  position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          ret.type = "Standard"
          if (ci != 2) { //column is not 2nd column/can it tick 3 total left 
            if (element == map[ri][ci - 3]) { //does 2 left of element match?
              ret.elements.push({ "row": `${ri}`, "column": `${ci - 3}` })
              ret.message = "Match Found! 3 to left of  position x(column):" + (ci + 1) + "y(row): " + (ri + 1)
              ret.type = "RowHor"
            }
          }

        }


      }
    }

  }
  return ret
}

function rightCheck(ri, ci) {

  element = map[ri][ci]

  ret = { "message": "", "elements": [] }
  ret.message = "no match found at " + (ri + 1) + ", " + (ci + 1)
  if (ci != columnNum) { //not rightmost
    if (element == map[ri][ci + 1]) { //right1
      if (ci != columnNum - 1) { //
        if (element == map[ri][ci + 2]) { //right2
          ret.elements.push({ "row": `${ri}`, "column": `${ci}` })
          ret.elements.push({ "row": `${ri}`, "column": `${ci + 1}` })
          ret.elements.push({ "row": `${ri}`, "column": `${ci + 2}` })
          ret.message = "Match Found! 2 to the right of x(column):" + (ci + 1) + "y(row): " + (ri + 1)
          ret.type = "Standard"
          if (ci != columnNum - 2) { //
            if (element == map[ri][ci + 3]) { //right2
              ret.elements.push({ "row": `${ri}`, "column": `${ci + 3}` })
              ret.message = "Match Found! 3 to the right of x(column):" + (ci + 1) + "y(row): " + (ri + 1)
              ret.type = "RowHor"
            }
          }
        }
      }

    }
  }
  return ret
}


powerupOrder = ["Party", "RowHor", "RowVert", "Square", "Standard"]

function swapCheck(ri, ci) {
  matches = ""
  uniqueAffected=[]
  
  affected = { "dir": "", "type": "Standard", "message": "", "elements": [] }
  affected.message = "no match found at " + (ri + 1) + ", " + (ci + 1)

  up = upCheck(ri, ci)
  if (up.message.includes("no match found")) { } else {
    if (powerupOrder.indexOf(up.type) <= powerupOrder.indexOf(affected.type)) {
      affected.type = up.type
      affected.dir = "up"
      affected.message = up.message

    }
    up.elements.forEach(element => {
      affected.elements.push(element)
    });
    
  }
  down = downCheck(ri, ci)
  if (down.message.includes("no match found")) { } else {
    if (powerupOrder.indexOf(down.type) <= powerupOrder.indexOf(affected.type)) {
      affected.type = down.type
      affected.dir = "down"
      affected.message = down.message
    }
    down.elements.forEach(element => {
      affected.elements.push(element)
    });
  }


  right = rightCheck(ri, ci)
  if (right.message.includes("no match found")) { } else { 
    if (powerupOrder.indexOf(right.type) <= powerupOrder.indexOf(affected.type)) {
      affected.type = right.type
      affected.dir = "right"
      affected.message = right.message
    }
    right.elements.forEach(element => {
      affected.elements.push(element)
    });
  
  }
  left = leftCheck(ri, ci)
  if (left.message.includes("no match found")) { } else { 
    if (powerupOrder.indexOf(left.type) <= powerupOrder.indexOf(affected.type)) {
      affected.type = left.type
      affected.dir = "left"
      affected.message = left.message
    }
    left.elements.forEach(element => {
      affected.elements.push(element)
    });
  

  }

  if (affected.message == "no match found at " + (ri + 1) + ", " + (ci + 1)) {
    console.log("no matches")
    
  }
  else {
    console.log("matches found!")
    
    affected.elements.forEach(element => {
      item = {"row":element.row, "column":element.column}
      if (uniqueAffected.includes(item)) { }
      else
        uniqueAffected.push(item)
    });
    console.log("YELLING")
    console.log(uniqueAffected)
    //destroy all 
    //uniqueAffected.forEach(element => {
    //  spriteDestroy(element)
    //});
    // falling()


    affectedStr = "Elements! \n\n"
    uniqueAffected.forEach(element => {
      affectedStr = affectedStr + element + "\n"
    });
    matches = matches + "\n\nChanged Sprites: " + affectedStr

    
  }
  affected.elements = uniqueAffected
  return affected

}


