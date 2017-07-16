import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <div className="about">
          <div className="iconAttribution">Icons made by
            <a href="http://www.freepik.com" title="Freepik">
              Freepik
            </a>
            from
            <a href="http://www.flaticon.com" title="Flaticon">
              www.flaticon.com
            </a>
            is licensed by
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">
              CC 3.0 BY</a>
          </div>
          <hr/>
          <a rel="nofollow" href="https://www.vecteezy.com/">Vector Art by Vecteezy!</a>
        </div>
      </div>
    )
  }
}
