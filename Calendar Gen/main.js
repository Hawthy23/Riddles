months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
monthsFull = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

var ChosenData = { "month": "", "1st": "", "year": "" }
function totalDays(month,year) {
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            daysTotal = 31;
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            daysTotal = 30;
            break;
        case 1:
            leap = year % 4 
            if (leap == 0)
            daysTotal = 29
            else
            daysTotal = 28 //does not account for leap years YET

            break;
        default:
            daysTotal = 31
            break;
    }
    return daysTotal
}

function calendarGen(month, day, date, year) {
    var daysTotal = totalDays(month,year)
    //clear the whole thing

    var coll = document.getElementsByTagName("tr")

    //first row could start anywhere in the week;  unique 

    for (let row = 0; row < 7; row++) {
        var r = coll[row]
        num = r.getElementsByTagName("td").length
        for (let index = 0; index < num; index++) {
            targ = r.getElementsByTagName("td")[index]
            targ.innerText = ""
        }
    }//end of outer for



    //start day sets which block is filled with the number 1
    var tdate = date
    while (tdate > 7) {
        tdate = tdate - 7
    }

    temp = day - tdate + 1
    var startDay
    if (temp < 0)
        startDay = 7 + temp
    else startDay = temp

    ChosenData["1st"] = startDay
    ChosenData["month"] = month
    ChosenData["year"] = year

    //placing start day 
    var d = 1
    var coll = document.getElementsByTagName("tr")
    var row = coll[1]

    //first row could start anywhere in the week;  unique 
    num = row.getElementsByTagName("td").length
    for (let index = startDay; index < num; index++) {
        targ = row.getElementsByTagName("td")[index]
        targ.innerText = d
        d += 1
    }


    //starting from row 2 to fill the rest in. 

    for (let row = 2; row < 7; row++) {
        if (d > daysTotal) break;
        var r = coll[row]
        num = r.getElementsByTagName("td").length
        for (let index = 0; index < num; index++) {
            targ = r.getElementsByTagName("td")[index]
            targ.innerText = d
            d += 1
            if (d > daysTotal) break;
        }
    }//end of outer for


}

function updateDisplay(d) {


    calendarGen(d.getMonth(), d.getDay(), d.getDate(), d.getFullYear())
    document.getElementById("month").innerText = ": " + monthsFull[d.getMonth()] + " " + d.getFullYear()


}

function prevMonth() {


    //calculate last day from first day in previous month
    console.log(ChosenData)
    if (ChosenData["1st"] == 0)
        lastDay = days.length - 1
    else lastDay = ChosenData["1st"] - 1
    console.log("last day" + lastDay)
    if (ChosenData["month"] == 0) {
        year = ChosenData["year"] - 1
        newMonth = months.length - 1
    }
    else {
        newMonth = ChosenData["month"] - 1
        year = ChosenData["year"]
    }


    var daysTotal = totalDays(newMonth,year)

    const d = new Date(year, newMonth, daysTotal, 10, 33);
    console.log("new date " + d)
    updateDisplay(d)
}

function nextMonth() {
    //calculate last day in original month. 
    tdays = totalDays(ChosenData["month"])
    lastDOW = ChosenData["1st"]
    //turns out this chunk is not actually needed; using js's built in date display.... 
    var lastDay
    switch (tdays) {
        case 30:
            lastDay = lastDOW +1
            if (lastDay == days.length)
            lastDay =0
            break;
        case 31:
            lastDay = lastDOW +2
            if (lastDay == days.length)
            lastDay = 0
            if (lastDay == days.length+1)
            lastDay = 1
          
            break;
        case 28:
            lastDay = lastDOW -1 
            if (lastDay ==-1)
            lastDay = days.length-1
            
            break;
        case 27:
            lastDay = lastDOW -1
            if (lastDay ==0)
            lastDay = days.length-1
            break;
        default:
            lastDay = lastDOW 
            break;
    }


//month & year calculations. 
      if (ChosenData["month"] == months.length-1) {
          year = ChosenData["year"] + 1
          newMonth = 0
      }
      else {
          newMonth = ChosenData["month"] +1 
          year = ChosenData["year"]
      }
   
      firstDay = lastDay +1
      
      var daysTotal = totalDays(newMonth,year)
  
      const d = new Date(year, newMonth, daysTotal, 10, 33);
      console.log("new date " + d)
     updateDisplay(d)
     
}

window.onload = function () {
    const d = new Date();

 
    date = d.getDate()
    if (date < 10)
        date = "0" + date

    console.log("new date " + d)
    updateDisplay(d);
    //calendarGen(8, 1,1)

}



