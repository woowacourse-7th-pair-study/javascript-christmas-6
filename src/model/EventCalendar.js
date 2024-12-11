export default class EventCalendar {
  getEvent(date) {
    const weekInfo = this.#checkWeek(date);
    const dDay = this.#dDay(date);
    return {
      weekInfo,
      dDay,
    };
  }

  #dDay(date) {
    if (date > 25) {
      return null;
    }
    return date - 1;
  }

  #checkWeek(date) {
    const dateString = `2023-12-${date}`;
    const day = new Date(dateString).getDay();
    if (day > 4) {
      return "weekend";
    }
    return "weekday";
  }
}
