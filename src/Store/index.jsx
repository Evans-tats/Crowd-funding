import moment from "moment";
import { createGlobalState } from "react-hooks-global-state";
import Moment from "react-moment";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
   createModal: 'scale-0', 
   updateModal: 'scale-0',
   backModal: 'scale-0',
   connectedAccount: '',
   projects: [],
   project: null,
   stats: null,
   projectBackers: []
});

const daysRemaining = (days) => {
    const todaysdate = moment();
    const remainingDays = moment(days).diff(todaysdate, 'days');
    return remainingDays === 1 ? ' 1 day' : remainingDays + ' days ';
};



export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
    daysRemaining,

}