const CalendarFnCreate = () => {
    if(document.querySelector('.order__accordion-form-day')) {
        const calendarBtnOpen = document.querySelector('.order__accordion-form-day-button');
        const calendarNode = document.getElementById('color-calendar');

        new Calendar({
            id: "#color-calendar",
            calendarSize: "small",
            dropShadow: "",
            customWeekdayValues: ["Пн", "Вт", "Cр", "Чт", "Пт", "Сб", "Вс"],
            customMonthValues: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            fontFamilyHeader: "Evolventa",
            fontFamilyWeekdays: "Evolventa",
            fontFamilyBody: "Evolventa"
        });


        const toggleisOpen = () =>{
            calendarNode.classList.toggle('is-open');
            calendarBtnOpen.classList.toggle('is-active');
        }

        calendarBtnOpen.addEventListener('click', ()=> toggleisOpen());
    }
}

export default CalendarFnCreate;