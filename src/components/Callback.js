import React, {Component, useState, useEffect } from "react"


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from './Form.js'


export class Callback extends Component{



  render(){
  return(
          <form onSubmit={this.submitClient} name="Быстрая консультация" class="callbackForm">

              <div class="q">
                  <label>
                      ФИО* 
                  </label><br/>
                  <input type="" placeholder="Иван Иванов" required/>
              </div>
              <div class="q">
                  <label>
                      Email* 
                  </label><br/>
                  <input type="" placeholder="example@mail.ru" required/>
              </div>
              <div class="q">
                  <label>
                      Телефон* 
                  </label><br/>
                  <input type="" placeholder="+7 999 999 99 99" required/>
              </div>
              <div class="q">
                  <label>
                      Марка авто 
                  </label><br/>
                  <input type="" placeholder="Mitsubishi Lancer X"/>
              </div>
              <div class="q ph">
                  <label>
                      Сообщение оператору
                  </label>
                  <textarea rows="3" type="" placeholder=""/>
              </div>
              

              <input class="submit_button" type="submit" value="Отправить" />
          </form>
      );
  }
}








export default function CallPop(){
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);



return (
    <div className="Call">
      <Button className="wButton" variant="outline-warning" onClick={handleClickOpen('body')}>Быстрая консультация</Button>


      <Dialog
        className="quickDialog"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">

        <DialogTitle  id="scroll-dialog-title"><p style={{fontSize:'2vw', textAlign:'center', color:'#fff'}}>Быстрая запись</p></DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}>

              <Callback/>


          </DialogContentText>
        </DialogContent>
        
      </Dialog>
    </div>
  );


}