// react
import React from 'react';

// ui
import { Modal, Input, Button, Tips, gridSave } from 'qiao-ui';

// qiao service
import { ucenterMenuSave } from 'qiao-service';

/**
 * ucenter menu modal
 */
export class UcenterMenuModal extends React.Component {
    constructor(props) {
        console.log('insistime-web/manage/page/ucenter-menu-modal: constructor');

        super(props);

        this.state = {
            show: false,
            tips: '',
            data: {
                id: '',
                ucenter_menu_parent: '',
                ucenter_menu_sn: '',
                ucenter_menu_title: '',
                ucenter_menu_url: '',
                
            },
        };
    }

    // modal
    modalShow = (row) => {
        console.log('insistime-web/manage/page/ucenter-menu-modal: modalShow');

        row = row || {};
        this.setState({
            show: true,
            tips: '',
            data: {
                id: row.id || '',
                ucenter_menu_parent: row.ucenter_menu_parent || '',
                ucenter_menu_sn: row.ucenter_menu_sn || '',
                ucenter_menu_title: row.ucenter_menu_title || '',
                ucenter_menu_url: row.ucenter_menu_url || '',
                
            }
        });
    }
    modalClose = () => {
        console.log('insistime-web/manage/page/ucenter-menu-modal: modalClose');

        this.setState({
            show: false
        });
    }

    // form
    
    ucenterMenuParentChange = (e) => {
        console.log('insistime-web/manage/page/ucenter-menu-modal: ucenterMenuParentChange');

        let data = this.state.data;
        data.ucenter_menu_parent = e.target.value;
        this.setState({
            data: data
        });
    }
    
    ucenterMenuSnChange = (e) => {
        console.log('insistime-web/manage/page/ucenter-menu-modal: ucenterMenuSnChange');

        let data = this.state.data;
        data.ucenter_menu_sn = e.target.value;
        this.setState({
            data: data
        });
    }
    
    ucenterMenuTitleChange = (e) => {
        console.log('insistime-web/manage/page/ucenter-menu-modal: ucenterMenuTitleChange');

        let data = this.state.data;
        data.ucenter_menu_title = e.target.value;
        this.setState({
            data: data
        });
    }
    
    ucenterMenuUrlChange = (e) => {
        console.log('insistime-web/manage/page/ucenter-menu-modal: ucenterMenuUrlChange');

        let data = this.state.data;
        data.ucenter_menu_url = e.target.value;
        this.setState({
            data: data
        });
    }
    

    // save
    saveClick = async () => {
        console.log('insistime-web/manage/page/ucenter-menu-modal: saveClick');

        const isSuc = await gridSave(this, ucenterMenuSave, this.state.data);
        if(!isSuc) return;

        this.modalClose();
        this.props.reload();
    }

    render() {
        console.log('insistime-web/manage/page/ucenter-menu-modal: render');

        const tips = this.state.tips ? <Tips tips={this.state.tips}/> : null;
        return <Modal
            width="300px"
            show={this.state.show}
            closeModal={this.modalClose}
        >
            <Input
                type="hidden"
                value={this.state.data.id}
            />
            
            <Input
                type="text"
                placeholder="ucenter_menu_parent"
                value={this.state.data.ucenter_menu_parent}
                onChange={this.ucenterMenuParentChange}
            />
            
            <Input
                type="text"
                placeholder="ucenter_menu_sn"
                value={this.state.data.ucenter_menu_sn}
                onChange={this.ucenterMenuSnChange}
            />
            
            <Input
                type="text"
                placeholder="ucenter_menu_title"
                value={this.state.data.ucenter_menu_title}
                onChange={this.ucenterMenuTitleChange}
            />
            
            <Input
                type="text"
                placeholder="ucenter_menu_url"
                value={this.state.data.ucenter_menu_url}
                onChange={this.ucenterMenuUrlChange}
            />
            
            <Button
                onClick={this.saveClick}
                text="submit"
            />
            {tips}
        </Modal>;
    }
}