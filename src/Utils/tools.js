import moment from "moment"
import get from "lodash/get"

export const abstractAccount = email => email.replace(/@.*$/, "")

export const checkCutoffDateIsNextMonth = (cutoffDate) => {
    return moment().date() > cutoffDate ? true : false
}

export const cutoffMonthValue = (cutoffDate) => {
    let newCutoffMonthArray = []
    let nowCutoffMonth
    let lastMonthCutoffMonth
    for (let i = -1; i < 2; i++) {
        const year = moment().add(`${checkCutoffDateIsNextMonth(cutoffDate) ? i + 1 : i}`, 'month').year()
        const month = moment().add(`${checkCutoffDateIsNextMonth(cutoffDate) ? i + 1 : i}`, 'month').month() + 1
        newCutoffMonthArray.push(`${year}-${month}`)
    }

    nowCutoffMonth = get(newCutoffMonthArray, 1)
    lastMonthCutoffMonth = get(newCutoffMonthArray, 0)
    return { newCutoffMonthArray, nowCutoffMonth, lastMonthCutoffMonth }
}
