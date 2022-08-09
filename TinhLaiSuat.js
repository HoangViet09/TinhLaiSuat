const handlePeriod = (period , dateString, month) => {
    if (month === 0) {
        const currentDate = new Date(dateString)
        period.push(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
    } else {
        const pre = new Date(dateString)
        let month = pre.getMonth() + 2,
            year = pre.getFullYear(),
            date = pre.getDate()
        if(month > 12) {
            month = 1
            year += 1
        }
        const currentDate = new Date(`${year}-${month}-${date}`)
        period.push(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
    }
    return period[month]
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
    // clear table 
    document.querySelector("table tbody").innerHTML = ""
    // lay goc vay
    const loan = Number(document.getElementById("loan").value)
    //thoi han vay
    const months = Number(document.getElementById("months").value)
    //lai suat cho vay
    const rate = Number(document.getElementById("rate").value)
    // ngay giai ngan
    const disbursementDate = document.getElementById("disbursementDate").value
    //tong so tien lai phai tra
    const interest = Math.round((loan * months * rate ) / 1200)
    //tong goc va lai phai tra
    const originalAndIterest = loan + interest

    document.getElementById("interest").value = interest.toLocaleString()
    document.getElementById("originalAndIterest").value = originalAndIterest.toLocaleString()

    const period = []

    for (let i = 0; i <= months; i++) {
        let html
        if (i === 0) {
            html = `
                <td>${i}</td>
                <td>${handlePeriod(period, disbursementDate, i)}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            `
        } else if (i === months) {
            // goc hang thang
            const originalPermonth = loan - Math.round(loan / months) * (months - 1)
            // lai hang thang
            const interestPermonth = interest - Math.round((loan * rate) / 1200) * (months -1)
            // goc va lai hang thang
            const originalAndIterestPerMonth = originalPermonth + interestPermonth
            html = `
                <td>${i}</td>
                <td>${handlePeriod(period, period[i-1], i)}</td>
                <td>${originalPermonth.toLocaleString()}</td>
                <td>${interestPermonth.toLocaleString()}</td>
                <td>${originalAndIterestPerMonth.toLocaleString()}</td>
                <td>0</td>
                
            `
        } else {
            // goc hang thang
            const originalPermonth = Math.round(loan / months)
            // lai hang thang
            const interestPermonth = Math.round((loan * rate) / 1200)
            // goc va lai hang thang
            const originalAndIterestPerMonth = originalPermonth + interestPermonth
            // goc con lai 
            const remainingOriginal = loan - originalPermonth * i
            html = `
                <td>${i}</td>
                <td>${handlePeriod(period, period[i-1], i)}</td>
                <td>${originalPermonth.toLocaleString()}</td>
                <td>${interestPermonth.toLocaleString()}</td>
                <td>${originalAndIterestPerMonth.toLocaleString()}</td>
                <td>${remainingOriginal.toLocaleString()}</td>
                
            `
        }
        const tr = document.createElement("tr")
        tr.innerHTML = html
        document.querySelector("table tbody").appendChild(tr)
    }
})