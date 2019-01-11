window.loading_screen = window.pleaseWait({
    logo: "https://dewey.tailorbrands.com/production/brand_version_mockup_image/969/1573016969_2f91ff63-3035-41da-a665-d1efd145bc1b.png?cb=1547190880",
    backgroundColor: 'rgb(128,0,0)',
    loadingHtml: "<div class='sk-folding-cube'><div class='sk-cube1 sk-cube'></div><div class='sk-cube2 sk-cube'></div><div class='sk-cube4 sk-cube'></div><div class='sk-cube3 sk-cube'></div></div><p class='loading-message'>Jesus said to him: I am the way, and the truth, and the life; no one comes to the Father, but by me. | Jhon 14:6</p>"
});

setTimeout(() => {
    window.loading_screen.finish();
}, 4000);
