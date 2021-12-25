import React from 'react'
import './style/Input.scss';
function Input() {
    return (
        <>
            <div class="row">
  <p>Click every input.</p>
</div>
<div class="row">
  <span>
    <input class="basic-slide" id="name" type="text" placeholder="Your best name" /><label for="name">Name</label>
  </span>
  <span>
    <input class="basic-slide" id="email" type="text" placeholder="Your favorite email" /><label for="email">Email</label>
  </span>
  <span>
    <input class="basic-slide" id="phone" type="text" placeholder="You can trust us" /><label for="phone">Phone</label>
  </span>
</div>
<div class="row">
  <span>
    <input class="clean-slide" id="age" type="text" placeholder="Go for the high score!" /><label for="age">Age</label>
  </span>
  <span>
    <input class="clean-slide" id="height" type="text" placeholder="Heels count" /><label for="height">Height</label>
  </span>
  <span>
    <input class="clean-slide" id="weight" type="text" placeholder="Go ahead and lie" /><label for="weight">Weight</label>
  </span>
</div>
<div class="row">
  <span>
    <input class="gate" id="class" type="text" placeholder="Wizard!" /><label for="class">Class</label>
  </span>
  <span>
    <input class="gate" id="element" type="text" placeholder="Five to choose from" /><label for="element">Element</label>
  </span>
  <span>
    <input class="gate" id="move" type="text" placeholder="Secret book attack!" /><label for="move">Move</label>
  </span>
</div>
<div class="row">
  <span>
    <input class="skinny" id="english" type="text" placeholder="Do you speak it?" /><label for="english">English</label>
  </span>
  <span>
    <input class="skinny" id="burger" type="text" placeholder="A Royale with cheese?" /><label for="burger">Burger</label>
  </span>
  <span>
    <input class="skinny" id="wallet" type="text" placeholder="Bad Mother****er" /><label for="wallet">Wallet</label>
  </span>
</div>
<div class="row">
  <span>
    <input class="slide-up" id="card" type="text" placeholder="Fund me!" /><label for="card">Credit Card</label>
  </span>
  <span>
    <input class="slide-up" id="expires" type="text" placeholder="Month Day, Year" /><label for="expires">Expires</label>
  </span>
  <span>
    <input class="slide-up" id="security" type="text" placeholder="Public" /><label for="security">Security Code</label>
  </span>
</div>
<div class="row">
  <span>
    <input class="card-slide" id="knock" type="text" placeholder="Who's there?" /><label for="knock">Knock knock</label>
  </span>
  <span>
    <input class="card-slide" id="max" type="text" placeholder="Max who?" /><label for="max">Max</label>
  </span>
  <span>
    <input class="card-slide" id="out" type="text" placeholder="Sunuva..." /><label for="out">Maxed out card ;)</label>
  </span>
</div>
<div class="row">
  <span>
    <input class="swing" id="artist" type="text" placeholder="BO$$" /><label for="artist">Artist</label>
  </span>
  <span>
    <input class="swing" id="song" type="text" placeholder="I don't give a ****" /><label for="song">Song</label>
  </span>
  <span>
    <input class="swing" id="eyes" type="text" placeholder="Crazy" /><label for="eyes">Eyes</label>
  </span>
</div>
<div class="row">
  <span>
    <input class="balloon" id="state" type="text" placeholder="Liquid, solid, gaseous..." /><label for="state">State</label>
  </span>
  <span>
    <input class="balloon" id="planet" type="text" placeholder="Probably Earth" /><label for="planet">Planet</label>
  </span>
  <span>
    <input class="balloon" id="galaxy" type="text" placeholder="Milky Way?" /><label for="galaxy">Galaxy</label>
  </span>
</div>
        </>
    )
}

export default Input
