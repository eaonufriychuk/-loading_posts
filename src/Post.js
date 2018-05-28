import React from "react";

export default ({id, title, body}) => {
    return (
        <div className="post">
            <h2>
                {title}
            </h2>
            <p className="post_body">
                {body}
            </p>
        </div>
    )

}