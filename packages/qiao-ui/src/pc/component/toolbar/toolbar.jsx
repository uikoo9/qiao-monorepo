// react
import React from 'react';

// css
import './toolbar.scss';

/**
 * toolbar
 */
export const Toolbar = (props) => {
    console.log('qiao-ui/pc/toolbar: render');

    // search modal show
    const searchModalShow = () => {
        console.log('qiao-ui/pc/toolbar: searchModalShow');

        props.searchModal.current.modalShow();
    };

    // edit modal show
    const editModalShow = () => {
        console.log('qiao-ui/pc/toolbar: editModalShow');

        props.editModal.current.modalShow();
    };

    // del rows
    const delRows = () => {
        console.log('qiao-ui/pc/toolbar: delRows');

        const cks = props.cks;
        if (!cks.length) {
            alert('check del rows');
            return;
        }

        props.delRows(cks.join(','));
    };

    // first page
    const firstPage = () => {
        console.log('qiao-ui/pc/toolbar: firstPage');

        const pagenumber = props.pagenumber;
        if (pagenumber == 1) return;

        props.reload();
    };

    // prev page
    const prevPage = () => {
        console.log('qiao-ui/pc/toolbar: prevPage');

        const pagenumber = props.pagenumber;
        if (pagenumber == 1) return;

        props.reload({}, pagenumber - 1);
    };

    // last page
    const lastPage = () => {
        console.log('qiao-ui/pc/toolbar: lastPage');

        const pagenumber = props.pagenumber;
        if (pagenumber == props.sumpage) return;

        props.reload({}, props.sumpage);
    };

    // next page
    const nextPage = () => {
        console.log('qiao-ui/pc/toolbar: nextPage');

        const pagenumber = props.pagenumber;
        if (pagenumber == props.sumpage) return;

        props.reload({}, pagenumber + 1);
    };

    // set pagesize
    const setPagesize = (pagesize) => {
        console.log('qiao-ui/pc/toolbar: setPagesize');

        window.pagesize = pagesize;
        props.reload();
    };

    return <div className='toolbar'>
        <div onClick={searchModalShow}>search</div>
        <div onClick={editModalShow}>add</div>
        <div onClick={delRows}>del</div>
        <div>/</div>
        <div onClick={firstPage}>first</div>
        <div onClick={prevPage}>prev</div>
        <div onClick={nextPage}>next</div>
        <div onClick={lastPage}>last</div>
        <div>/</div>
        <div onClick={() => { setPagesize(10); }}>10</div>
        <div onClick={() => { setPagesize(100); }}>100</div>
    </div>;
};