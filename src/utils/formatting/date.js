const formatDate = date => {

    let dateToFormat = new Date(date);

    let year = dateToFormat.getFullYear();
    let month = dateToFormat.getMonth()+1;
    let dt = dateToFormat.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return dt+"/"+month+"/"+year
}

export default formatDate