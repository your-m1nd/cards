import React from "react";
import '../Error/Error.scss'

function Error() {
    return <React.Fragment>
        <div className="error404">
    <div className="moon"></div>
<div className="moon__crater moon__crater1"></div>
<div className="moon__crater moon__crater2"></div>
<div className="moon__crater moon__crater3"></div>

<div className="star star1"></div>
<div className="star star2"></div>
<div className="star star3"></div>
<div className="star star4"></div>
<div className="star star5"></div>

<div className="error">
  <div className="error__title">404</div>
  <div className="error__subtitle">Hmmm...</div>
  <div className="error__description">Error</div>
</div>
</div>
</React.Fragment>
};

export default Error;