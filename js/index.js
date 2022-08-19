let page = 1,
  prev_page = 1,
  max_pages = 11;

function setup() {
  document.getElementById("main").addEventListener("scroll", (e) => {
    let left = document.getElementById("main").scrollLeft;
    let page_width = document.getElementById("main").clientWidth;

    page = Math.round(left / page_width) + 1;

    if (page != prev_page) {
      scroll();
    }
  });
}

function scroll() {
  prev_page = page;

  document
    .getElementById("prev-btn")
    .setAttribute("href", `#content-page-${page - 1}`);
  document
    .getElementById("next-btn")
    .setAttribute("href", `#content-page-${page + 1}`);

  // set dots and lines
  for (let i = 1; i <= max_pages; i++) {
    if (i <= page) {
      document.getElementById(`dot-${i}`).classList.add("active");
    } else {
      document.getElementById(`dot-${i}`).classList.remove("active");
    }

    if (i > 1) {
      if (i <= page) {
        document.getElementById(`line-${i - 1}`).classList.add("active");
      } else {
        document.getElementById(`line-${i - 1}`).classList.remove("active");
      }
    }
  }
}

function generate_thumbnail_url() {
  let val = document.getElementById("page-8-thumbnail-raw").value;

  if (val.includes("/view")) val = val.split("/view")[0];
  let out = val.replace("drive.google.com/file", "lh3.googleusercontent.com");

  document.getElementById("page-8-thumbnail-edited").value = out;
  document.getElementById("page-8-thumbnail-preview").setAttribute("src", out);
}

function generate_fb_url() {
  let sample =
    '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FTheGUIDON%2Fvideos%2F1134040530481443%2F&show_text=false&width=476&t=0" width="476" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>';

  let val = document.getElementById("page-9-fb-raw").value;
  let out = val.split('src="')[1].split('"')[0];

  document.getElementById("page-9-fb-edited").value = out;
  document.getElementById("page-9-fb-preview").setAttribute("src", out);
}

function generate_yt_url() {
  let sample =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/5mwLaIIX7rQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  let val = document.getElementById("page-9-yt-raw").value;
  let out = val.split('src="')[1].split('"')[0];

  document.getElementById("page-9-yt-edited").value = out;
  document.getElementById("page-9-yt-preview").setAttribute("src", out);
}

function generate_spotify_url() {
  let sample =
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/1KSBjh2ToyRWDihH28v02g?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';

  let val = document.getElementById("page-9-spotify-raw").value;
  let out = val.split('src="')[1].split('"')[0];

  document.getElementById("page-9-spotify-edited").value = out;
  document.getElementById("page-9-spotify-preview").setAttribute("src", out);
}
