const images = [
  {
    preview: 'https://picsum.photos/id/1011/300/200',
    original: 'https://picsum.photos/id/1011/1200/800',
    description: 'Mountain landscape',
  },
  {
    preview: 'https://picsum.photos/id/1015/300/200',
    original: 'https://picsum.photos/id/1015/1200/800',
    description: 'Forest and lake',
  },
  {
    preview: 'https://picsum.photos/id/1024/300/200',
    original: 'https://picsum.photos/id/1024/1200/800',
    description: 'Sea coast',
  },
  {
    preview: 'https://picsum.photos/id/1035/300/200',
    original: 'https://picsum.photos/id/1035/1200/800',
    description: 'River in mountains',
  },
  {
    preview: 'https://picsum.photos/id/1043/300/200',
    original: 'https://picsum.photos/id/1043/1200/800',
    description: 'Foggy forest',
  },
  {
    preview: 'https://picsum.photos/id/1050/300/200',
    original: 'https://picsum.photos/id/1050/1200/800',
    description: 'Desert road',
  },
  {
    preview: 'https://picsum.photos/id/1069/300/200',
    original: 'https://picsum.photos/id/1069/1200/800',
    description: 'Snowy mountains',
  },
  {
    preview: 'https://picsum.photos/id/1074/300/200',
    original: 'https://picsum.photos/id/1074/1200/800',
    description: 'Green hills',
  },
  {
    preview: 'https://picsum.photos/id/1084/300/200',
    original: 'https://picsum.photos/id/1084/1200/800',
    description: 'Ocean waves',
  },
];

const galleryList = document.querySelector('.gallery');

const galleryMarkup = images
  .map(({ preview, original, description }) =>
    `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
)
  .join('');
  
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);


galleryList.addEventListener('click', event => {
  if (!event.target.classList.contains('gallery-image')) {
    return;
  }
  event.preventDefault();
  const largeImageURL = event.target.dataset.source;
  const altText = event.target.alt;
  console.log(largeImageURL);
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" 
    alt="${altText}">
  `);
  instance.show();

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', handleKeyDown);
    }
  }
  document.addEventListener('keydown', handleKeyDown);
})

