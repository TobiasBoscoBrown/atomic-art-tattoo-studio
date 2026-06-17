/* Atomic Art Tattoo Studio - shared data + renderers (identical header/footer on every page) */
(function () {
  const BIZ = {
    name: "Atomic Art Tattoo Studio",
    tagline: "Award winning custom tattooing in Nampa",
    phone: "(208) 466-8710",
    phoneRaw: "+12084668710",
    consultName: "Brenda LuWho",
    consultPhone: "(208) 250-0564",
    consultPhoneRaw: "+12082500564",
    address: "3619 Garrity Blvd",
    city: "Nampa",
    state: "ID",
    zip: "83687",
    rating: "5.0",
    reviews: 78,
    years: "25",
    maps: "https://www.google.com/maps/place/Atomic+Art+Tattoo+Studio/@43.5901306,-116.5259148,17z/data=!4m8!3m7!1s0x54ae4db1afb28d71:0xa14b9e7e785f7c0b!8m2!3d43.5901306!4d-116.5259148!9m1!1b1",
    ig: "https://www.instagram.com/atomic_art_tattoo/",
    fb: "https://www.facebook.com/people/Atomic-Art-Tattoo-Award-Winning-Custom-Tattooing/",
    hours: [
      ["Sunday", "Closed"],
      ["Monday", "Closed"],
      ["Tuesday", "11:00 AM to 6:00 PM"],
      ["Wednesday", "11:00 AM to 6:00 PM"],
      ["Thursday", "11:00 AM to 6:00 PM"],
      ["Friday", "11:00 AM to 7:00 PM"],
      ["Saturday", "11:00 AM to 7:00 PM"]
    ]
  };
  window.BIZ = BIZ;

  const ICONS = {
    needle: '<path d="M3 21l6-6m0 0l8.5-8.5a2.1 2.1 0 1 1 3 3L12 18m-3-3l3 3"/><path d="M15 6l3 3"/>',
    palette: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.6-.2-1.1-.6-1.5-.4-.4-.6-.9-.6-1.5 0-1.1.9-2 2-2h2.4A4.2 4.2 0 0 0 22 9.4 10 10 0 0 0 12 2z"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v5h-5"/>',
    arm: '<path d="M6 3v6a4 4 0 0 0 4 4h1a3 3 0 0 1 3 3v5"/><path d="M18 3v4a6 6 0 0 1-6 6"/>',
    line: '<path d="M4 12h16"/><circle cx="4" cy="12" r="1.4"/><circle cx="20" cy="12" r="1.4"/>',
    star: '<path d="M12 2l2.9 6.2 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.9l1.2-6.6L2.5 9.7l6.6-.9z"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    spark: '<path d="M12 2v6m0 8v6M2 12h6m8 0h6M5 5l4 4m6 6l4 4m0-14l-4 4m-6 6l-4 4"/>',
    pin: '<path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'
  };
  function svg(name, cls) {
    return '<svg class="' + (cls || 'w-6 h-6') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }
  window.svg = svg;

  const SERVICES = [
    {
      slug: "custom-tattoos", icon: "needle", title: "Custom Tattoos",
      blurb: "Original art drawn for you from scratch, never flash off a wall.",
      good: "First timers and collectors who want a one of a kind piece with meaning.",
      time: "Most pieces run one to four hours; larger work is split across sessions.",
      includes: ["A sit down design consult", "Your own reference folder", "A hand drawn stencil", "Single use, fully sterilized equipment"],
      detail: "Every tattoo at Atomic Art starts as a blank page. Brian sits with you, listens to the idea, pulls your references into a folder and draws something built only for your body and your story. Nothing here is traced off a binder. You see the art and approve it before a single line goes in."
    },
    {
      slug: "color-realism", icon: "palette", title: "Color and Realism",
      blurb: "Vivid color, portraits and photoreal pieces that hold up for decades.",
      good: "Nature, animal and portrait lovers who want depth, saturation and life.",
      time: "Realism pieces are usually multi hour and often planned over a few sittings.",
      includes: ["Color theory matched to your skin", "Saturation built to age well", "Reference and mock up review", "Aftercare plan to protect the color"],
      detail: "From a hummingbird mid flight to a full color portrait, Atomic Art is known across the Treasure Valley for color that stays bold years later. Brian builds saturation in layers and matches the palette to your skin tone so the piece reads clearly long after it heals."
    },
    {
      slug: "cover-ups", icon: "refresh", title: "Cover Ups and Reworks",
      blurb: "Turn an old, crooked or faded tattoo into something you are proud of.",
      good: "Anyone living with a tattoo they regret or a piece that needs fixing.",
      time: "Cover ups vary widely; you get an honest plan at your free consult.",
      includes: ["Honest assessment of what is possible", "A design that truly hides the old ink", "Reworks of lines and color", "A clear, no pressure plan"],
      detail: "A cover up is part art and part engineering. Brian has spent decades reworking crooked lines and burying old ink under new designs that actually hold up. You get a straight answer about what can and cannot be done, then a piece built to make you forget the old one was ever there."
    },
    {
      slug: "sleeves", icon: "arm", title: "Sleeves and Large Scale",
      blurb: "Half sleeves, full sleeves, backs and legs planned as one flowing piece.",
      good: "Collectors ready to commit to a large, connected body of work.",
      time: "Booked across multiple sessions over weeks or months as a single project.",
      includes: ["A full layout that flows with your body", "Session by session roadmap", "Consistent style and theme", "Your own project folder"],
      detail: "Big work deserves a real plan. Regulars describe building a sleeve with Brian as a ritual, returning session after session as the piece grows. Atomic Art maps the whole layout first so every sitting connects into one cohesive design instead of a pile of unrelated tattoos."
    },
    {
      slug: "fine-line", icon: "line", title: "Fine Line and Small Tattoos",
      blurb: "Delicate minimal pieces, first tattoos and matching ink done clean.",
      good: "First tattoos, fine line lovers and friends or family getting matching pieces.",
      time: "Small pieces are often done in a single short, relaxed appointment.",
      includes: ["Crisp, single needle line work", "A calm first timer friendly chair", "Placement and sizing guidance", "Matching sets for groups"],
      detail: "Small does not mean simple. Clean fine line work needs a steady hand and the right placement, and it is often where first timers and matching groups start. Brian has tattooed four friends in a row so they could watch each other go, then turned each idea into a tidy, lasting piece."
    }
  ];
  window.SERVICES = SERVICES;

  const REVIEWS = [
    { name: "Justin Payne", date: "4 months ago", text: "I've spent the past year building my “sock” with Brian at Atomic Art. He corrects me every time I call it a leg sleeve, and at this point it's part of the ritual." },
    { name: "Christian Shiverick", date: "3 months ago", text: "Brian and the team here are the absolute best. Incredibly comfortable environment, great vibes and they do the best work! Thanks Atomic!" },
    { name: "Dustin Cornell", date: "a year ago", text: "Can't rave enough! Brian was very thorough, kind, courteous, and made my first tattoo a great experience with fantastic artwork and detail." },
    { name: "Kelly Penner", date: "a year ago", text: "Amazing work. Great conversation. Had a finger tattoo Friday. Calling Monday for another. Very happy." },
    { name: "Colby Dillon", date: "8 years ago", text: "Brian was the only tattoo artist in the valley I went too that sat me down and made me my own folder and listened to what I wanted, made me feel at home." },
    { name: "Tracy Poff", date: "8 years ago", text: "Brian does AMAZING work!! He did a small piece on my arm about a year ago and I have gotten so many compliments on it. I decided to get a half sleeve and the work he has done so far is by far the best I have seen." },
    { name: "Brianna Shain", date: "8 years ago", text: "Brian has done most of may tattoo including a cover up and fixing a crocked tattoo from previous artistes (prior to Brian). All his artists are kind and curious. Very clean and great pricing for the best quality of work in the Treasure Valley." },
    { name: "Sarah Stroh", date: "8 years ago", text: "Amazing artists at affordable prices! They are professional and so friendly. Brian does all my work now and turns whatever I want into more than what I could have imagined. Fantastic experience every time :)" }
  ];
  window.REVIEWS = REVIEWS;

  function initials(n) { return n.split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase(); }

  function navLink(href, label, active) {
    const on = active === label ? "text-atomic" : "text-cream/75 hover:text-cream";
    return '<a href="' + href + '" class="' + on + ' transition-colors text-[13px] font-semibold tracking-wide uppercase">' + label + '</a>';
  }

  function atom(extra) {
    return '<span class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white overflow-hidden shrink-0 ' + (extra || '') + '"><img src="img/logo.png" alt="Atomic Tattoo logo" class="w-full h-full object-contain"></span>';
  }

  function renderHeader(active) {
    const el = document.getElementById("site-header");
    if (!el) return;
    el.innerHTML =
      '<div class="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-white/10">' +
        '<div class="max-w-6xl mx-auto px-4 sm:px-6">' +
          '<div class="flex items-center justify-between gap-3 h-16">' +
            '<a href="index.html" class="flex items-center gap-2.5 shrink-0">' + atom() +
              '<span class="font-display text-cream text-lg leading-none tracking-wide">ATOMIC ART<span class="block text-[9px] tracking-[0.3em] text-teal font-body font-semibold mt-0.5">TATTOO STUDIO</span></span>' +
            '</a>' +
            '<nav class="hidden md:flex items-center gap-6">' +
              navLink("index.html#work", "Work", active) +
              navLink("services.html", "Services", active) +
              navLink("index.html#reviews", "Reviews", active) +
              navLink("index.html#studio", "Studio", active) +
              navLink("blog.html", "Journal", active) +
            '</nav>' +
            '<div class="flex items-center gap-2 shrink-0">' +
              '<a href="tel:' + BIZ.phoneRaw + '" class="hidden sm:inline-flex items-center gap-1.5 text-cream/80 hover:text-cream text-[13px] font-semibold">' + svg('phone', 'w-4 h-4') + '<span class="hidden lg:inline">' + BIZ.phone + '</span></a>' +
              '<a href="tel:' + BIZ.phoneRaw + '" class="inline-flex items-center gap-2 bg-atomic hover:bg-atomic/90 text-white font-semibold text-[13px] px-3.5 py-2 rounded-full transition-colors whitespace-nowrap">Book a consult</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }
  window.renderHeader = renderHeader;

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    const hoursRows = BIZ.hours.map(function (h) {
      return '<div class="flex justify-between gap-4 py-1 border-b border-white/5"><span class="text-cream/60">' + h[0] + '</span><span class="text-cream/90 font-medium">' + h[1] + '</span></div>';
    }).join("");
    el.innerHTML =
      '<footer class="bg-[#0e0f14] border-t border-white/10">' +
        '<div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">' +
          '<div>' +
            '<div class="flex items-center gap-2.5 mb-4">' + atom() +
              '<span class="font-display text-cream text-lg tracking-wide">ATOMIC ART</span>' +
            '</div>' +
            '<p class="text-cream/60 text-sm leading-relaxed">Award winning custom tattooing in Nampa, Idaho. Original designs, color, realism and cover ups, drawn for you and built to last over ' + BIZ.years + ' years.</p>' +
            '<div class="flex items-center gap-3 mt-5">' +
              '<a href="' + BIZ.ig + '" target="_blank" rel="noopener" aria-label="Instagram" class="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/70 hover:text-atomic hover:border-atomic transition-colors"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>' +
              '<a href="' + BIZ.fb + '" target="_blank" rel="noopener" aria-label="Facebook" class="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/70 hover:text-atomic hover:border-atomic transition-colors"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg></a>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-display text-cream text-base tracking-wide mb-4">Visit the studio</h4>' +
            '<a href="' + BIZ.maps + '" target="_blank" rel="noopener" class="flex items-start gap-2 text-cream/70 hover:text-cream text-sm mb-2">' + svg('pin', 'w-4 h-4 mt-0.5 text-atomic') + '<span>' + BIZ.address + '<br>' + BIZ.city + ', ' + BIZ.state + ' ' + BIZ.zip + '</span></a>' +
            '<a href="tel:' + BIZ.phoneRaw + '" class="flex items-center gap-2 text-cream/70 hover:text-cream text-sm mb-2">' + svg('phone', 'w-4 h-4 text-atomic') + BIZ.phone + '</a>' +
            '<p class="text-cream/50 text-xs mt-3 leading-relaxed">Appointment only. Free consultations. Text ' + BIZ.consultName + ' at ' + BIZ.consultPhone + ' to set one up.</p>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-display text-cream text-base tracking-wide mb-4">Hours</h4>' +
            '<div class="text-sm">' + hoursRows + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="border-t border-white/10">' +
          '<div class="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/45">' +
            '<span>&copy; ' + new Date().getFullYear() + ' ' + BIZ.name + '. All rights reserved.</span>' +
            '<span>Nampa, Idaho &middot; ' + BIZ.rating + ' stars from ' + BIZ.reviews + ' Google reviews</span>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }
  window.renderFooter = renderFooter;

  function reviewCard(r) {
    return '<figure class="shrink-0 w-[320px] bg-panel border border-white/10 rounded-2xl p-6 flex flex-col">' +
      '<div class="flex items-center gap-3 mb-3">' +
        '<span class="w-10 h-10 rounded-full bg-atomic/15 text-atomic font-display text-sm flex items-center justify-center">' + initials(r.name) + '</span>' +
        '<div><div class="text-cream font-semibold text-sm leading-tight">' + r.name + '</div><div class="text-cream/45 text-xs">' + r.date + '</div></div>' +
        '<svg class="w-5 h-5 ml-auto" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h6c-.3 1.4-1 2.5-2.2 3.3v2.8h3.6c2.1-2 3.2-4.9 3.2-7.9z"/><path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.7l-3.6-2.8c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.9C4.1 20.8 7.8 23 12 23z"/><path fill="#FBBC05" d="M6 14.2c-.2-.7-.4-1.4-.4-2.2s.1-1.5.4-2.2V6.9H2.3C1.5 8.4 1 10.1 1 12s.5 3.6 1.3 5.1L6 14.2z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1C17.4 2.1 14.9 1 12 1 7.8 1 4.1 3.2 2.3 6.9L6 9.8c.9-2.5 3.2-4.4 6-4.4z"/></svg>' +
      '</div>' +
      '<div class="text-gold text-sm mb-2 tracking-wide">&#9733;&#9733;&#9733;&#9733;&#9733;</div>' +
      '<blockquote class="text-cream/80 text-sm leading-relaxed">' + r.text + '</blockquote>' +
    '</figure>';
  }
  window.reviewCard = reviewCard;

  function renderCarousel() {
    const el = document.getElementById("reviews-carousel");
    if (!el) return;
    const cards = REVIEWS.map(reviewCard).join("");
    el.innerHTML = '<div class="carousel-track flex gap-5 w-max">' + cards + cards + '</div>';
  }
  window.renderCarousel = renderCarousel;

  function reviewsBlock(list) {
    return '<div class="grid gap-5 sm:grid-cols-3">' + list.map(function (r) {
      return '<figure class="bg-panel border border-white/10 rounded-2xl p-5 flex flex-col h-full">' +
        '<div class="text-gold text-sm mb-2">&#9733;&#9733;&#9733;&#9733;&#9733;</div>' +
        '<blockquote class="text-cream/80 text-sm leading-relaxed flex-1">' + r.text + '</blockquote>' +
        '<figcaption class="mt-3 text-cream/55 text-xs font-semibold">' + r.name + ' &middot; ' + r.date + '</figcaption>' +
      '</figure>';
    }).join("") + '</div>';
  }
  window.reviewsBlock = reviewsBlock;

  function renderServiceCards() {
    const el = document.getElementById("service-cards");
    if (!el) return;
    el.innerHTML = SERVICES.map(function (s) {
      return '<a href="service-' + s.slug + '.html" class="group flex flex-col h-full bg-panel border border-white/10 hover:border-atomic/60 rounded-2xl p-6 transition-colors">' +
        '<span class="w-12 h-12 rounded-xl bg-atomic/12 text-atomic flex items-center justify-center mb-4">' + svg(s.icon, 'w-6 h-6') + '</span>' +
        '<h3 class="font-display text-cream text-lg tracking-wide mb-2">' + s.title + '</h3>' +
        '<p class="text-cream/65 text-sm leading-relaxed flex-1">' + s.blurb + '</p>' +
        '<span class="mt-4 inline-flex items-center gap-1.5 text-atomic text-sm font-semibold">See this service <span class="group-hover:translate-x-1 transition-transform">&rarr;</span></span>' +
      '</a>';
    }).join("");
  }
  window.renderServiceCards = renderServiceCards;

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader(window.__active);
    renderFooter();
    renderCarousel();
    renderServiceCards();
  });
})();
