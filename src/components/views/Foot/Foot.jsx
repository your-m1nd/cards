import React from 'react';
import githubIcon from './github__icon.png';
import './Foot.scss';

function Foot() {

    return <footer>
          <div className="footer-author">
            <img
              className="footer-author__github-icon"
              src={githubIcon}
              alt="github icon"
            />
            <a href="https://github.com/your-m1nd" target="#blank">Viktoria</a>
          </div>
      </footer>;
  }


export default Foot;