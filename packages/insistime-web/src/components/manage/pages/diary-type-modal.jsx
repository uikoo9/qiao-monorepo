// react
import React from 'react';

// ui
import { Modal, Input, Button, Tips, gridSave } from 'qiao-ui';

// dishi service
import { diaryTypeSave } from 'dishi-service';

/**
 * diary type modal
 */
export class DiaryTypeModal extends React.Component {
    constructor(props) {
        console.log('insistime-web/manage/page/diary-type-modal: constructor');

        super(props);

        this.state = {
            show: false,
            tips: '',
            data: {
                id: '',
                diary_type_name: '',
                
            },
        };
    }

    // modal
    modalShow = (row) => {
        console.log('insistime-web/manage/page/diary-type-modal: modalShow');

        row = row || {};
        this.setState({
            show: true,
            tips: '',
            data: {
                id: row.id || '',
                diary_type_name: row.diary_type_name || '',
                
            }
        });
    }
    modalClose = () => {
        console.log('insistime-web/manage/page/diary-type-modal: modalClose');

        this.setState({
            show: false
        });
    }

    // form
    
    diaryTypeNameChange = (e) => {
        console.log('insistime-web/manage/page/diary-type-modal: diaryTypeNameChange');

        let data = this.state.data;
        data.diary_type_name = e.target.value;
        this.setState({
            data: data
        });
    }
    

    // save
    saveClick = async () => {
        console.log('insistime-web/manage/page/diary-type-modal: saveClick');

        const isSuc = await gridSave(this, diaryTypeSave, this.state.data);
        if(!isSuc) return;

        this.modalClose();
        this.props.reload();
    }

    render() {
        console.log('insistime-web/manage/page/diary-type-modal: render');

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
                placeholder="diary_type_name"
                value={this.state.data.diary_type_name}
                onChange={this.diaryTypeNameChange}
            />
            
            <Button
                onClick={this.saveClick}
                text="submit"
            />
            {tips}
        </Modal>;
    }
}