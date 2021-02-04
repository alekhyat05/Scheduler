import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Components/Home";
import staff from "./enums/staff";

function App() {

  let schedule = {};
  schedule = {
    MorningShift: {
      MorningUpStairs: {
        Monday: staff.NONE,
        Tuesday: staff.NONE,
        Wednesday: staff.NONE,
        Thursday: staff.NONE,
        Friday: staff.NONE
      },
      MorningDownStairs: {
        Monday: staff.NONE,
        Tuesday: staff.NONE,
        Wednesday: staff.NONE,
        Thursday: staff.NONE,
        Friday: staff.NONE
      },
      MorningParkingLot: {
        Monday: staff.NONE,
        Tuesday: staff.NONE,
        Wednesday: staff.NONE,
        Thursday: staff.NONE,
        Friday: staff.NONE
      }
    },
    LunchShift: {
      LunchA: {
        Monday: staff.NONE,
        Tuesday: staff.NONE,
        Wednesday: staff.NONE,
        Thursday: staff.NONE,
        Friday: staff.NONE
      },
      LunchB: {
        Monday: staff.NONE,
        Tuesday: staff.NONE,
        Wednesday: staff.NONE,
        Thursday: staff.NONE,
        Friday: staff.NONE
      },
      LunchC: {
        Monday: staff.NONE,
        Tuesday: staff.NONE,
        Wednesday: staff.NONE,
        Thursday: staff.NONE,
        Friday: staff.NONE
      },
      LunchD: {
        Monday: staff.NONE,
        Tuesday: staff.NONE,
        Wednesday: staff.NONE,
        Thursday: staff.NONE,
        Friday: staff.NONE
      }
    },
    AfternoonShift: {
      AfternoonUpStairs: {
        Monday: staff.NONE,
        Tuesday: staff.NONE,
        Wednesday: staff.NONE,
        Thursday: staff.NONE,
        Friday: staff.NONE
      },
      AfternoonDownStairs: {
        Monday: staff.NONE,
        Tuesday: staff.NONE,
        Wednesday: staff.NONE,
        Thursday: staff.NONE,
        Friday: staff.NONE
      },
      AfternoonParkingLot: {
        Monday: staff.NONE,
        Tuesday: staff.NONE,
        Wednesday: staff.NONE,
        Thursday: staff.NONE,
        Friday: staff.NONE
      }
    }
  }

  const staffMember = {
    X1: {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      TotalShifts: 0
    },
    X2: {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      TotalShifts: 0
    },
    X3: {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      TotalShifts: 0
    },
    X4: {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      TotalShifts: 0
    },
    X5: {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      TotalShifts: 0
    },
    X6: {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      TotalShifts: 0
    },
    X7: {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      TotalShifts: 0
    }
  }
  //Passing staff's possible working days and available shifts schedules as props
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => (
            <Home {...props} schedule={schedule} staffMember={staffMember} />
          )} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
