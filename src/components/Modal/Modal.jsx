import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {

    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        console.log("Escape");
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      console.log("clearProcesses");
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onCloseModal]);

  const handleBackdrop = (event) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      onCloseModal();
    }
  };

  const jsx = (
    <>
      <div className="modal-backdrop fade show" />

      <div
        className="modal fade show"
        style={{ display: "block" }}
        onClick={handleBackdrop}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCloseModal}
              />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(jsx, modalRoot);
};

// export class Modal1 extends Component {
//   handleKeyDown = (event) => {
//     if (event.key === "Escape") {
//       console.log("Escape");
//       this.props.onCloseModal();
//     }
//   };

//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }

//   handleBackdrop = (event) => {
//     const { target, currentTarget } = event;
//     if (target === currentTarget) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     return (
//       <>
//         <div className="modal-backdrop fade show" />

//         <div
//           className="modal fade show"
//           style={{ display: "block" }}
//           onClick={this.handleBackdrop}
//         >
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Modal title</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={this.props.onCloseModal}
//                 />
//               </div>

//               <div className="modal-body">{this.props.children}</div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export const Modal = ({ children, onCloseModal }) => {

//   const handleBackdrop = (event) => {
//     const { target, currentTarget } = event
//     if (target === currentTarget) {
//       onCloseModal()
//     }
//   }

//   return (
//     <>
//       <div className="modal-backdrop fade show" />

//       <div className="modal fade show" style={{ display: 'block' }} onClick={handleBackdrop}>
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Modal title</h5>
//               <button type="button" className="btn-close" aria-label="Close" onClick={onCloseModal} />
//             </div>

//             <div className="modal-body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

Modal.propType = {
  children: PropTypes.node.isRequired,
};
