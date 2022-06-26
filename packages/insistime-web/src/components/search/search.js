// qiao
import { post } from 'qiao-ajax';

/**
 * checkboxChange
 * @param {*} that 
 * @param {*} isChecked 
 * @param {*} value 
 */
export const checkboxChange = (that, isChecked, value) => {
    let checkboxValues = that.state.checkboxValues;
    if (isChecked) {
        checkboxValues.push(value);
    } else {
        const index = checkboxValues.indexOf(value);
        checkboxValues.splice(index, 1);
    }

    that.setState({
        checkboxValues: checkboxValues
    });
};

/**
 * searchClick
 * @param {*} that 
 * @param {*} value 
 */
export const searchClick = async (that, value) => {
    const checkboxValues = that.state.checkboxValues;

    const res = await post('https://insistime.com/search/npm', {
        data: {
            pkg: value
        }
    });
    console.log(checkboxValues, value, res);
};