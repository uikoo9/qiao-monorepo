// react
import React from 'react';

// css
import './toolbar.scss';

/**
 * toolbar
 */
export class Toolbar extends React.Component {
    // modal show
    modalShow = () => {
        console.log('qiao-ui/pc/toolbar: modalShow');

        this.props.modal.current.modalShow();
    }

    // del rows
    delRows = () => {
        console.log('qiao-ui/pc/toolbar: delRows');

        const cks = this.props.cks;
        if (!cks.length) {
            alert('check del rows');
            return;
        }

        this.props.delRows(cks.join(','));
    }

    // first page
    firstPage = () => {
        console.log('qiao-ui/pc/toolbar: firstPage');

        const pagenumber = this.props.pagenumber;
        if (pagenumber == 1) return;

        this.props.reload();
    }

    // prev page
    prevPage = () => {
        console.log('qiao-ui/pc/toolbar: prevPage');

        const pagenumber = this.props.pagenumber;
        if (pagenumber == 1) return;

        this.props.reload(pagenumber - 1);
    }

    // last page
    lastPage = () => {
        console.log('qiao-ui/pc/toolbar: lastPage');

        const pagenumber = this.props.pagenumber;
        if (pagenumber == this.props.sumpage) return;

        this.props.reload(this.props.sumpage);
    }

    // next page
    nextPage = () => {
        console.log('qiao-ui/pc/toolbar: nextPage');

        const pagenumber = this.props.pagenumber;
        if (pagenumber == this.props.sumpage) return;

        this.props.reload(pagenumber + 1);
    }

    // set pagesize
    setPagesize = (pagesize) => {
        console.log('qiao-ui/pc/toolbar: setPagesize');

        window.pagesize = pagesize;
        this.props.reload();
    }

    render() {
        console.log('qiao-ui/pc/toolbar: render');

        return <div className='toolbar'>
            <div onClick={this.modalShow}>add</div>
            <div onClick={this.delRows}>del</div>
            <div>/</div>
            <div onClick={this.firstPage}>first</div>
            <div onClick={this.prevPage}>prev</div>
            <div onClick={this.nextPage}>next</div>
            <div onClick={this.lastPage}>last</div>
            <div>/</div>
            <div onClick={() => { this.setPagesize(10) }}>10</div>
            <div onClick={() => { this.setPagesize(50) }}>50</div>
            <div onClick={() => { this.setPagesize(100) }}>100</div>
        </div>;
    }
}