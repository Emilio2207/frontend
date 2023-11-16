import React from "react";

const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props;
  const isBodyText = body && !/<[a-z][\s\S]*>/i.test(body);

  return (
    <div className="box">
      {title && <h3>{title}</h3>}
      {subtitle && <h4>{subtitle}</h4>}
      {imagen && <img src={imagen} alt="Descripción de la imagen" />}
      {isBodyText ? (
        <p>{body}</p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: body }} />
      )}
      <hr />
    </div>
  );
};

export default NovedadItem;
