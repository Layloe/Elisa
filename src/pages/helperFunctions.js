

export function getDayOfWeek(dateString) {
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const date = new Date(dateString);
  const dayOfWeekIndex = date.getUTCDay();
  return daysOfWeek[dayOfWeekIndex]
}

export function getTimeOfDay(dateString) {
  const myDate = new Date(dateString),
    hours = myDate.getUTCHours()

  if (hours < 12) {
    return "morning"
  } else if (hours < 18 ){
    return "afternoon"
  } else {
    return "evening"
  }
}

export function assignDayOfWeek(list) {
  const dateProp =  list.map((value) => ({
    date: value.date,
    dayOfWeek: getDayOfWeek(value.date)
  }))

  return dateProp
}

export function assignTimeOfDay(list) {
  const timeOf =  list.map((value) => ({
    date: value.date,
    dayOfWeek: getDayOfWeek(value.date),
    timeOfDay: getTimeOfDay(value.date)
  }))

  return timeOf
}

export function groupByDay(list) {
  let groupsSplit = []
  let group = []

  for(let i = 0; i < list.length; i++){
    const item = list[i]

    if (item.dayOfWeek == group[0]?.dayOfWeek || group.length == 0) {
      group.push(item)
    } else {
      groupsSplit.push(group)
      group = [item]
    }
  }

  if (group.length > 0) {
    groupsSplit.push(group)
  }

  return groupsSplit
}

export function groupByWeek(list) {
  const weeks = [];
  let currentWeek = [];

  for (let i = 0; i < list.length; i++) {
    const currentDate = new Date(list[i][0].date);
    const dayOfWeek = currentDate.getUTCDay();

    if (dayOfWeek === 0 && currentWeek.length > 0 ) {
      // End of the week
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentWeek.push(list[i]);

    if (dayOfWeek === 6 || i === list.length - 1) {
      // Saturday or last element of the list
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  return weeks;
}

export default helperFunctions

// function BloodPressureTracker({ data }) {
//   const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);

//   const dateProp = assignDayOfWeek(data);
//   const timeOf = assignTimeOfDay(dateProp);
//   const groupedByDay = groupByDay(timeOf);
//   const groupedByWeek = groupByWeek(groupedByDay);

//   const selectedWeek = groupedByWeek[selectedWeekIndex];

//   const handlePrevWeek = () => {
//     setSelectedWeekIndex(selectedWeekIndex - 1);
//   };

//   const handleNextWeek = () => {
//     setSelectedWeekIndex(selectedWeekIndex + 1);
//   };

//   return (
//     <div>
//       <h1>Blood Pressure Tracker</h1>
//       <button onClick={handlePrevWeek} disabled={selectedWeekIndex === 0}>Prev Week</button>
//       <button onClick={handleNextWeek} disabled={selectedWeekIndex === groupedByWeek.length - 1}>Next Week</button>
//       {selectedWeek.map((group, index) => (
//         <div key={index}>
//           <h3>{group[0].dayOfWeek}</h3>
         
