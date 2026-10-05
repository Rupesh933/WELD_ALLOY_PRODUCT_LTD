(function ($) {
  'use strict';

  /* ---------- Mobile menu (slides in from the left) ---------- */
  var $menuToggle = $('#menuToggle');
  var $mobileMenu = $('#mobileMenu');
  var $menuOverlay = $('#menuOverlay');
  var $body = $('body');

  function openMenu() {
    $mobileMenu.addClass('open').attr('aria-hidden', 'false');
    $menuOverlay.addClass('show');
    $menuToggle.addClass('is-open').attr('aria-expanded', 'true');
    $body.addClass('menu-lock');
  }

  function closeMenu() {
    $mobileMenu.removeClass('open').attr('aria-hidden', 'true');
    $menuOverlay.removeClass('show');
    $menuToggle.removeClass('is-open').attr('aria-expanded', 'false');
    $body.removeClass('menu-lock');
  }

  $menuToggle.on('click', function () {
    $mobileMenu.hasClass('open') ? closeMenu() : openMenu();
  });

  $('#menuClose, #menuOverlay').on('click', closeMenu);
  $(document).on('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
  $(window).on('resize', function () {
    if (window.innerWidth >= 992) closeMenu();
  });

  /* Mobile sub menus (multi-level accordion) */
  $('.mobile-links').on('click', '.has-sub', function (event) {
    event.preventDefault();
    event.stopPropagation();

    var $currentItem = $(this);
    var $subMenu = $currentItem.next('.sub');
    var isOpen = $currentItem.hasClass('expanded');

    $currentItem.closest('ul').children('li').children('.has-sub').not($currentItem).each(function () {
      $(this).removeClass('expanded');
      $(this).next('.sub').css('max-height', 0);
    });

    if (isOpen) {
      $currentItem.removeClass('expanded');
      $subMenu.css('max-height', 0);
    } else {
      $currentItem.addClass('expanded');
      $subMenu.css('max-height', '2500px');
      $currentItem.parents('.sub').css('max-height', '5000px');
    }
  });

  /* Product mega-menu routes are kept here so the approved index.html markup stays untouched. */
  var productMenuRoutes = {
    'sub-welding-consumables': {
      'Stick Electrodes':'products/consumables/welding-consumables/stick-electrodes.html',
      'TIG Rods':'products/consumables/welding-consumables/tig-rods.html',
      'Solid Wires':'products/consumables/welding-consumables/solid-wires.html',
      'Gas-Shielded Flux-Cored Wires':'products/consumables/welding-consumables/gas-shielded-flux-cored-wires.html',
      'Self-Shielded Flux-Cored Wires':'products/consumables/welding-consumables/self-shielded-flux-cored-wires.html',
      'Submerged Arc Wires & Fluxes':'products/consumables/welding-consumables/submerged-arc-wires-fluxes.html',
      'Strip Cladding':'products/consumables/welding-consumables/strip-cladding.html',
      'Wire Arc Additive Manufacturing':'products/consumables/welding-consumables/wire-arc-additive-manufacturing.html',
      'Metal Powders':'products/consumables/welding-consumables/metal-powders.html',
      'Arc Spraying Cored Wires':'products/consumables/welding-consumables/arc-spraying-cored-wires.html',
      'Ceramic Weld Backing':'products/consumables/welding-consumables/ceramic-weld-backing.html'
    },
    'sub-brazing-consumables': {
      'Silver Brazing Alloys':'products/consumables/brazing-consumables/silver-brazing-alloys.html',
      'Copper-Phosphorus Rods':'products/consumables/brazing-consumables/copper-phosphorus-rods.html',
      'Brass & Bronze Brazing Wires':'products/consumables/brazing-consumables/brass-bronze-brazing-wires.html',
      'High Temperature Nickel Alloys':'products/consumables/brazing-consumables/high-temperature-nickel-alloys.html',
      'Brazing Pastes & Fluxes':'products/consumables/brazing-consumables/brazing-pastes-fluxes.html'
    },
    'sub-finishing-chemicals': {
      'Stainless Steel Pickling Pastes':'products/consumables/finishing-chemicals/stainless-steel-pickling-pastes.html',
      'Spray Pickling Gels':'products/consumables/finishing-chemicals/spray-pickling-gels.html',
      'Passivation Solutions':'products/consumables/finishing-chemicals/passivation-solutions.html',
      'Neutralizing Rinses':'products/consumables/finishing-chemicals/neutralizing-rinses.html',
      'Anti-Spatter Water-Based Sprays':'products/consumables/finishing-chemicals/anti-spatter-water-based-sprays.html'
    },
    'sub-arc-equipment': {
      'MIG / MAG Industrial Units':'products/welding-equipment/arc-welding-machines/mig-mag-industrial-units.html',
      'TIG AC / DC Inverters':'products/welding-equipment/arc-welding-machines/tig-ac-dc-inverters.html',
      'MMA / Stick Arc Systems':'products/welding-equipment/arc-welding-machines/mma-stick-arc-systems.html',
      'Multi-Process Inverters':'products/welding-equipment/arc-welding-machines/multi-process-inverters.html',
      'Submerged Arc Power Sources':'products/welding-equipment/arc-welding-machines/submerged-arc-power-sources.html'
    },
    'sub-plasma-cutting': {
      'Manual Air Plasma Cutters':'products/welding-equipment/plasma-cutting/manual-air-plasma-cutters.html',
      'CNC High-Definition Plasma':'products/welding-equipment/plasma-cutting/cnc-high-definition-plasma.html',
      'Plasma Gouging Systems':'products/welding-equipment/plasma-cutting/plasma-gouging-systems.html'
    },
    'sub-special-welding': {
      'Stud Welding Units':'products/welding-equipment/specialized-systems/stud-welding-units.html',
      'Resistance Spot Welders':'products/welding-equipment/specialized-systems/resistance-spot-welders.html',
      'Orbital Pipe Welding Systems':'products/welding-equipment/specialized-systems/orbital-pipe-welding-systems.html'
    },
    'sub-helmets': {
      'Auto-Darkening Helmets (TrueColor)':'products/personal-protection/welding-helmets/auto-darkening-helmets.html',
      'Flip-Up Grinding Helmets':'products/personal-protection/welding-helmets/flip-up-grinding-helmets.html',
      'Air-Fed PAPR Helmets':'products/personal-protection/welding-helmets/air-fed-papr-helmets.html',
      'Replacement Lenses & Spares':'products/personal-protection/welding-helmets/replacement-lenses-spares.html'
    },
    'sub-clothing': {
      'Heavy-Duty Split Cowhide Jackets':'products/personal-protection/protective-apparel/heavy-duty-split-cowhide-jackets.html',
      'Flame Retardant Cotton Apparel':'products/personal-protection/protective-apparel/flame-retardant-cotton-apparel.html',
      'Kevlar-Stitched TIG/MIG Gloves':'products/personal-protection/protective-apparel/kevlar-stitched-tig-mig-gloves.html',
      'Welding Gaiters & Sleeves':'products/personal-protection/protective-apparel/welding-gaiters-sleeves.html'
    },
    'sub-respiratory': {
      'Powered Air Purifying Respirators (PAPR)':'products/personal-protection/respiratory-papr/powered-air-purifying-respirators-papr.html',
      'TH3 Particle Filters':'products/personal-protection/respiratory-papr/th3-particle-filters.html',
      'Gas & Odor Filters':'products/personal-protection/respiratory-papr/gas-odor-filters.html'
    },
    'sub-torches': {
      'Air & Water-Cooled MIG Guns':'products/accessories-tools/torches-spares/air-water-cooled-mig-guns.html',
      'TIG Torches & Flex Heads':'products/accessories-tools/torches-spares/tig-torches-flex-heads.html',
      'Contact Tips, Nozzles & Diffusers':'products/accessories-tools/torches-spares/contact-tips-nozzles-diffusers.html',
      'Tungsten Electrodes (All Grades)':'products/accessories-tools/torches-spares/tungsten-electrodes-all-grades.html'
    },
    'sub-clamping': {
      'Magnetic Ground Clamps':'products/accessories-tools/clamping-workholding/magnetic-ground-clamps.html',
      'Heavy Brass Ground Clamps':'products/accessories-tools/clamping-workholding/heavy-brass-ground-clamps.html',
      'Adjustable Fit-Up Clamps':'products/accessories-tools/clamping-workholding/adjustable-fit-up-clamps.html'
    },
    'sub-cleaning-tools': {
      'Spring Handle Chipping Hammers':'products/accessories-tools/weld-cleaning-tools/spring-handle-chipping-hammers.html',
      'Stainless Steel Wire Brushes':'products/accessories-tools/weld-cleaning-tools/stainless-steel-wire-brushes.html',
      'Weld Seam Cleaners & Polishers':'products/accessories-tools/weld-cleaning-tools/weld-seam-cleaners-polishers.html'
    },
    'sub-robotics': {
      'Turnkey Robotic Welding Cells':'products/welding-automation/robotic-welding-cells/turnkey-robotic-welding-cells.html',
      'Collaborative Welding Robots (Cobots)':'products/welding-automation/robotic-welding-cells/collaborative-welding-robots-cobots.html',
      'Robotic Torches & Cleaning Stations':'products/welding-automation/robotic-welding-cells/robotic-torches-cleaning-stations.html'
    },
    'sub-positioners': {
      'Welding Turn Tables & Positioners':'products/welding-automation/rotators-positioners/welding-turn-tables-positioners.html',
      'Self-Aligning Tank Rotators':'products/welding-automation/rotators-positioners/self-aligning-tank-rotators.html',
      'Column & Boom Manipulators':'products/welding-automation/rotators-positioners/column-boom-manipulators.html'
    }
  };

  $('.mega-tier3-panel').each(function () {
    var $panel = $(this);
    var routes = productMenuRoutes[$panel.attr('id')] || {};
    $panel.find('a').each(function () {
      var label = $.trim($(this).text());
      if (routes[label]) $(this).attr('href', routes[label]);
    });
  });

  /* ---------- Products mega menu ---------- */
  var $megaMenuParent = $('.has-megamenu');
  var $megaMenuTrigger = $megaMenuParent.children('a');
  var $megaTier1Items = $('.mega-tier1-item');
  var $megaTier2Panels = $('.mega-tier2-panel');
  var $megaTier2Items = $('.mega-tier2-item');
  var $megaTier3Panels = $('.mega-tier3-panel');

  $megaMenuTrigger.on('click', function (event) {
    if (window.innerWidth >= 992) {
      event.preventDefault();
      $megaMenuParent.toggleClass('is-open');
    }
  });

  $(document).on('click', function (event) {
    if (!$(event.target).closest('.has-megamenu').length) $megaMenuParent.removeClass('is-open');
    if (!$(event.target).closest('.has-dropdown').length) $('.has-dropdown').removeClass('is-open');
  });

  $(document).on('keydown', function (event) {
    if (event.key === 'Escape') {
      $megaMenuParent.removeClass('is-open');
      $('.has-dropdown').removeClass('is-open');
    }
  });

  $('.has-dropdown > a').on('click', function (event) {
    if (window.innerWidth >= 992) {
      event.preventDefault();
      var $dropdownParent = $(this).parent('.has-dropdown');
      $megaMenuParent.removeClass('is-open');
      $('.has-dropdown').not($dropdownParent).removeClass('is-open');
      $dropdownParent.toggleClass('is-open');
    }
  });

  // Tier 1 (main category) hover or click
  $megaTier1Items.on('mouseenter click', function (event) {
    if (event.type === 'click') event.preventDefault();

    $megaTier1Items.removeClass('active');
    $(this).addClass('active');
    $megaTier2Panels.removeClass('active');

    var $activePanel = $('#' + $(this).data('target')).addClass('active');
    var $activeTier2Item = $activePanel.find('.mega-tier2-item.active');

    if (!$activeTier2Item.length) {
      $activeTier2Item = $activePanel.find('.mega-tier2-item').first().addClass('active');
    }

    if ($activeTier2Item.length) {
      $megaTier3Panels.removeClass('active');
      $('#' + $activeTier2Item.data('target')).addClass('active');
    }
  });

  // Tier 2 (subcategory) hover or click
  $megaTier2Items.on('mouseenter click', function (event) {
    if (event.type === 'click') event.preventDefault();

    $(this).closest('.mega-tier2-panel').find('.mega-tier2-item').removeClass('active');
    $(this).addClass('active');
    $megaTier3Panels.removeClass('active');
    $('#' + $(this).data('target')).addClass('active');
  });

  /* ---------- Owl Carousel ---------- */
  var arrowIcons = ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'];

  function formatHeroDots() {
    $('.hero .owl-dots .owl-dot').each(function (index) {
      var slideNumber = (index + 1 < 10 ? '0' : '') + (index + 1);
      $(this).attr('aria-label', 'Slide ' + slideNumber);
      $(this).find('span').text(slideNumber);
    });
  }

  var $heroSlider = $('.hero-slider');
  $heroSlider.on('initialized.owl.carousel refreshed.owl.carousel', formatHeroDots);
  $heroSlider.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    nav: true,
    navText: arrowIcons,
    dots: true
  });
  formatHeroDots();

  $('.product-slider').owlCarousel({
    loop: true,
    margin: 14,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: { 0: { items: 2, dots: true }, 576: { items: 3 }, 768: { items: 4 }, 992: { items: 6 }, 1200: { items: 8, dots: false, autoplay: false } }
  });

  var $industrySlider = $('.industry-slider');
  $industrySlider.owlCarousel({
    loop: true,
    margin: 12,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: { 0: { items: 1.5, margin: 10 }, 576: { items: 2.2, margin: 12 }, 768: { items: 3.2, margin: 12 }, 992: { items: 4, margin: 12 }, 1200: { items: 5, margin: 14 } }
  });

  $('#indPrev').on('click', function () {
    $industrySlider.trigger('prev.owl.carousel');
  });

  $('#indNext').on('click', function () {
    $industrySlider.trigger('next.owl.carousel');
  });

  $('.news-slider').owlCarousel({
    loop: false,
    margin: 22,
    nav: false,
    dots: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3, dots: false } }
  });

  $('.client-logo-carousel').owlCarousel({
    loop: true,
    margin: 14,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: { 0: { items: 2, dots: true }, 576: { items: 3 }, 768: { items: 4 }, 992: { items: 6 }, 1200: { items: 6, dots: true, autoplay: false } }
  });

  /* Smooth anchor scroll */
  $('a[href^="#"]').not('[href="#"]').on('click', function (event) {
    var targetSection = $(this.hash);
    if (targetSection.length) {
      event.preventDefault();
      $('html,body').animate({ scrollTop: targetSection.offset().top - 70 }, 500);
    }
  });

  /* ---------- Circular progress scroll-to-top ---------- */
  var $backToTop = $('#backToTop');
  var progressPath = document.querySelector('#backToTop .progress-bar');

  if (progressPath) {
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 15ms linear';

    var updateProgress = function () {
      var scrollTop = $(window).scrollTop();
      var documentHeight = $(document).height() - $(window).height();
      var progress = pathLength - (scrollTop * pathLength / (documentHeight || 1));

      progressPath.style.strokeDashoffset = Math.max(0, Math.min(pathLength, progress));

      if (scrollTop > 160) {
        $backToTop.addClass('show');
      } else {
        $backToTop.removeClass('show');
      }
    };

    updateProgress();
    $(window).on('scroll', updateProgress);
  }

  $backToTop.on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
})(jQuery);
