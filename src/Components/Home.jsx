import React, { useState } from "react";
import "../App.css";
import staffArray from "../enums/staffArray";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import days from "../enums/days";

const Home = props => {
    const [schedule, setSchedule] = useState(props.schedule);
    const [staffMember, setStaffMember] = useState(props.staffMember)

    //shift - shifts available (Morning, noon , lunch)
    //indShift -shift slot and place  the selected event of an individaual associated in
    //Day -  the day of week a selected event is pointing to

    const handleStaffSelect = (shift, indShift, day, event) => {
        let tempSchedule = { ...schedule };
        // PrevStaff - is to maintain the record of previously assigned staff to support the change of dropdown value
        // while assigning, also to maintain the count of shifts
        let prevStaff = tempSchedule[shift][indShift][day];
        let tempStaffMember = { ...staffMember };
        let flag = true;

        for (let iShift in tempSchedule[shift]) {
            if (shift.includes("Lunch")) {
                let diff = iShift.charCodeAt(5) - indShift.charCodeAt(5)
                if (diff > -2 && diff < 2 &&
                    (tempSchedule[shift][iShift][day] === event.target.value)) {
                    flag = false
                }
            }
            else if (tempSchedule[shift][iShift][day] === event.target.value) {
                flag = false
            }
        }

        if (event.target.value === "None") {
            tempStaffMember[prevStaff][day] -= 1;
            tempStaffMember[prevStaff].TotalShifts -= 1;
            tempSchedule[shift][indShift][day] = event.target.value;
        } else if (tempStaffMember[event.target.value][day] < 2 && tempStaffMember[event.target.value].TotalShifts < 7
            && flag
        ) {
            tempSchedule[shift][indShift][day] = event.target.value;
            if (prevStaff === "None") {
                tempStaffMember[event.target.value][day] += 1;
                tempStaffMember[event.target.value].TotalShifts += 1;
            } else {
                tempStaffMember[prevStaff][day] -= 1;
                tempStaffMember[prevStaff].TotalShifts -= 1;
                tempStaffMember[event.target.value][day] += 1;
                tempStaffMember[event.target.value].TotalShifts += 1;
            }
        }

        setSchedule(tempSchedule);
        setStaffMember(tempStaffMember);
    }

    return (
        <div>

            <TableContainer className="table-container">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="justify-content bold-content">SHIFTS</TableCell>
                            {days.map((day, i) => {
                                return <TableCell className="justify-content bold-content" key={i}>{day}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(schedule).map((shift, idx) => {
                            return <React.Fragment key={idx} >
                                {Object.keys(schedule[shift]).map((indShift, i) => {
                                    return <TableRow key={i} className="row">
                                        <TableCell className="justify-content">{indShift}</TableCell>
                                        {Object.keys(schedule[shift][indShift]).map((day, i) => {
                                            return <TableCell className="justify-content" key={i}>
                                                <select
                                                    value={schedule[shift][indShift][day]}
                                                    onChange={(event) => handleStaffSelect(shift, indShift, day, event)}>
                                                    {staffArray.map((value, index) => {
                                                        return <option value={value} key={index}>{value}</option>
                                                    })}
                                                </select>
                                            </TableCell>
                                        })}
                                    </TableRow>
                                })}
                            </React.Fragment>
                        }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>


            <TableContainer className="table-container" >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="justify-content bold-content">Employees</TableCell>
                            {days.map((day, i) => {

                                return <TableCell className="justify-content bold-content" key={i}>{day}</TableCell>
                            })}
                            <TableCell className="justify-content bold-content">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(staffMember).map((staff, idx) => {
                            return <TableRow key={idx}>
                                <TableCell className="justify-content">{staff}</TableCell>
                                {Object.keys(staffMember[staff])?.map((day, i) => {
                                    return <TableCell className="justify-content" key={i}> {staffMember[staff][day]}</TableCell>
                                })}
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </div >
    );
}

export default Home;
