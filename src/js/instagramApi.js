import { instagramMedia } from "./selectors.js";

const ACCESS_TOKEN = "3570871508.f16a386.1c99bf54785545738360e2e9f7843edb";
const URL = "https://api.instagram.com/v1/users/self/media/recent/";

const applyContent = data => {
  const content = data.map(({ images, caption }) => {
    return {
      image: images.standard_resolution.url,
      description: caption.text
    };
  });

  let htmlContent = "";
  content.forEach(({ image, description }) => {
    htmlContent += `
    <div class="gallery__image">
      <img class="materialboxed" width="300" src="${image}" data-caption="${description}">
    </div>
    `;
  });
  instagramMedia.innerHTML = `
  <div>
     <div class="gallery">
       ${htmlContent}
     </div>
  </div>
  `;

  const materialboxed = document.querySelectorAll(".materialboxed");
  M.Materialbox.init(materialboxed);
};

export const instagramContent = () => {
  fetch(`${URL}?access_token=${ACCESS_TOKEN}&count=12`, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(result => {
      const { meta, data } = result;
      if (meta.code === 200 && data) {
        applyContent(data);
      }
    });
};
