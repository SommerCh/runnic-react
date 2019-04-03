import React, { Component } from 'react';



class App4 extends Component {
render() {
return (
<div>
  <section id="s4">

    <img id="map" src="img/map.JPG" alt="" />

    <aside id="aside4">
      <h4>CONTACT</h4>
    </aside>

    <address><img id="udklip4" src="img/Udklip3.PNG" alt="" /></address>
    <div id="right">
      <h5>SEND EN BESKED</h5>
      <form action="/action_page.php">

        <p>NAVN: </p>
        <input className="formInput" type="text" />

        <p>EMAIL: </p>
        <input className="formInput" type="text" />

        <p>TELEFONNR.: </p>
        <input className="formInput" type="number" />

        <p>BESKED: </p>
        <textarea  rows=" 5" cols="30"></textarea>
        <button id="sub" type="submit">SEND BESKED</button>

      </form>


    </div>





  </section>
</div>
);
}
}

export default App4;