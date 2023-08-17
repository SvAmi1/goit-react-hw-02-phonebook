export const ContactItem = ({
    info,
    onDelete,
  }) => {
    return (
      <div>
        <p>{info.name}: {info.number}</p>
      <div>
          <button onClick={() => onDelete(info.id)}>Delete</button>
        </div>
      </div>
    );
  };