module.exports = {
  toDDMMYYYY: (str) => {
    if (str) {
      let d = new Date(str)
      return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    } else {
      return
    }
  },

  toMMDDYYYY: (str) => { //This is going to cause problems in the future
    if (str) {
      return str.split("/")[1] + "/" + str.split("/")[0] + "/" + str.split("/")[2];
    } else {
      return
    }
  },

  toDDMMYYYYstr: (str) => { //This is going to cause problems in the future
    if (str) {
      return str.split("/")[1] + "/" + str.split("/")[0] + "/" + str.split("/")[2];
    } else {
      return
    }
  },

  getMonthStartEnd: () => {
    let now = new Date();
    let y = now.getFullYear()
    let m = now.getMonth() + 1
    let lastday = new Date(y, m, 0).getDate()
    console.log(lastday)

    let date = {
      start: m + "/1/" + y,
      end: m + "/" + lastday + "/" + y,
    }
    return date
  },

  getCurrentMonthStr: () => {
    let d = new Date();
    let month = ""

    switch ( d.getMonth() ) {
      case 0: month = 'January '
        break;
      case 1: month = 'Febuary '
        break;
      case 2: month = 'March '
        break;
      case 3: month = 'April '
        break;
      case 4: month = 'May '
        break;
      case 5: month = 'June '
        break;
      case 6: month = 'July '
        break;
      case 7: month = 'August '
        break;
      case 8: month = 'September '
        break;
      case 9: month = 'October '
        break;
      case 10: month = 'November '
        break;
      case 11: month = 'December '
        break;
    }

    return month + d.getFullYear();
  },

  todayMMDDYYYY: () => {
    let d = new Date()
    let mm = d.getMonth() + 1;
    let dd = d.getDate()
    let yyyy = d.getFullYear();

    return mm + "/" + dd + "/" + yyyy;
  },
  
  cap: (str) => {
    if (typeof str !== 'string') return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}