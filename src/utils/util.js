export const timeForToday = (value) => {
  const today = new Date()
  const timeValue = new Date(value)

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60)
  if (betweenTime < 1) return "방금전"
  if (betweenTime < 60) {
    return `${betweenTime}분전`
  }

  const betweenTimeHour = Math.floor(betweenTime / 60)
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`
  }

  return `${timeValue.getFullYear()}.${timeValue.getMonth() + 1}.${timeValue.getDate()}`

  //   const betweenTimeDay = Math.floor(betweenTime / 60 / 24)
  //   if (betweenTimeDay < 365) {
  //     return `${betweenTimeDay}일전`
  //   }

  //   return `${Math.floor(betweenTimeDay / 365)}년전`
}

// trim
export const trim = (text) => {
  if (typeof text != "string") return text
  return text.replace(/ /gi, "")
}
