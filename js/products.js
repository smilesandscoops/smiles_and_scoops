function renderProducts(containerId, items) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var waBase = 'https://wa.me/919883432643?text=';
  var igUrl = 'https://www.instagram.com/smiles_and_scoops';

  container.innerHTML = '';

  items.forEach(function (item) {
    var waMessage =
      "Hi Smiles & Scoops, I'd like to order the " + item.name + ".";

    var card = document.createElement('div');
    card.className = 'product-card';

    /*
     * If an image is provided in bracelets.html,
     * use that image.
     *
     * If no image is provided, use a simple placeholder.
     */
    var imageSrc = item.image
      ? item.image
      : 'https://placehold.co/500x500/f3b9a4/2b2420?text=Photo';

    card.innerHTML =
      '<img class="product-img" loading="lazy" src="' + imageSrc + '" alt="' + item.name + '" />' +
      '<div class="product-info">' +
        '<h3></h3>' +
        '<p class="price"></p>' +
        (item.desc ? '<p class="desc"></p>' : '') +
        '<div class="order-actions">' +
          '<a target="_blank" rel="noopener" class="btn btn-ig btn-small">Order via IG</a>' +
          '<a target="_blank" rel="noopener" class="btn btn-wa btn-small">Order via WhatsApp</a>' +
        '</div>' +
      '</div>';

    card.querySelector('h3').textContent = item.name;
    card.querySelector('.price').textContent =
      item.price || 'Price on request';

    if (item.desc) {
      card.querySelector('.desc').textContent = item.desc;
    }

    var links = card.querySelectorAll('.order-actions a');

    links[0].href = igUrl;
    links[1].href = waBase + encodeURIComponent(waMessage);

    /*
     * If the image fails to load, show the placeholder instead.
     */
    var productImage = card.querySelector('.product-img');

    productImage.onerror = function () {
      this.onerror = null;
      this.src =
        'https://placehold.co/500x500/f3b9a4/2b2420?text=Photo';
    };

    container.appendChild(card);
  });
}