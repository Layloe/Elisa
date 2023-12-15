import React, { useState } from "react";

const BloodPressureTracker = ({data}) => { //change data
    const [selectedWeekIndex, setSelectedWeekIndex] = useState(0)
    const selectedWeek = data[selectedWeekIndex] || []

    const handlePrevWeek = () => {
        setSelectedWeekIndex(Math.max(selectedWeekIndex - 1, 0))

    }

    const handleNextWeek = () => {
        setSelectedWeekIndex(Math.max(selectedWeekIndex + 1, data.length -1))
    }

    return (
        <div>
            <button onClick={handlePrevWeek} disabled={selectedWeekIndex === 0}>Prev Week</button>
            <button onClick={handleNextWeek} disabled={selectedWeekIndex ===  data.length -1}>Next Week</button>
            {selectedWeek.map((day, index) => (
                <div key={index}>
                    <h3>{day[0]?.dayOfWeek || 'No Data'}</h3>
                    {/* <Card.Body>
                        <Card.Title>Time of Day: {post.timeOfDay}</Card.Title>
                        <Card.Text>Blood Pressure: {post.bloodPressure}</Card.Text>
                        <Card.Text>Severity: {post.severity}</Card.Text>
                        <Card.Text>Assigned To: {post.assignedTo}</Card.Text>
                        <Card.Text>Status: {post.status}</Card.Text>
                        <Card.Text>Date: {post.date}</Card.Text>
                        <Button variant="danger" onClick={() => onDelete(post._id)}>Delete</Button> */}
                        {/* <Button variant="warning" onClick={() => onLogout(user._id) }>Logout</Button> */}
                    {/* </Card.Body> */}

                </div>    
            ))}
        </div>
    )
}

export default BloodPressureTracker