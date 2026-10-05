# WELD_ALLOY_PRODUCT_LTD

Static frontend for the Weld Alloy Products Ltd. website.

## Current stack

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- jQuery + Owl Carousel

## Current structure

```text
WELD_ALLOY_PRODUCT_LTD/
├── index.html
├── about.html
├── products.html
├── industries.html
├── certifications.html
├── case-studies.html
├── resources.html
├── blogs.html
├── careers.html
├── contact.html
├── faqs.html
├── media-events.html
├── testimonials.html
├── 404.html
├── robots.txt
├── industries/
│   └── industry-detail.html
├── products/
│   ├── product_detail.html
│   └── consumables/
│       └── welding-consumables.html
│       └── welding-consumables/
│           ├── stick-electrodes.html
│           ├── tig-rods.html
│           ├── solid-wires.html
│           ├── gas-shielded-flux-cored-wires.html
│           ├── self-shielded-flux-cored-wires.html
│           ├── submerged-arc-wires-fluxes.html
│           ├── strip-cladding.html
│           ├── wire-arc-additive-manufacturing.html
│           └── metal-powders.html
└── assets/
    ├── css/
    ├── js/
    └── images/
```

## What is already implemented

The frontend contains the main corporate pages, product navigation, responsive navigation, product-family pages, an industry detail page, enquiry sections and reusable site styling.

The root **Products** page is now a portfolio overview instead of a hard-coded stainless-steel listing. Existing detailed welding-consumable pages are connected from that overview.

Navigation and relative asset paths have also been corrected on nested product and industry pages.

## Important content rule

Company-specific information such as approved technical specifications, certificates, customer testimonials, verified job openings, case-study results, official contact details and downloadable documents must come from approved WAPL sources. The frontend does not invent these values.

## Current limitations

The repository is still a static frontend. Enquiry and careers forms do not have a production backend yet, and the Resources/Certifications areas need approved documents before downloads can be published.

## Recommended build order

1. Finalise approved company and product data.
2. Make product pages data-driven instead of duplicating HTML.
3. Add the enquiry/contact backend.
4. Add an admin/content-management layer for products, documents, careers, case studies and testimonials.
5. Add form validation, spam protection, email notifications and deployment.
6. Add automated link checks and CI.

## Development

Serve the repository with any static development server. Do not open nested HTML files using file:// when testing navigation; use a local HTTP server so relative paths behave like production.

Example:

```bash
python3 -m http.server 5500
```

Then open:

```text
http://127.0.0.1:5500/
```
