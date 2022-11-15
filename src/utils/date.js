export const weekDays = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
export const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
export const dateTime = new Date();
export const renderCalendar = (
  dateMonth,
  lastDate,
  days,
  nextMonthDay,
  setDateMonth,
  currYear
) => {
  let firstDayOfMonth = new Date(currYear, dateMonth, 1).getDay();
  let daysOfMonth = new Date(currYear, dateMonth + 1, 0).getDate();
  let lastDayOfMonth = new Date(currYear, dateMonth, daysOfMonth).getDay();
  let lastDateOfLastMonth = new Date(currYear, dateMonth, 0).getDate();

  for (let i = firstDayOfMonth; i > 0; i--) {
    lastDate.push(lastDateOfLastMonth - i + 1);
  }

  for (let i = 1; i <= daysOfMonth; i++) {
    days.push(i);
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    nextMonthDay.push(i - lastDayOfMonth + 1);
  }

  let currentMonth = new Date().getMonth();

  if (dateMonth >= 12) {
    setDateMonth((prev) => (prev = 11));
  } else if (dateMonth < currentMonth) {
    setDateMonth((prev) => (prev = currentMonth));
  }
};

export const openingHours = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];
export const presentDay = `${dateTime.getDate()} ${
  months[dateTime.getMonth()]
} ${dateTime.getFullYear()}`;
