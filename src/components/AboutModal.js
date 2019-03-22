import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AboutModal extends React.Component {
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
          About
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Why I created this site.
          </ModalHeader>
          <ModalBody>
            <p>
              As someone who loves to explore everything there is to do outdoors
              in the Four Corners area, I spend alot of time checking the
              weather, ski reports, river flows, and so on...
            </p>
            <p>
              So i decided to make a one stop site to quickly see all of the
              information one would need, and the be able to decide what I'm
              doing with my weekend or afternoon.
            </p>
            <p>
              There are definitly intentions here to add to the lists of sites
              for each category. If you have any suggestions please reach me
              throught the contact button.
            </p>
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

export default AboutModal;
