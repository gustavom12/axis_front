import React, { Fragment } from "react"
import "./loader.sass"

function Loader() {
    return(
        <Fragment>
            <div className="lds-roller "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </Fragment>
    )
}

export default Loader
