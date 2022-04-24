import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import * as React from 'react';
import {myFunctionJPYC,CreateProject} from "../../pages/api/index2" 

export interface sendJPYCDialogProps {
  sendTo: string;
  onApprove: ()=>void;
  onCancel: ()=>void;
};

export interface sendJPYCDialogState{
  jpyc: string;
};

class sendJPYCDialog extends React.Component<sendJPYCDialogProps,sendJPYCDialogState> {
  constructor(props) {
    super(props);
    this.state = {jpyc: "1"};
  }

  onSendJpyc=async ()=>{
    await myFunctionJPYC();
    await CreateProject( this.state.jpyc, "toTwId1", "fromTwId1");  //応援ボタン押したとみなす
    alert(`Send Jpyc`);
    this.props.onApprove();  
  }

  onChangeJpyc=(str)=>{
    this.setState({jpyc:str.target.value});
  }

  render() {
    return (
        <div>
          <DialogTitle>{`${this.props.sendTo}を支援します`}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              支援する金額(JPYC)を入力してください
            </DialogContentText>
            <input type="number" id="tentacles" name="tentacles" min="1" max="1000" onChange={this.onChangeJpyc}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onCancel}>キャンセル</Button>
            <Button onClick={this.onSendJpyc}>支援</Button>
          </DialogActions>
        </div>
    );
  }
}

export default sendJPYCDialog;