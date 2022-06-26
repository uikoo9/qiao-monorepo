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

    const url = 'https://insistime.com/search/npm';
    const config = {
        data: {
            pkg : value
        }
    };
    const res = await search(url, config);
    console.log(res);
};

async function search(url, config){
    const res = await post(url, config);
    if(!res || res.status != 200 || !res.data || res.data.type != 'success') return;
    
    return res;
}