module.exports = {
  toDDMMYYYY: (str) => {
    if (str) {
      let d = new Date(str)
      return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    } else {
      return
    }
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
  }
}