import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Nav,
  NavLink
} from "reactstrap";

class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} className="mr-3">
          Contact
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Contact Information:</ModalHeader>
          <ModalBody>
            <Nav>
              <NavLink href="mailto:dhunsworth@yahoo.com">
                Email site owner
              </NavLink>
            </Nav>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Close window
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ContactModal;
