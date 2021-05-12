import React from "react";
import "./Notifications.sass";
function Notifications({ notifications }: { notifications: any }) {
  return (
    <div className="notifications">
      <h2
        className="fw-bold text-serif pb-2"
        style={{ borderBottom: "1px solid #00000070" }}
      >
        {" "}
        Últimas Notificaciones{" "}
      </h2>
      {notifications.length === 0 ? (
        <div className="w-100 flex" style={{ minHeight: "200px" }}>
          <h2 className="text-main my-4 fs-1">Aún no tienes notificaciones</h2>
        </div>
      ) : null}
    </div>
  );
}
export default Notifications;
