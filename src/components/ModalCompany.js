import React from 'react'
import Modal from 'react-modal'

export default function ModalCompany(props) {
    const customStyle={
        content:{
            minWidth: "50%",
            maxWidth: "80%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "orange"
        }
    }
    const close = ()=>{
        props.setOpenModel(false)
    }
  return (
    <div>
      <Modal
      isOpen={props.openModel}
      onRequestClose={close}
      style={customStyle}>
        <h1>Model Title</h1>
        <h5>Model Button</h5>
      </Modal>
    </div>
  )
}
