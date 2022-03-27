

function falling() {

    for (let ri = rowNum; ri < 0; ri--) {
      for (let ci = 0; ci < columnNum; ci++) {
        fallri = ""
        fall = ""
        if (map[ri][ci] = '') {
          //look for the closest nonempty
          for (let index = ri; index < 0; index--) {
            if (map[index][ci] != "") {
              fall = map[index][ci]
              map[index][ci] == ''
              fallri = index
              break;
            }
          }
          console.log("falling" + fall)
        }
      }
    }
  }
  
  function spriteDestroy(name) {
    //console.log(name)
  
    r = name.split("c")[0].split("r")[1]
    c = name.split("c")[1]
    map[r][c] = ""
    oldSprite = ""
    sprites.forEach(s => {
      if (s.name == name)
        oldSprite = s
    });
    //console.log(oldSprite)
    oldX = oldSprite.x
    oldY = oldSprite.y
    console.log("destroying: " + name)
    oldSprite.destroy()
  
  }
  
  
  function frameChange(spriteName, frameName) {
    sprites.forEach(s => {
      if (s.name == spriteName)
        s.setTexture('foods', frameName)
    });
  
  }
  