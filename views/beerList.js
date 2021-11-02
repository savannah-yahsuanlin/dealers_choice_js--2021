const timeAgo = require("node-time-ago");

module.exports = posts => `<!DOCTYPE html>
  <html>
  <head>
    <title>Beer</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="beer-list">
      <header>Beer</header>
      ${posts.map(post =>`
        <div class='beer-item'>
          <p class="beer-top">
            <span class="beer-position">${post.id}</span>
            <span class="label">Beer Name: <a href="/posts/${post.id}">${post.name}</a></span>
            <span>(by ${post.contributed_by})</span>
          </p>
			<div class="img-box">
				<img class="beer-img" src="${post.image_url}">
			</div>
			<div class="beer-content">
				<p class="news-info">
					<p><span class="label">First Brewed:</span> ${timeAgo(post.first_brewed)}</p>
					<p><span class="label">PH: </span>${post.ph}</p>
					<p><span class="label">Highlight: </span>${post.tagline}</p>
				</p>
			</div>
		</div>`
      )}
    </div>
  </body>
  </html>`;

