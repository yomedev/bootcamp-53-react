import { IoCashOutline } from "react-icons/io5";

import { Modal } from "../Modal";

import { BannerItem } from "./BannerItem";
import { BannerModal } from "./BannerModal";
import { Component } from "react";

const TEXT =
  "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.";

export class Banner extends Component {
  state = {
    isModalOpen: false,
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true})
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false})
  }

  render() {
    const { isModalOpen } = this.state;
    return (
      <>
        <div className="row mb-5 p-5 row-cols-2 bg-light">
          <BannerItem onOpenModal={this.handleOpenModal} title="Featured title" text={TEXT}>
            <IoCashOutline />
          </BannerItem>
        </div>

        {isModalOpen && (
          <Modal onCloseModal={this.handleCloseModal}>
            <BannerModal />
          </Modal>
        )}
      </>
    );
  }
}
// export const Banner = () => {
//   return (
//     <>
//       <div className="row mb-5 p-5 row-cols-2 bg-light">
//         <BannerItem title="Featured title" text={TEXT}>
//           <IoCashOutline />
//         </BannerItem>
//       </div>

//       <Modal>
//         <BannerModal />
//       </Modal>
//     </>
//   );
// };
