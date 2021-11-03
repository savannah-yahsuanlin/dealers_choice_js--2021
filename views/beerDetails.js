const timeAgo = require("node-time-ago");

module.exports = (post) => 
`<!DOCTYPE html>
<html>
<head>
  <title>Beer Details</title>
  <link rel="stylesheet" href="/detail.css"/>
</head>
<body>
  <div class="beer-list">
		<button type="submit"><a href="/"><< Go Back</a></button>
    	<header>Beer</header>
			<img class="beer-img" src="${post.image_url}">
		<div class='beer-item'>
			<p><span class="subtitle">Beer Name: </span>${post.name}</p>
			<p><span class="subtitle">Description: </span>${post.description}</p>
			<p><span class="subtitle">First Brewed: </span>${post.first_brewed}</p>
			<p><span class="subtitle">PH: </span>${post.ph}</p>
			<p><span class="subtitle">Food Pairing: </span>${post.food_pairing}</p>
			<p><span class="subtitle">Brewers: </span>${post.brewers_tips}</p>
			<p><span class="subtitle">Highlight: </span>${post.tagline}</p>
		</div>
  </div>
</body>
</html>`;