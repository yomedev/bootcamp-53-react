import { PropTypes } from 'prop-types';

export const Modal = ({ children, onCloseModal }) => {

  const handleBackdrop = (event) => {
    const { target, currentTarget } = event
    if (target === currentTarget) {
      onCloseModal()
    }
  }

  return (
    <>
      <div className="modal-backdrop fade show" />

      <div className="modal fade show" style={{ display: 'block' }} onClick={handleBackdrop}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onCloseModal} />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propType = {
  children: PropTypes.node.isRequired,
};