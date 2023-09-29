
//Calendar navigation
const datePicker = document.getElementById('calendar__date-picker')
const currentMonthSelect = document.getElementById('calendar__currentMonth')
const currentDaySelect = document.getElementById('calendar__currentDay')

const currentMonth = new Date().toLocaleString("en-US", { month: "long" })
currentMonthSelect.innerHTML = currentMonth;

const currentDay = new Date().toLocaleString("en-US", { day: '2-digit' })
const currentWeekday = new Date().toLocaleString("en-US", { weekday: 'long' })
const currentYear = new Date().toLocaleString("en-US", { year: 'numeric' })

currentDaySelect.innerHTML = `${currentDay} ${currentWeekday} ${currentYear}`;

//Calendar days
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const daysSelected = document.getElementById('calendar__days')

const setDays = () => {
    for (let i = 0; i < DAYS.length; i++) {
        const daysItem = document.createElement('div');
        daysSelected.appendChild(daysItem).classList.add('calendar__days-item')
        daysItem.innerHTML = DAYS[i];
    }
}
setDays()

//Calendar day
const tileDay = 35
const daySelected = document.getElementById('calendar__day')

const setTileDay = (month, year) => {
    const date = new Date(year, month)
    let y = 0
    const days = []
    const weekday = []
    while (date.getMonth() === month) {
        days.push(new Date(date).toLocaleString("en-US", { day: '2-digit' }));
        weekday.push(new Date(date).toLocaleString("en-US", { weekday: "short" }));
        date.setDate(date.getDate() + 1);
    }
    for (let i = 0; i < tileDay; i++) {
        const daysItem = document.createElement('button');
        daySelected.appendChild(daysItem).classList.add('calendar__day-item');
        if (i < days[i]) {
            daysItem.innerHTML = days[i]
            if (days[i] == currentDay) {
                daysItem.classList.add('calendar__day-item--current-day')
                daysItem.disabled = true
            }
        }
        else {
            let nextMonthDays = days[y++]
            daysItem.classList.add('calendar__day-item--another-month-day')
            daysItem.innerHTML = nextMonthDays
        }
    }
}

setTileDay(new Date().getMonth(), new Date().getFullYear())

