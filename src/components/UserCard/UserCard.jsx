export const UserCard = () => {

  return (
    <div className="list-group-item list-group-item-action py-3 mb-4">
      <div className="d-flex w-100 align-items-center">
        <img
          alt=""
          width="80px"
          height="80px"
          className="d-block"
          src={'/user.png'}
          style={{ borderRadius: '50%', boxSizing: 'border-box' }}
        />
        <div className="ms-3 d-flex flex-column">
          <strong className="mb-1">
            {'First'} {'Last'}
          </strong>
          <small className="text-muted">{'Email'}</small>
        </div>
      </div>
    </div>
  );
};