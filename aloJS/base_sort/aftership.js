function format(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;
    return `${year}-${month}-${day}`;
}

function reformatDate(dates) {
    let len = dates.length;
    for (let i = 0; i < len; i++) {
        let tem = dates[i];
        tem = tem.replace("th", "").replace("st", "")
            .replace("rd", "").replace("nd", "");
        tem = format(new Date(tem));
        dates[i] = tem;
    }
    return dates;
}