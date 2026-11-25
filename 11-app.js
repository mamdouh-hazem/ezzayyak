(function () {
  var products = [
    { id: 'book', name: 'Ezzayyak? Your First Steps in Egyptian Arabic', sub: 'Main book, 46 pages, PDF + editable Word', price: 8.99, blurb: 'Part 0 letters and sounds, then 12 real-life units.' },
    { id: 'grammar', name: 'Ezzayyak? The Grammar Companion', sub: '23 pages, PDF + editable Word', price: 5.99, blurb: 'The patterns behind the sentences, in 11 short chapters.' },
    { id: 'bundle', name: 'The Two-Book Bundle', sub: 'Main book + Grammar Companion', price: 12.99, was: 14.98, blurb: 'Everything in the series, one price.' }
  ];
  var units = [['Part 0', 'Letters and Sounds'], ['1', 'Hello, Nice to Meet You'], ['2', 'Food and Restaurants'], ['3', 'Taxis and Getting Around'], ['4', 'Market and Prices'], ['5', 'Numbers and Money'], ['6', 'Neighbours'], ['7', 'Phone and Messages'], ['8', 'Doctor and Pharmacy'], ['9', 'At Work'], ['10', 'Being a Guest'], ['11', 'Compliments and Invitations'], ['12', 'Emergencies and Survival Phrases']];
  var chapters = ['Sounds and Spelling', 'Pronouns and the Verb "To Be"', 'Nouns, Plurals and "The"', 'Adjectives, "This" and Comparing', 'Possession and Having', 'The Present Tense', 'The Past Tense and Commands', 'The Future and Negation', 'Asking Questions', 'Prepositions, Numbers and Time', 'Joining Sentences and Speaking Politely'];
  var cart = [], open = false;
  var money = function (n) { return '$' + n.toFixed(2); };
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var ankh = function (size) { size = size || 28; return '<svg class="ez-ankh" width="' + size + '" height="' + size * 1.6 + '" viewBox="0 0 20 32" aria-hidden="true"><ellipse cx="10" cy="8" rx="5.5" ry="6.5" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M10 14.5V31M2 19.5H18" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" fill="none"/></svg>'; };
  var byId = function (id) { return products.filter(function (p) { return p.id === id; })[0]; };
  var buy = function (id, big) {
    var p = byId(id), inCart = cart.indexOf(id) > -1;
    return '<button type="button" class="ez-btn' + (big ? ' is-big' : '') + (inCart ? ' is-done' : '') + '" data-add="' + id + '">' + (inCart ? 'In your cart \u2713' : 'Add to cart \u00b7 ' + money(p.price)) + '</button>';
  };

  function home() {
    var strip = [['3 ways', 'on every line: Arabic, pronunciation, English'], ['12 units', "taxi, market, pharmacy, a friend's home"], ['10 min', 'a day is enough to keep going'], ['1 companion', 'for when you ask "why is it said like this?"']].map(function (x) { return '<div class="ez-strip-item"><strong>' + x[0] + '</strong><span>' + esc(x[1]) + '</span></div>'; }).join('');
    var cards = [['It teaches the Arabic people actually speak', 'Egyptian Arabic is the language of Cairo, Alexandria, the street, the shop and the family table, and of Egyptian films and songs. This book starts there instead of with formal Arabic.'], ['You can start reading before you know the letters', 'Every line has pronunciation in English letters. Begin with that, then look at the Arabic a little more each unit. Part 0 is there when you are ready for the script.'], ['One situation at a time', 'Each unit is a short dialogue you could really have: meeting someone, ordering kushari, haggling, calling a friend. Same parts every time, so you always know where you are.']].map(function (x) { return '<article class="ez-card"><h3>' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></article>'; }).join('');
    var prods = products.map(function (p) {
      return '<article class="ez-product' + (p.id === 'bundle' ? ' is-best' : '') + '">' + (p.id === 'bundle' ? '<span class="ez-badge">Best value</span>' : '') + '<h3>' + esc(p.name) + '</h3><p class="ez-sub">' + esc(p.sub) + '</p><p>' + esc(p.blurb) + '</p><p class="ez-price">' + money(p.price) + (p.was ? '<s>' + money(p.was) + '</s>' : '') + '</p>' + buy(p.id) + '</article>';
    }).join('');
    return '<section class="ez-hero"><div class="ez-hero-text"><p class="ez-kicker">Egyptian Arabic for beginners</p><div class="ez-title-ar" lang="ar" dir="rtl">\u0625\u0632\u0651\u064a\u0643\u061f</div><h1 class="ez-h1">Ezzayyak?</h1><p class="ez-lead">Your First Steps in Egyptian Arabic. Everyday conversations, written in Arabic script, pronunciation and English.</p><ul class="ez-ticks"><li>Part 0 teaches the letters and sounds</li><li>12 units, each one real situation</li><li>Answers to every practice, in the book</li></ul><div class="ez-buyrow">' + buy('book', true) + '<a class="ez-btn is-ghost is-big" href="#/inside">Look inside</a></div><p class="ez-fine">Digital edition: PDF plus editable Word file.</p></div><div class="ez-hero-art"><button class="ez-book" type="button" aria-label="Open the book and look inside"><span class="ez-book-pages"><img src="45-unit1.jpg" alt=""></span><span class="ez-book-cover"><img class="ez-cover" src="7-frontcover.jpg" alt="Cover of Ezzayyak? Your First Steps in Egyptian Arabic: a turquoise wooden door on a sand-coloured ground, with an ankh"></span></button><span class="ez-book-hint">Tap the book to open it</span></div></section>' +
      '<section class="ez-strip">' + strip + '</section>' +
      '<section class="ez-section"><div class="ez-head">' + ankh() + '<h2>Why this book</h2></div><div class="ez-grid3">' + cards + '</div><p class="ez-center"><a class="ez-textlink" href="#/why">Read the full story of why this book \u2192</a></p></section>' +
      '<section class="ez-section ez-dark"><div class="ez-split"><div><p class="ez-kicker is-gold">Inside every unit</p><h2>The same six parts, every time</h2><ol class="ez-steps"><li><b>Dialogue</b> a short scene with two voices</li><li><b>New words</b> in Arabic, pronunciation and English</li><li><b>Language note</b> one small pattern, explained plainly</li><li><b>Culture note</b> what Egyptians expect and why</li><li><b>Practice</b> exercises to try yourself</li><li><b>Answers</b> so you can check</li></ol></div><img class="ez-shot is-tilt" src="45-unit1.jpg" alt="Unit 1 page from the book: a dialogue between Ahmed and Sarah with Arabic, pronunciation and English"></div></section>' +
      '<section class="ez-section"><div class="ez-head">' + ankh() + '<h2>Choose your edition</h2></div><div class="ez-grid3">' + prods + '</div></section>';
  }
  function inside() {
    var figs = [['44-alphabet.jpg', 'Part 0: the alphabet, with the shapes of every letter, its sound in Egyptian and an example word.'], ['45-unit1.jpg', 'Unit 1: a dialogue. Arabic on top, pronunciation and English under each line.'], ['48-unit3.jpg', 'Unit 3: taxis and getting around. Every unit opens with what you will be able to do.'], ['47-grammar.jpg', 'Grammar Companion: a rule, a table and everyday examples.']].map(function (f) { return '<figure class="ez-fig"><img src="' + f[0] + '" alt="' + esc(f[1]) + '"><figcaption>' + esc(f[1]) + '</figcaption></figure>'; }).join('');
    var u = units.map(function (x) { return '<li><span>' + x[0] + '</span>' + esc(x[1]) + '</li>'; }).join('');
    var c = chapters.map(function (t, i) { return '<li><span>' + (i + 1) + '</span>' + esc(t) + '</li>'; }).join('');
    return '<section class="ez-page-head"><p class="ez-kicker">Look inside</p><h1 class="ez-h1 is-small">A few pages from the book</h1><p class="ez-lead">These are real pages from the main book, not mock-ups.</p></section><section class="ez-section"><div class="ez-pages">' + figs + '</div></section><section class="ez-section ez-sand2"><div class="ez-head">' + ankh() + '<h2>What is inside</h2></div><div class="ez-split is-top"><div><h3 class="ez-h3">The main book</h3><ul class="ez-toc">' + u + '</ul></div><div><h3 class="ez-h3">The Grammar Companion</h3><ul class="ez-toc">' + c + '</ul><p class="ez-fine">Each chapter has the rule, a table, examples from everyday life, a one-box Quick sheet, and questions with answers.</p></div></div></section>';
  }
  function why() {
    var items = [['Egyptian, not textbook Arabic', 'Most of the Arabic you hear in Egypt is not the formal language of the news. It is the spoken Egyptian of shops, taxis and homes. This book teaches that, from the first page.'], ['Three ways, always', 'Arabic script, pronunciation in English letters, and English. You never have to guess how a word sounds, and you are never forced to read script before you are ready.'], ['Real situations, not word lists', 'Greeting, food, taxis, markets, money, neighbours, phone calls, the doctor, work, being a guest, compliments, emergencies. Learn phrases you will use this week.'], ['Short on purpose', 'Each unit is small enough to finish in one sitting. The book says it plainly: ten minutes a day beats two hours on Sunday.'], ['Culture is part of the lesson', 'Every unit has a culture note. Why people answer "how are you?" with "thank God" even on a bad day. Who offers a hand first. The words matter, and so does how they land.'], ['Grammar when you want it', 'You do not need the grammar book to start. When a sentence surprises you, the Companion explains the pattern in a few clear pages.']].map(function (x, i) { return '<article class="ez-why-item"><span class="ez-num">' + (i + 1) + '</span><div><h3>' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></div></article>'; }).join('');
    return '<section class="ez-page-head"><p class="ez-kicker">Why this book</p><h1 class="ez-h1 is-small">A door, not a wall</h1><p class="ez-lead">Learning a new language can feel like standing outside a closed door. This book is written to open it, gently, on your first day.</p></section><section class="ez-section"><div class="ez-why">' + items + '</div></section><section class="ez-section ez-dark"><div class="ez-split"><div><p class="ez-kicker is-gold">Is it for you?</p><h2>Good fit if you are</h2><ul class="ez-ticks is-light"><li>Moving to Egypt, or already living there</li><li>Married to, or friends with, an Egyptian family</li><li>A student or traveller who wants to talk to people</li><li>Starting from zero, with no Arabic at all</li></ul><h3 class="ez-h3 is-light">Not the right book if</h3><p>You need formal written Arabic (the language of the news). This book teaches the everyday spoken language.</p></div><img class="ez-door" src="42-door.jpg" alt="The turquoise door from the book cover"></div></section><section class="ez-section ez-center"><h2>Ready to open the door?</h2><p class="ez-lead is-dark">Start with the main book. Add the Grammar Companion whenever you are curious why.</p><div class="ez-buyrow is-center">' + buy('book', true) + buy('bundle', true) + '</div></section>';
  }
  function cartPanel() {
    var lines = products.filter(function (p) { return cart.indexOf(p.id) > -1; });
    var total = lines.reduce(function (s, p) { return s + p.price; }, 0);
    var list = lines.length === 0 ? '<p class="ez-fine">Your cart is empty.</p>' : '<ul>' + lines.map(function (p) { return '<li><span>' + esc(p.name) + '</span><b>' + money(p.price) + '</b><button type="button" class="ez-link" data-remove="' + p.id + '">Remove</button></li>'; }).join('') + '</ul>';
    return '<aside class="ez-cart" aria-label="Your cart"><div class="ez-cart-top"><h3>Your cart</h3><button type="button" class="ez-x" data-close aria-label="Close cart">\u00d7</button></div>' + list + '<div class="ez-total"><span>Total</span><b>' + money(total) + '</b></div>' + (lines.length ? '<a class="ez-btn is-big ez-wa" target="_blank" rel="noopener" href="https://wa.me/201002809232?text=' + encodeURIComponent('Hello, I would like to order: ' + lines.map(function (p) { return p.name; }).join(' + ') + '. Please tell me how to pay.') + '">Order on WhatsApp</a>' : '<button type="button" class="ez-btn is-big" disabled>Add a book to order</button>') + '<p class="ez-fine">For now, orders and payment are arranged with the author on WhatsApp. Prices are placeholders until launch.</p></aside>';
  }
  function render() {
    var route = (location.hash || '#/').replace('#', '') || '/';
    var page = route === '/inside' ? inside() : route === '/why' ? why() : home();
    var nav = function (r, t) { return '<a href="#' + r + '"' + (route === r || (r === '/' && route !== '/inside' && route !== '/why') ? ' aria-current="page"' : '') + '>' + t + '</a>'; };
    document.getElementById('app').innerHTML = '<div class="ez-banner">Preview of the store \u00b7 Prices are placeholders</div><header class="ez-nav"><a href="#/" class="ez-brand">' + ankh(16) + '<span>Ezzayyak?</span></a><nav>' + nav('/', 'Store') + nav('/inside', 'Look inside') + nav('/why', 'Why this book') + '</nav><button type="button" class="ez-cartbtn" data-cart>Cart (' + cart.length + ')</button></header>' + (open ? cartPanel() : '') + '<main>' + page + '</main><footer class="ez-foot">' + ankh(18) + '<p><b>Ezzayyak?</b> Your First Steps in Egyptian Arabic</p><p class="ez-fine">Everyday conversations \u00b7 Script \u00b7 Pronunciation \u00b7 English</p></footer>';
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-add],[data-remove],[data-cart],[data-close]');
    if (!t) return;
    if (t.hasAttribute('data-add')) { var id = t.getAttribute('data-add'); if (cart.indexOf(id) < 0) cart.push(id); open = true; }
    else if (t.hasAttribute('data-remove')) { var r = t.getAttribute('data-remove'); cart = cart.filter(function (x) { return x !== r; }); }
    else if (t.hasAttribute('data-cart')) { open = !open; }
    else if (t.hasAttribute('data-close')) { open = false; }
    render();
  });
  document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('.ez-book');
  if (!b || b.classList.contains('is-open')) return;
  b.classList.add('is-open');
  setTimeout(function () { location.hash = '#/inside'; }, 1100);
});
window.addEventListener('hashchange', function () { open = false; render(); window.scrollTo(0, 0); });
  render();
})();
