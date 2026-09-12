document.addEventListener('DOMContentLoaded', function() {
  var IMG_DIR = 'assets/images/';
  var COMMUNITY_DIR = IMG_DIR + 'Community_Engagement_Events/';
  var EVENTS_DIR = IMG_DIR + 'events/';

  // To add a new photo: drop the file in the matching folder above, then
  // add an entry to the matching gallery below with a short caption. The
  // card's "+N photos" badge and the lightbox update automatically.
  var galleries = {
    launch: [
      { dir: EVENTS_DIR, src: 'Campaign_Launch_Community_Meeting_1.jpg', caption: 'Anthony addresses the crowd at the campaign launch community meeting.' },
      { dir: EVENTS_DIR, src: 'Campaign_Launch_Community_Meeting_2.jpg', caption: 'Supporters gather at the campaign office for the launch discussion.' },
      { dir: EVENTS_DIR, src: 'Campaign_Launch_Community_Meeting_3.jpg', caption: 'Anthony shares his vision on video with supporters at the launch event.' }
    ],
    business: [
      { dir: COMMUNITY_DIR, src: 'Anthony_supporting_business_owners.jpg', caption: 'Anthony showing his support for local business owners.' },
      { dir: COMMUNITY_DIR, src: 'Anthony_at_fatrabbit_restaurant.jpg', caption: 'Anthony visiting Fat Rabbit Restaurant to hear from the owners.' },
      { dir: COMMUNITY_DIR, src: 'anthony_pitching_to_a_restaurant_ownwer.jpg', caption: 'Anthony sharing his vision with a local restaurant owner.' },
      { dir: COMMUNITY_DIR, src: 'Anthony_having_conversation_with_business_ownwer_office.jpg', caption: 'Anthony meeting with a business owner at their office.' },
      { dir: COMMUNITY_DIR, src: 'community_events_for_business_owners_1.jpg', caption: 'Anthony at a community event connecting with business owners.' },
      { dir: COMMUNITY_DIR, src: 'community_events_for_business_owners_2.jpg', caption: 'Anthony at a community event connecting with business owners.' },
      { dir: COMMUNITY_DIR, src: 'community_events_for_business_owners_3.jpg', caption: 'Anthony at a community event connecting with business owners.' },
      { dir: COMMUNITY_DIR, src: 'community_events_for_business_owners_4.jpg', caption: 'Anthony at a community event connecting with business owners.' },
      { dir: COMMUNITY_DIR, src: 'community_events_for_business_owners_5.jpg', caption: 'Anthony at a community event connecting with business owners.' },
      { dir: COMMUNITY_DIR, src: 'community_events_for_business_owners_6.jpg', caption: 'Anthony at a community event connecting with business owners.' }
    ],
    canvassing: [
      { dir: COMMUNITY_DIR, src: 'Anthony_on_the_street_of_downtown_speaking_to_resident.jpg', caption: 'Anthony speaking with a resident in downtown St. Catharines.' },
      { dir: COMMUNITY_DIR, src: 'anthony_on_the_street_of_grantham_ward_5.jpg', caption: 'Anthony canvassing the streets of Grantham, Ward 5.' },
      { dir: COMMUNITY_DIR, src: 'anthony_on_the_street_listening_to_homeless_lady.jpg', caption: 'Anthony taking time to listen to a resident experiencing homelessness.' }
    ],
    community: [
      { dir: COMMUNITY_DIR, src: 'Anthony_with_families.jpg', caption: 'Anthony connecting with families in the community.' },
      { dir: COMMUNITY_DIR, src: 'Anthony_conversing_at_Niagara_arborigional_center.jpg', caption: 'Anthony in conversation at the Niagara Regional Native Centre.' },
      { dir: COMMUNITY_DIR, src: 'Anthony_donating_clothings_to_salvationArmy.jpg', caption: 'Anthony donating clothing to the Salvation Army.' },
      { dir: COMMUNITY_DIR, src: 'Community_a.jpg', caption: 'Anthony connecting with residents at a community street festival.' },
      { dir: COMMUNITY_DIR, src: 'Community_event_at_Niagara-falls.jpg', caption: 'Anthony out meeting residents and community groups.' }
    ],
    faith: [
      { dir: COMMUNITY_DIR, src: 'Anthony_at_st.catharines_mosque_supporting_tent_setup.jpg', caption: 'Anthony helping set up for an event at the St. Catharines Mosque.' },
      { dir: COMMUNITY_DIR, src: 'Anthony_having_conversation_at_central_church.jpg', caption: 'Anthony speaking with members of Central Church.' },
      { dir: COMMUNITY_DIR, src: 'Community_Jesus-festival.jpg', caption: 'Anthony engaging with community members at a faith-based outreach event.' }
    ],
    meeting: [
      { dir: COMMUNITY_DIR, src: 'Community_speaker.jpg', caption: 'Anthony speaking with community members on health, wellness, and building stronger support systems.' },
      { dir: COMMUNITY_DIR, src: 'Speaker_at_a_Community_event.jpg', caption: 'Anthony addressing attendees at a community speaking engagement.' }
    ]
  };

  var lightbox = document.getElementById('galleryLightbox');
  var imgEl = document.getElementById('galleryLightboxImg');
  var captionEl = document.getElementById('galleryLightboxCaption');
  var counterEl = document.getElementById('galleryLightboxCounter');
  var closeBtn = document.getElementById('galleryLightboxClose');
  var prevBtn = document.getElementById('galleryLightboxPrev');
  var nextBtn = document.getElementById('galleryLightboxNext');
  if (!lightbox || !imgEl) return;

  var activePhotos = [];
  var currentIndex = 0;

  function show(index) {
    if (!activePhotos.length) return;
    currentIndex = (index + activePhotos.length) % activePhotos.length;
    var photo = activePhotos[currentIndex];
    imgEl.src = photo.dir + photo.src;
    imgEl.alt = photo.caption;
    captionEl.textContent = photo.caption;
    counterEl.textContent = (currentIndex + 1) + ' / ' + activePhotos.length;
  }

  function open(photos, index) {
    activePhotos = photos;
    show(index);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.event-photo--gallery').forEach(function(cover) {
    var key = cover.dataset.gallery;
    var photos = galleries[key] || [];
    var badge = cover.querySelector('.gallery-count-badge');
    if (badge) {
      var extra = photos.length - 1;
      badge.textContent = extra > 0 ? ('+' + extra + ' photo' + (extra === 1 ? '' : 's')) : '';
      badge.hidden = extra <= 0;
    }
    if (!photos.length) return;

    cover.setAttribute('tabindex', '0');
    cover.setAttribute('role', 'button');
    cover.setAttribute('aria-label', 'View photo gallery');
    cover.addEventListener('click', function() { open(photos, 0); });
    cover.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(photos, 0); }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn) prevBtn.addEventListener('click', function() { show(currentIndex - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function() { show(currentIndex + 1); });

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });
});
