'use strict';

/**
 * clickPickSrc
 */
export const clickPickSrc = async (that) => {
    const res = await window.electron.clickPickSrcIPC();
    if(!res || !res.length) return;

    that.setState({
        srcPath: res[0]
    });
}

/**
 * clickPickDest
 */
export const clickPickDest = async (that) => {
    // check
    const src = that.state.srcPath;
    if(!src){
        alert('请先选择src!');
        return;
    }

    // res
    const res = await window.electron.clickPickDestIPC();
    if(!res || !res.length) return;

    // set
    that.setState({
        destPath: res[0]
    });
}

/**
 * clickZipGo
 */
export const clickZipGo = async (that) => {
    // check
    const src = that.state.srcPath;
    if(!src){
        alert('请先选择src!');
        return;
    }

    // check
    const dest = that.state.destPath;
    if(!dest){
        alert('请先选择dest!');
        return;
    }

    const res = await window.electron.clickGoIPC(src, dest);
    alert(res);
}