# HANDOFF DOCUMENT — Anthony A. Adeoye Mayoral Campaign Website
## City of St. Catharines Municipal Election · October 26, 2026
### Version 1.0 — Complete with Claude Code workflow, Third-Party APIs & City Imagery

> **How to use this document with Claude Code:**
> Open VS Code in your project folder. Start Claude Code.
> Paste this exact prompt at the start of every session:
>
> *"Read the file Anthony_Mayor_Website_Handoff.md completely.
> This is the full specification for Anthony A. Adeoye's
> mayoral campaign website. Understand every section before
> writing any code. Confirm when ready."*

---

## 1. PROJECT OVERVIEW

| Field | Value |
|---|---|
| Candidate | Anthony A. Adeoye |
| Race | Candidate for Mayor — City of St. Catharines |
| Election Date | Monday, October 26, 2026 |
| Campaign Brand | Arise St. Catharines |
| Primary Slogan | Building a Stronger Future for St. Catharines |
| Badge / Subline | Working for St. Catharines — Delivering Results for Residents |
| Domain | www.anthony4mayorstc.ca ✅ purchased |
| Build Platform | Plain HTML/CSS/JS — deploy on Netlify (free tier) |
| Backend | NONE — third-party APIs only |
| Email | anthony4mayorstc@gmail.com |
| Phone | 905-749-7227 |
| Instagram | @anthony4mayor |
| Facebook | Anthony Adeoye - 4 St. Catharines Mayor |

> ⚠️ NO coalition references anywhere on this website.
> No mention of Dunsin Fakorede or Ward 5 campaign.
> "Arise St. Catharines" is Anthony's individual campaign brand only.
> Anthony speaks about shared community values ONLY during
> one-on-one canvassing — never on the website.

---

## 2. VISUAL ASSETS

### ASSET A — Campaign Banner (Landscape)
**Filename:** `hero-banner.png`
**Source:** Provided flyer — navy/gold cityscape with bridge and city hall
**Dimensions:** ~1500×500px wide horizontal format

| Where Used | Treatment |
|---|---|
| Homepage hero background | Full width + `rgba(13,32,64,0.82)` overlay left side |
| About page hero | Full width + `rgba(13,32,64,0.88)` full overlay |
| Platform page hero | Full width + full navy overlay |
| Facebook cover photo | Upload directly — exact format match |
| Twitter/X header | Upload directly |
| LinkedIn banner | Upload directly |
| OG meta image | Crop to 1200×630px |

---

### ASSET B — Professional Headshot (White Shirt, Arms Crossed)
**Filename:** `headshot-main.png`
**Source:** Extracted from banner — white shirt, arms crossed, confident
**Description:** Approachable, community leader energy. Strong eye contact.

| Where Used | Size / Treatment |
|---|---|
| Homepage hero right column | 440px, circular crop, gold ring border 4px |
| About page bio section | 500px rectangular, gold left border 4px |
| Footer | 60px circular |
| Facebook profile photo | 180×180px square crop |
| Meta OG image | Already in hero banner |

---

### PLACEHOLDER ASSETS — needed from Anthony
```
headshot-formal.jpg     ← Additional formal headshot if available
community-01.jpg        ← Photo from community event
community-02.jpg        ← Photo from business visit
community-03.jpg        ← Any canvassing photo
video-thumbnail.jpg     ← Thumbnail for campaign intro video
```

---

## 3. ST. CATHARINES LOCATION IMAGES

> These images make the website feel authentically local.
> All sources below are FREE to use with proper attribution.
> Download and save to: `assets/images/city/`

### FREE IMAGE SOURCES

**Source 1 — Wikimedia Commons (completely free, no attribution required for most)**
```
URL: commons.wikimedia.org/wiki/Category:St._Catharines,_Ontario
Search: "St. Catharines Ontario"
Download as JPG, save at 1200px wide minimum
```

**Source 2 — Unsplash (free, no attribution required)**
```
URL: unsplash.com
Search: "St. Catharines Ontario" or "Niagara Region Canada"
Download "Full" resolution
```

**Source 3 — City of St. Catharines official photos**
```
URL: stcatharines.ca (press/media section)
These are publicly released city images
```

### RECOMMENDED IMAGES — download these specifically

| Filename to save as | What to search for | Where used on site |
|---|---|---|
| `city-city-hall.jpg` | "St. Catharines City Hall Ontario" | About page, Platform page |
| `city-montebello-park.jpg` | "Montebello Park St. Catharines rose garden" | Homepage community section |
| `city-port-dalhousie.jpg` | "Port Dalhousie lighthouse St. Catharines" | Homepage hero background alt |
| `city-welland-canal.jpg` | "Welland Canal Lock 3 St. Catharines" | Platform page header |
| `city-downtown.jpg` | "Downtown St. Catharines St. Paul Street" | About page background |
| `city-lakeside-park.jpg` | "Lakeside Park Port Dalhousie beach Ontario" | Community section |
| `city-meridian-centre.jpg` | "Meridian Centre arena St. Catharines" | Platform card |
| `city-brock-university.jpg` | "Brock University St. Catharines Ontario" | Platform youth card |

### WIKIMEDIA DIRECT LINKS (verified free images)
```
Montebello Park fountain:
https://commons.wikimedia.org/wiki/File:Montebello_Park_fountain.jpg

Port Dalhousie Harbour:
https://commons.wikimedia.org/wiki/Category:Port_Dalhousie,_St._Catharines

St. Catharines City Hall:
https://commons.wikimedia.org/wiki/Category:City_Hall_(St._Catharines)

Welland Canal:
https://commons.wikimedia.org/wiki/Category:Welland_Canal
```

---

## 4. DESIGN SYSTEM

### Colours (extracted from campaign banner + previous visual identity work)
```css
:root {
  /* Primary palette — from banner */
  --navy:        #0D2040;   /* deep navy — main backgrounds */
  --royal:       #1A4FA0;   /* royal blue — buttons, accents */
  --gold:        #C49A00;   /* campaign gold — from banner date text */
  --gold-light:  #D4920A;   /* warm gold — hover states */
  --white:       #FFFFFF;
  --off-white:   #F8F9FA;   /* light section backgrounds */

  /* Supporting */
  --body-text:   #1A1A2E;   /* near-black body copy */
  --muted:       #5A6070;   /* secondary text */
  --border:      #D0D5DD;   /* card borders */
  --error:       #9B1C1C;   /* form errors */
  --success:     #0A6E56;   /* success states */
  --ltgold:      #FDF5DC;   /* light gold backgrounds */
  --ltblue:      #EEF3FB;   /* light blue backgrounds */

  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-head:    'Barlow Condensed', 'Arial Narrow', sans-serif;
  --font-body:    'DM Sans', Inter, Arial, sans-serif;

  /* Spacing */
  --xs:4px; --sm:8px; --md:16px;
  --lg:24px; --xl:40px; --2xl:64px; --3xl:96px;

  --radius-btn:  6px;
  --radius-card: 12px;
  --radius-pill: 999px;

  --shadow-card: 0 2px 16px rgba(13,32,64,0.10);
  --shadow-btn:  0 4px 16px rgba(196,154,0,0.25);
  --shadow-nav:  0 2px 8px  rgba(13,32,64,0.15);
}
```

### Typography
```
Google Fonts import:
https://fonts.googleapis.com/css2?
  family=Playfair+Display:wght@400;700&
  family=Barlow+Condensed:wght@400;600;700;900&
  family=DM+Sans:wght@400;500;700
  &display=swap

H1: 56px / 700 / Playfair Display / --white or --navy
H2: 40px / 700 / Barlow Condensed / --navy
H3: 26px / 700 / Barlow Condensed / --royal
H4: 20px / 700 / DM Sans          / --navy
Body: 17px / 400 / DM Sans         / --body-text
Label: 12px / 700 / Barlow Condensed / uppercase / --gold
```

---

## 5. THIRD-PARTY APIS — NO BACKEND REQUIRED

All data collection uses free third-party services. No Node.js server needed.

### FORMSPREE — All Forms
```
URL: formspree.io
Free tier: 50 submissions/month per form
Paid: $10/month for unlimited

Setup:
1. Go to formspree.io
2. Sign up with anthony4mayorstc@gmail.com
3. Create a new form for each:
   - Volunteer form → get form ID e.g. xrgjabnk
   - Contact form → different ID
   - Lawn sign form → different ID
4. Set form action to:
   https://formspree.io/f/YOUR_FORM_ID

Each submission sends an email to anthony4mayorstc@gmail.com automatically.

HTML usage:
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="hidden" name="_subject" value="New Volunteer — Anthony for Mayor">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <!-- honeypot -->
  <input type="text" name="_gotcha" style="display:none">
  <button type="submit">Submit</button>
</form>
```

### MAILCHIMP EMBEDDED FORM — Newsletter/Updates Signup
```
URL: mailchimp.com
Free tier: up to 500 contacts, 1,000 emails/month

Setup:
1. Create Mailchimp account at mailchimp.com
2. Create a new Audience called "Anthony4Mayor Campaign"
3. Go to Audience → Signup Forms → Embedded Forms
4. Select "Condensed" style
5. Copy the embed code
6. Paste into homepage and Get Involved page

This builds Anthony's email list automatically.
Every subscriber gets added to Mailchimp.
Send campaign updates, events, and GOTV emails from there.
```

### YOUTUBE — Campaign Video Embed
```
Anthony uploads intro video to YouTube
Set video as Unlisted (not searchable) or Public
Copy the embed code from YouTube Share → Embed

Use on homepage:
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Anthony A. Adeoye — Candidate for Mayor"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

Video placeholder: show a navy card with play button icon
until real video URL is provided.
```

### GOOGLE MAPS EMBED — Office/Event Location
```
Free — no API key needed for basic embed

Usage:
<iframe
  src="https://www.google.com/maps/embed?pb=ST_CATHARINES_COORDS"
  width="100%" height="300"
  style="border:0;" allowfullscreen=""
  loading="lazy">
</iframe>

Add to Contact page to show campaign office location
when address is confirmed.
```

---

## 6. FOLDER STRUCTURE

```
anthony-ward5-mayor-website/
│
├── index.html
├── about.html
├── platform.html
├── first-100-days.html
├── community.html
├── get-involved.html
├── donate.html
├── contact.html
├── privacy.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── favicon.ico
│
├── assets/
│   ├── images/
│   │   ├── hero-banner.png        ← ASSET A (banner flyer)
│   │   ├── headshot-main.png      ← ASSET B (white shirt headshot)
│   │   ├── headshot-circle.png    ← Circular crop of headshot
│   │   ├── og-image.jpg           ← 1200×630 from banner
│   │   ├── favicon-32.png
│   │   ├── favicon-180.png
│   │   │
│   │   ├── city/                  ← St. Catharines location images
│   │   │   ├── city-city-hall.jpg
│   │   │   ├── city-montebello-park.jpg
│   │   │   ├── city-port-dalhousie.jpg
│   │   │   ├── city-welland-canal.jpg
│   │   │   ├── city-downtown.jpg
│   │   │   ├── city-lakeside-park.jpg
│   │   │   ├── city-meridian-centre.jpg
│   │   │   └── city-brock-university.jpg
│   │   │
│   │   └── events/               ← Community event photos
│   │       └── README.md
│   │
│   ├── css/
│   │   ├── main.css
│   │   ├── navbar.css
│   │   ├── components.css
│   │   ├── forms.css
│   │   ├── footer.css
│   │   └── pages/
│   │       ├── home.css
│   │       ├── about.css
│   │       ├── platform.css
│   │       ├── first-100-days.css
│   │       ├── community.css
│   │       ├── get-involved.css
│   │       ├── donate.css
│   │       └── contact.css
│   │
│   └── js/
│       ├── main.js
│       ├── countdown.js
│       ├── mobile-nav.js
│       ├── cookie-consent.js
│       ├── election-banner.js
│       ├── gallery-filter.js
│       └── scroll-animations.js
│
├── forms/
│   └── success.html
│
└── docs/
    ├── anthony-bio.pdf
    └── headshot-hires.jpg
```

---

## 7. NAVIGATION STRUCTURE

### Desktop (sticky, --navy background)
```
[Logo: ANTHONY A. ADEOYE | FOR MAYOR]
Home · About · Platform · First 100 Days · Community · Get Involved · Contact · [DONATE →]
```

### Mobile overlay
```
Home / About / Platform / First 100 Days
Community / Get Involved / Contact / [DONATE]
```

### Footer columns
```
Col 1 — About:       About Anthony / Bio / Why I'm Running
Col 2 — Platform:    10 Commitments / Top 3 Issues / First 100 Days
Col 3 — Community:   Events Gallery / Canvassing / Business Visits
Col 4 — Get Involved: Volunteer / Donate / Lawn Sign
Col 5 — Connect:     Contact / Media / Endorsements
```

---

## 8. PAGE SPECIFICATIONS

---

### PAGE 1 — HOMEPAGE (/)

#### HERO SECTION
Background: ASSET A (hero-banner.png)
Overlay: `linear-gradient(to right, rgba(13,32,64,0.92) 50%, rgba(13,32,64,0.25) 100%)`

```
LEFT COLUMN (55%):

  [Label — gold uppercase letter-spaced]
  ARISE ST. CATHARINES

  [H1 — white 56px Playfair Display]
  Building a Stronger
  Future for St. Catharines.

  [H3 — gold 22px Barlow Condensed]
  Working for St. Catharines.
  Delivering Results for Residents.

  [Body — white 70% 18px]
  I am Anthony A. Adeoye — community builder,
  operational leader, and proud St. Catharines
  resident running for Mayor in the October 26,
  2026 municipal election.

  [Two buttons]
  [Learn My Platform →]  royal blue fill
  [Get Involved]         gold outline

  [Countdown timer]
  ELECTION DAY — OCTOBER 26, 2026
  [XX] Days · [XX] Hours · [XX] Mins · [XX] Secs

RIGHT COLUMN (45%):
  ASSET B headshot-main.png
  Circular 440px, 4px gold ring border
  Shadow: 0 24px 60px rgba(0,0,0,0.45)
```

MOBILE (<768px): Stacked. Headshot 200px circular above text.

---

#### TRUST BAR (below hero, full width)
Background: rgba(196,154,0,0.12) — subtle gold tint

```
[briefcase icon]   Director of Operations — VEC Ventures
[graduation icon]  Business Management + Sociology (Brock)
[community icon]   Community & Health Studies — Centennial College
[maple leaf icon]  Proud St. Catharines Resident
```

---

#### TOP 3 ISSUES SECTION
Background: --off-white

```
[Label — gold] THE THREE PRIORITIES
[H2 — navy] What St. Catharines Needs Right Now.
[Subtext] Three commitments grounded in verified data.

CARD 1 — gold left border 4px
[01 — large gold]
Housing Affordability — A Crisis That Cannot Wait

New tenants in St. Catharines are paying 25.7%
more than long-term tenants for the same units.
With a rental vacancy rate of just 3.9% and only
1-2% of affordable units currently vacant,
working families have almost no negotiating power.

New units are being permitted — but affordability
for low and middle-income residents is still not
improving fast enough. As mayor, I will use every
tool available to close that gap.

[Stat pill — gold]  25.7% new tenant premium · CMHC 2024
[Stat pill — royal] 3.9% vacancy rate · CMHC 2025

---

CARD 2 — gold left border 4px
[02 — large gold]
Responsible Fiscal Management

St. Catharines residents were hit with a 10.5%
property tax increase in 2023. That burden is
still being felt by homeowners and renters alike.

As mayor, I commit to fiscally responsible budgets
— keeping increases at or below inflation — while
working with council to identify efficiency savings
and attract new investment that grows the city's
tax base without adding burden to existing residents.

[Stat pill — gold]  10.5% property tax hike 2023 · City of St. Catharines

---

CARD 3 — gold left border 4px
[03 — large gold]
Community Safety — Closing the Perception Gap

Niagara's Crime Severity Index improved to 54.7
in 2023 — below the national median. Yet 77% of
St. Catharines residents still feel crime is increasing.
That gap between data and lived experience matters.

As mayor, I will work with Niagara Regional Police
and Regional Council to ensure St. Catharines
receives its fair share of policing resources
and that community prevention programs are
accessible to all residents.

[Stat pill — royal] 77% feel crime rising · Numbeo 2024
[Stat pill — gold]  CSI 54.7 — below national median · Statistics Canada

[CTA centred]
[See My Full Platform →]  → /platform.html
```

---

#### ABOUT PREVIEW SECTION
Background: white
City image: `assets/images/city/city-city-hall.jpg` — right side, subtle parallax

```
LEFT:
  [Label — gold] WHY I'M RUNNING

  [H2 — navy]
  St. Catharines deserves a mayor who
  delivers — not just promises.

  [Body 17px]
  I am Anthony A. Adeoye — a community-focused
  leader, business professional, and advocate
  for responsible growth, public service, and
  civic engagement. With a career built on
  operational excellence across Canada Post,
  the Toronto Transit Commission, and VEC
  Ventures, I have spent years delivering
  results for communities and organizations.

  I am running for Mayor because leadership is
  not about titles — it is about service,
  accountability, and creating opportunities
  for people to thrive. The residents of
  St. Catharines deserve practical leadership,
  fresh ideas, and a people-first approach
  at City Hall.

  [Button — royal blue]
  [Read My Full Story →]  → /about.html

RIGHT:
  ASSET B headshot — rectangular 480px
  Gold left border 4px, 12px radius
  Below photo: city-city-hall.jpg — 200px height
  Caption: "St. Catharines City Hall"
```

---

#### CAMPAIGN VIDEO SECTION
Background: --navy

```
[Label — gold] FROM ANTHONY

[H2 — white]
Why I Am Running for Mayor

[YouTube embed — 16:9 aspect ratio]
Width: 100% of container (max 720px centred)
Fallback if no video yet:
  Navy card with play button icon
  Text: "Campaign introduction video — coming soon"

[Below video]
[Body — white 70%]
"This city has everything it needs to thrive.
What it needs is leadership that shows up,
listens, and delivers."
— Anthony A. Adeoye
```

---

#### CITY SHOWCASE SECTION
Background: --off-white
Purpose: Show Anthony's connection to St. Catharines landmarks

```
[Label — gold] OUR CITY
[H2 — navy] St. Catharines — A City Worth Fighting For

[3-column image grid with captions]

Image 1: city-montebello-park.jpg
Caption: Montebello Park — The Garden City's Heart

Image 2: city-port-dalhousie.jpg
Caption: Port Dalhousie — Our Waterfront Community

Image 3: city-welland-canal.jpg
Caption: The Welland Canal — Our Economic Lifeline

[Body below grid — centred, max 600px]
St. Catharines is the largest city in Niagara Region
— home to 144,829 residents and one of Ontario's
most historically significant communities.
It deserves a mayor with the vision and capability
to lead it to its next level.
```

---

#### STATS BAR
Background: --navy

```
144,829    City population — Statistics Canada 2024
10.5%      Property tax hike residents faced in 2023
25.7%      New tenant rent premium — CMHC 2024
#1         Largest city in Niagara Region
```

---

#### COMMUNITY SNAPSHOT SECTION
Background: white

```
[Label — gold] IN THE COMMUNITY
[H2 — navy] Anthony Out in St. Catharines

[3 recent event photo placeholders]
[Button — royal blue outline]
[See All Community Events →]  → /community.html
```

---

#### ENDORSEMENTS SECTION
Background: --ltgold (light gold)

```
[Label — gold uppercase] ENDORSEMENTS
[H2 — navy] Voices from the Community

[Endorsement cards — horizontal scroll on mobile]

Card format:
  Quote in italics (gold quotation marks)
  Name + Role/Description (bold navy)
  [PLACEHOLDER — Business Owner] ← replace when confirmed
  [PLACEHOLDER — Community Leader] ← replace when confirmed
  [PLACEHOLDER — Faith Community] ← replace when upcoming events confirmed

Note to developer: Leave 3 placeholder cards.
Update with real quotes when endorsements are confirmed.
```

---

#### VOLUNTEER / DONATE SPLIT
Left: --royal (royal blue)
Right: --navy

```
LEFT:  Volunteer → /get-involved.html
RIGHT: Donate    → /donate.html
```

---

#### FOOTER
Background: --navy
Top border: 4px gold
Bottom border: 4px --royal

```
[ASSET B circular 60px] ANTHONY A. ADEOYE · CANDIDATE FOR MAYOR
Building a Stronger Future for St. Catharines.
Working for St. Catharines. Delivering Results for Residents.

[5 column links]

TEAL BAR (--royal background):
[Globe] www.anthony4mayorstc.ca | [FB] Anthony Adeoye - 4 St. Catharines Mayor
[IG] @anthony4mayor | VOTE OCTOBER 26, 2026 (gold text)

LEGAL:
"Authorised by Anthony A. Adeoye, official agent
for the Mayoral campaign, St. Catharines, Ontario."
© 2026 Anthony A. Adeoye Campaign · Privacy Policy
```

---

### PAGE 2 — ABOUT (/about.html)

#### HERO
Background: ASSET A + `rgba(13,32,64,0.88)`

```
[Label — gold] ABOUT THE CANDIDATE
[H1 — white] Anthony A. Adeoye
[Subtext — white 70%] Community builder. Operational leader.
Proud St. Catharines resident running for Mayor.
```

#### BIO SECTION
Left: ASSET B headshot — 500px, gold left border 4px
Right: Full bio — use exact text below

```
EXACT BIO COPY — APPROVED FINAL VERSION
Do not paraphrase or rewrite any of this text:

Anthony Adeoye is a community-focused leader,
business professional, and advocate for responsible
growth, public service, and civic engagement.
As a candidate for Mayor of St. Catharines, he
brings a unique combination of academic achievement,
operational leadership, and community-centered
experience developed over many years of serving
people, leading teams, and solving real-world
challenges.

Anthony's educational background reflects his
commitment to understanding both people and
organizations. He holds an Honours Advanced Diploma
in Community and Health Studies and Police
Foundations from Centennial College, a Bachelor of
Science in Business Management from the University
of Ibadan, and is currently completing a second
bachelor's degree in Sociology at Brock University.
His academic training has provided him with a strong
foundation in community development, social issues,
public safety, organizational leadership, and
evidence-based decision-making.

In addition to his formal education, Anthony has
completed professional certifications in Advanced
Administration and Management, Emergency First Aid,
CPR/AED, and WHMIS — qualifications that have
strengthened his ability to lead effectively in
community, healthcare, and business environments
while maintaining a strong focus on public
well-being and organizational excellence.

Anthony's professional journey began in the
hospitality industry, where he developed a
reputation for exceptional customer service, team
leadership, and operational management. He later
expanded his experience into large-scale service
and logistics organizations including the Toronto
Transit Commission and United Parcel Service,
gaining firsthand insight into public service
delivery, transportation systems, and the importance
of reliable community infrastructure.

His career continued to advance through leadership
positions in marketing, sales, and operations
management. During his tenure with Canada Post
Corporation, Anthony managed multi-site delivery
operations, monitored performance metrics,
coordinated resources, and ensured high levels of
service delivery across multiple communities.

Most recently, as Director of Operations at VEC
Ventures Inc., Anthony has overseen organizational
operations, human resources, project coordination,
and stakeholder engagement — working closely with
employees, clients, community partners, and
leadership teams to implement strategic initiatives
and support organizational growth.

Beyond his professional accomplishments, Anthony
is passionate about community development and
civic participation. He believes that strong
communities are built through collaboration,
transparency, accountability, and inclusive
leadership.

As Mayor, Anthony Adeoye is committed to bringing
practical leadership, fresh ideas, and a people-first
approach to City Hall. His priorities include
strengthening public safety, supporting local
businesses, improving municipal services, promoting
responsible economic growth, and ensuring that
every resident has a voice in shaping the future
of the city.

Anthony believes that leadership is not about
titles — it is about service, accountability, and
creating opportunities for people to thrive. His
campaign is built on the belief that together,
the residents of St. Catharines can build a
stronger, more connected, and more vibrant
community for generations to come.
```

#### MY VALUES SECTION
Full width, gold 4px left accent bar

```
[Label — gold] MY VALUES
[H2 — navy] Why Representation Matters

St. Catharines is one of Ontario's most diverse
and historically rich cities. Its strength has
always come from the contributions of all its
communities — long-established families, newcomers
building new lives, seniors who built this city,
and young people who will define its future.

As mayor, I will ensure that every St. Catharines
resident — regardless of background, income,
or how long they have called this city home —
has a voice at City Hall. I will champion
representation in city hiring, services delivery,
and community investment.

Diversity is not a program or a committee.
It is a commitment to making sure the city
works equally well for everyone who lives in it.

[Value pills — gold]
Community First · Every Voice Heard · Delivering Results
Fiscally Responsible · Working for Everyone
```

#### CREDENTIALS GRID — 4 cards
```
Card 1 (royal blue icon) — Leadership Experience
· Director of Operations — VEC Ventures Inc.
· Manager, Marketing, Sales & Operations
· Multi-site Operations Manager — Canada Post
· High-volume operations — TTC and UPS

Card 2 (gold icon) — Academic Background
· Advanced Diploma (Hons) — Community Health
  Studies & Police Foundations, Centennial College
· B.Sc. Business Management — University of Ibadan
· B.Sc. Sociology (in progress) — Brock University
· CPR/AED, WHMIS, Emergency First Aid certified

Card 3 (royal blue icon) — Community Engagement
· St. Catharines resident committed to local service
· Faith community connections across the city
· Small business advocacy and support
· Youth and seniors community programming

Card 4 (gold icon) — Campaign Vision
· Arise St. Catharines — Building a Stronger Future
· Working for St. Catharines
· Delivering Results for Residents
· October 26, 2026
```

#### PULL QUOTE
Full width, royal blue background

```
"St. Catharines has everything it needs to thrive.
What it needs is leadership that shows up,
listens, and delivers."
— Anthony A. Adeoye
```

#### CAREER TIMELINE
```
Hospitality     Exceptional customer service, team leadership
                and front-office operational management

TTC & UPS       Public service delivery, transportation systems
                and large-scale logistics operations

Marketing &     Leadership roles in marketing, sales, and
Operations      operations management — business growth

Canada Post     Multi-site delivery operations manager
                Performance metrics and service excellence

Centennial      Honours Advanced Diploma — Community Health
College         Studies and Police Foundations

University of   Bachelor of Science in Business Management
Ibadan

VEC Ventures    Director of Operations — business strategy,
Inc.            HR, stakeholder relations, project coordination

Brock Univ.     Bachelor of Science in Sociology (in progress)
                Community development and social policy

2026            Candidate for Mayor of St. Catharines
                October 26, 2026 — Election Day
```

---

### PAGE 3 — PLATFORM (/platform.html)

#### HERO
Background: city-welland-canal.jpg + navy overlay 85%

```
[Label — gold] THE PLATFORM
[H1] My 10 Commitments for St. Catharines
[Subtext] Specific. Researched. Deliverable.
Backed by data from Statistics Canada, CMHC,
and the City of St. Catharines.
```

#### FIVE PILLARS BAR
```
[gold]  Housing Affordability
[royal] Fiscal Responsibility
[navy]  Community Safety
[gold]  Economic Growth
[royal] Inclusive St. Catharines
```

#### 10 PLATFORM INITIATIVES

```
01 — HOUSING AFFORDABILITY
STAT: 25.7% new tenant premium · 3.9% vacancy ·
      Only 1-2% of affordable units vacant
Position: Affordability remains the core challenge.
New units are being built through the HAF program
(1,483 units permitted in 2024-25 toward a 2,382
target). But only 1-2% of units affordable to
lower-income households are currently vacant.
New tenants pay 25.7% more than long-term tenants.
As mayor I will use my influence with council to
advocate for measures that protect renters and
accelerate delivery of genuinely affordable units.

02 — RESPONSIBLE FISCAL MANAGEMENT
STAT: 10.5% property tax hike 2023 ·
      $258,000 median home assessed value
Position: Residents were hit with a 10.5% tax
increase in 2023. I commit to fiscally responsible
budgets — increases at or below inflation — while
working with council to identify efficiency savings
and attract investment that grows the tax base
without adding burden to existing homeowners and
renters. The Strong Mayor budget power means the
mayor tables the budget — I will use that power
responsibly.

03 — COMMUNITY SAFETY
STAT: 77% of residents feel crime is increasing
      despite CSI improving to 54.7 in 2023
Position: While St. Catharines remains one of
Canada's relatively safe cities, residents tell
us they are concerned about personal safety and
drug-related crime. As mayor I will work with
Niagara Regional Police and Regional Council
to ensure St. Catharines receives its fair share
of policing resources, and that community safety
and prevention programs are accessible to all.

04 — ECONOMIC GROWTH & SMALL BUSINESS
STAT: Median household income $72,500
      St. Catharines — 8th largest urban area in Ontario
Position: St. Catharines has enormous economic
potential. As mayor I will champion small business
through faster permit processing, stronger BIA
partnerships, and a mayor's office that actively
promotes local business and attracts new investment
to the city.

05 — YOUTH & RECREATION
STAT: 11.3% youth (15-24) · FAIR program active ·
      $400,000 SCCIP cultural grants 2025
Position: St. Catharines has a strong recreation
infrastructure — ActiveSTC, FAIR fee assistance,
the Culture Plan 2025-2030. As mayor I will build
on this by expanding FAIR program access, bringing
tech mentorship into library branches through
Brock and Niagara College partnerships, and
protecting recreation budgets from cuts.

06 — SENIORS & ACCESSIBLE CITY
STAT: 23.3% of residents are seniors —
      above the national average of 19%
Position: St. Catharines has one of the highest
senior populations in Ontario. As mayor I will
advocate for accessible transit, affordable
senior housing, and expanded support programs
so that every senior in this city can age with
dignity and independence.

07 — MULTICULTURAL INCLUSION
Position: St. Catharines already has multicultural
advisory structures. As mayor I will ensure they
are fully empowered and adequately resourced.
I will champion representation in city hiring
and services delivery. The Folk Art Festival has
served this community for 30+ years — I will
champion its continued growth and advocate for
cultural programming that reflects our full
community diversity.

08 — NEWCOMER WELCOME & INTEGRATION
Position: St. Catharines has a newcomer welcome
program. I will advocate to expand its reach and
ensure it is accessible in multiple languages
through Niagara Region settlement services. New
Canadians choosing St. Catharines deserve to feel
welcomed, supported, and represented at City Hall.

09 — MENTAL HEALTH & COMMUNITY WELLBEING
Position: Mental health and addiction services are
Regional jurisdiction — not a direct mayoral
delivery. But as mayor I will use my seat on
Niagara Regional Council to be St. Catharines'
strongest voice for expanded community mental
health resources. I will advocate for investment
that reaches our most vulnerable residents.

10 — TRANSPARENT & ACCOUNTABLE LEADERSHIP
Position: I will hold myself to the same
performance standards I applied in every
leadership role throughout my career. Regular
public progress reports. Open office hours.
Accessible, responsive, and always working for
the residents of St. Catharines. As mayor,
I will use my influence with council — not claim
powers I do not have.
```

---

### PAGE 4 — FIRST 100 DAYS (/first-100-days.html)

#### HERO
Background: city-city-hall.jpg + navy overlay 80%
Right column: ASSET B headshot

```
[Label — gold] THE COMMITMENT
[H1] My First 100 Days as Mayor
[Subtext] Before asking for your vote, I want to
tell you exactly what I will do with it.
```

#### THREE PHASE BLOCKS

```
PHASE 01 — DAYS 1-30: Listen. Assess. Plan.
· Meet with all City department heads —
  understand the current state before making promises
· Host a Mayor's Open Forum — public listening
  session open to all St. Catharines residents
· Review the City's multi-year budget plan and
  identify opportunities for fiscal improvement
· Formally engage with Niagara Regional Police
  on St. Catharines' policing cost allocation review
· Connect with BIA leaders and major employers
  to understand economic development priorities

PHASE 02 — DAYS 31-60: Set Priorities. Signal Direction.
· Table a formal review of the Housing Accelerator
  Fund progress and affordability gap analysis
· Issue a Mayor's statement on fiscal responsibility
  — committing to inflation-or-below budget increases
· Request a review of the newcomer welcome program
  for expanded multilingual access
· Champion Ward 5 and all ward councillors in
  establishing the City's recreation and culture
  investment priorities for 2027
· Meet with faith community leaders and multicultural
  organizations across St. Catharines

PHASE 03 — DAYS 61-100: Deliver First Wins.
· Publish the first Mayor's Progress Report —
  what was committed, what has been actioned,
  what is in progress. Full transparency.
· Establish a Mayor's Business Advisory roundtable
  bringing together BIA, small business owners,
  and the City's economic development team
· Advocate at Regional Council for St. Catharines'
  fair share of policing, mental health, and
  housing resources
· Launch the Mayor's Community Connection Series —
  quarterly town halls in different neighbourhoods
  across the city
```

#### CLOSING QUOTE
Royal blue background

```
"The first 100 days set the tone for everything
that follows. I will show St. Catharines that
their mayor is present, prepared, and
delivering from day one."
— Anthony A. Adeoye
```

---

### PAGE 5 — COMMUNITY EVENTS (/community.html)

#### HERO
Background: ASSET A + overlay
Right: ASSET B headshot

```
[Label — gold] IN THE COMMUNITY
[H1 — white] Anthony Out in St. Catharines
[Subtext] Every conversation matters. Every door knocked.
Every business visited. Every community event attended.
```

#### FILTER BAR
```
[All] [Canvassing] [Business Visits] [Community Events]
[Faith & Cultural] [Seniors] [Meetings]
```

#### EVENT CARD TEMPLATE
```html
<!-- Copy this block for each new event -->
<!-- Category: canvassing|business|community|faith|seniors|meeting -->
<div class="event-card" data-category="CATEGORY">
  <div class="event-photo">
    <img src="assets/images/events/FILENAME.jpg" alt="DESCRIPTION" loading="lazy">
    <span class="event-tag">CATEGORY LABEL</span>
  </div>
  <div class="event-info">
    <span class="event-date">MONTH DD, 2026</span>
    <h3>EVENT TITLE</h3>
    <p class="event-location">📍 LOCATION, St. Catharines</p>
    <p>2-3 sentence description of the event.</p>
  </div>
</div>
```

#### PHOTO NAMING CONVENTION
```
Save photos to: assets/images/events/
Filename: YYYY-MM-description-NN.jpg
Example:  2026-06-business-owners-01.jpg
          2026-07-faith-community-visit-01.jpg
          2026-08-door-knocking-linwell-01.jpg
```

#### CTA STRIP
Royal blue background

```
Want to join Anthony on the campaign trail?
[Volunteer With Us →]  → /get-involved.html
```

---

### PAGE 6 — GET INVOLVED (/get-involved.html)

#### HERO
```
[H1] Get Involved — St. Catharines Needs You
[Subtext] Join the campaign. Every conversation counts.
```

#### VOLUNTEER FORM — via Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="hidden" name="_subject"
         value="New Volunteer — Anthony for Mayor">
  <input type="hidden" name="_next"
         value="https://anthony4mayorstc.ca/forms/success.html">

  Full Name*          text
  Email Address*      email
  Phone Number        tel
  Neighbourhood       text
  How to help?        checkboxes:
    ☐ Door-to-door canvassing
    ☐ Phone banking
    ☐ Social media support
    ☐ Event setup & logistics
    ☐ Driving supporters to polls
    ☐ Translation / multilingual outreach
    ☐ Office support
    ☐ Other
  Availability        text
  Message             textarea (optional)
  Honeypot: <input type="text" name="_gotcha" style="display:none">

  Submit: "Sign Me Up" — royal blue, full-width mobile
</form>
```

#### NEWSLETTER SIGNUP — via Mailchimp
```
[H3] Stay Updated
Subscribe for campaign news and events.
[Mailchimp embedded form — paste embed code here]
```

#### THREE WAYS
```
[Door]   CANVASS — Join a canvassing team
[Phone]  PHONE BANK — Call from home, scripts provided
[Sign]   LAWN SIGN — Request a yard sign
```

#### LAWN SIGN MODAL FORM — via Formspree
```
Full Name*, Address*, City (St. Catharines?), Phone*, Email*
Subject hidden: "Lawn Sign Request — Anthony for Mayor"
```

---

### PAGE 7 — DONATE (/donate.html)

#### HERO
```
[H1] Support the Campaign
[Subtext] Help us reach every resident of St. Catharines.
```

#### LEGAL DISCLAIMER (MUST appear above all donation content)
```
⚠ MUNICIPAL ELECTIONS ACT, 1996 — ONTARIO

• Maximum individual contribution: $1,200
• Corporations and trade unions CANNOT contribute
• All contributions are publicly reported post-election
• Canadian citizens and permanent residents only

Questions: City of St. Catharines Clerk's Office
stcatharines.ca
```

#### IMPACT AMOUNTS
```
$25   → Campaign materials for 50 doors
$50   → One full canvassing session
$100  → One lawn sign in St. Catharines
$250  → Digital outreach to 1,000 residents
$500  → Direct mail to 500 households
[Custom Amount]
```

#### HOW TO DONATE
```
E-Transfer: anthony4mayorstc@gmail.com
Reference: Full name + "Anthony4Mayor"

Cheque: Payable to Anthony A. Adeoye Campaign
Cash: Accepted at events. Receipt issued.

A receipt will be issued for all eligible contributions.
```

#### DONATION RECORD FORM — via Formspree
```
Full Legal Name*, Email*, Phone*, Home Address*,
Amount*, Method* (radio), Date
Subject hidden: "Donation Record — Anthony for Mayor"
Note: "For receipt tracking. Does not process payment."
```

---

### PAGE 8 — CONTACT (/contact.html)

#### HERO
Background: ASSET A + overlay 88%

```
[H1] Get in Touch
[Subtext] Questions, media inquiries, or ready to help?
```

#### CONTACT FORM — via Formspree
```
Full Name*, Email*, Subject* (dropdown):
  General Inquiry / Volunteer / Media & Press /
  Lawn Sign / Event Invitation / Endorsement / Other
Message* (min 20 chars)
Submit: "Send Message" — royal blue
Success: "Thank you — we'll respond within 24 hours."
```

#### CONTACT DETAILS
```
🌐 www.anthony4mayorstc.ca
📧 anthony4mayorstc@gmail.com
📞 905-749-7227
📸 @anthony4mayor
👍 Anthony Adeoye - 4 St. Catharines Mayor
🏢 [Campaign office address — add when public]
```

#### MEDIA SECTION
```
Headshot (hi-res):    [Download]
Candidate bio:        [Download PDF]
Media contact:        anthony4mayorstc@gmail.com
Response time:        Within 24 hours
```

#### GOOGLE MAPS EMBED
```
<iframe src="https://maps.google.com/maps?q=St.+Catharines+Ontario&output=embed"
width="100%" height="300" style="border:0;" loading="lazy">
</iframe>
(Update with campaign office address when confirmed)
```

---

## 9. SEO META TAGS

```html
<title>Anthony A. Adeoye — Candidate for Mayor | St. Catharines 2026</title>
<meta name="description" content="Anthony A. Adeoye is running for Mayor of St. Catharines in the October 26, 2026 municipal election. Building a Stronger Future for St. Catharines.">
<meta name="keywords" content="Anthony Adeoye mayor St. Catharines 2026, Arise St. Catharines, mayor candidate Niagara, municipal election October 2026, St. Catharines mayor race">
<meta name="author" content="Anthony A. Adeoye">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.anthony4mayorstc.ca/">

<meta property="og:type" content="website">
<meta property="og:url" content="https://www.anthony4mayorstc.ca/">
<meta property="og:title" content="Anthony A. Adeoye for Mayor — St. Catharines 2026">
<meta property="og:description" content="Building a Stronger Future for St. Catharines. Vote Anthony A. Adeoye for Mayor — October 26, 2026.">
<meta property="og:image" content="https://www.anthony4mayorstc.ca/assets/images/og-image.jpg">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Anthony A. Adeoye for Mayor — St. Catharines 2026">
<meta name="twitter:description" content="Building a Stronger Future for St. Catharines. October 26, 2026.">
<meta name="twitter:image" content="https://www.anthony4mayorstc.ca/assets/images/og-image.jpg">

<!-- Google Analytics — replace with real ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  gtag('js',new Date()); gtag('config','G-XXXXXXXXXX');
</script>
```

---

## 10. JAVASCRIPT — READY TO USE

### Countdown Timer
```javascript
function updateCountdown() {
  const election = new Date('2026-10-26T08:00:00-04:00');
  const diff = election - new Date();
  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<span>ELECTION DAY — VOTE NOW!</span>';
    return;
  }
  const pad = n => String(Math.floor(n)).padStart(2,'0');
  const el = id => document.getElementById(id);
  if(el('days'))    el('days').textContent    = pad(diff/86400000);
  if(el('hours'))   el('hours').textContent   = pad((diff%86400000)/3600000);
  if(el('minutes')) el('minutes').textContent = pad((diff%3600000)/60000);
  if(el('seconds')) el('seconds').textContent = pad((diff%60000)/1000);
}
setInterval(updateCountdown, 1000);
updateCountdown();
```

### Gallery Filter
```javascript
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const cat = this.dataset.filter;
    document.querySelectorAll('.filter-btn')
      .forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.event-card').forEach(card => {
      card.style.display =
        (cat === 'all' || card.dataset.category === cat)
        ? 'block' : 'none';
    });
  });
});
```

---

## 11. CLAUDE CODE BUILD WORKFLOW

### Session start prompt — paste at start of every session:
```
Read Anthony_Mayor_Website_Handoff.md completely.
This is the full specification for Anthony A. Adeoye's
mayoral campaign website for St. Catharines 2026.
Understand all sections before writing any code.
No backend is needed — all forms use Formspree.
Confirm when ready to begin.
```

---

### PROMPT 1 — Project setup and design system
```
Set up the project:
1. Create all folders from Section 6 of the handoff
2. Create placeholder HTML files for all 8 pages
3. Build assets/css/main.css with the complete design
   system from Section 4 — all CSS variables, base
   styles, typography, button classes (.btn-primary,
   .btn-gold, .btn-outline), container, and utilities
4. Create assets/js/countdown.js and gallery-filter.js
   using the exact code from Section 10
5. Create robots.txt and sitemap.xml

Use Google Fonts: Playfair Display, Barlow Condensed,
and DM Sans as specified in the handoff.
```

### PROMPT 2 — Navigation and shared layout
```
Build the sticky navigation and shared page template.
Create assets/css/navbar.css and assets/js/mobile-nav.js.

Navbar must:
- Stick on scroll, hide scrolling down, reappear up
- Show gold Donate button right side
- Logo: "ANTHONY A. ADEOYE | FOR MAYOR"
- Active state: gold underline 2px
- Mobile: full screen navy overlay hamburger

Create shared footer matching Section 8 footer spec:
- Royal blue hashtag bar at bottom
- Contact details from Section 1
- 5-column footer links

Apply shared template to all 8 HTML files.
```

### PROMPT 3 — Homepage (highest priority)
```
Build index.html completely using PAGE 1 spec.

Hero section:
- hero-banner.png background with gradient overlay
- headshot-main.png circular 440px right column, gold ring
- Countdown timer wired to countdown.js
- Trust bar below hero with 4 credentials

Build all sections in order:
Top 3 Issues → About Preview → Video placeholder →
City Showcase (3 city images) → Stats Bar →
Community Snapshot → Endorsements placeholders →
Volunteer/Donate split → Footer

Use exact copy from handoff. Do not paraphrase.
City images go in assets/images/city/ folder.
Show placeholder boxes for city images if not yet downloaded.
```

### PROMPT 4 — About page
```
Build about.html using PAGE 2 spec.
Hero background: hero-banner.png + overlay.
Bio section: headshot left (gold border), exact bio text right.
My Values section: gold 4px left accent bar, exact copy.
Credentials grid: 4 cards.
Pull quote: royal blue background.
Career timeline: vertical on desktop, stacked mobile.
```

### PROMPT 5 — Platform page
```
Build platform.html using PAGE 3 spec.
Hero background: city-welland-canal.jpg or hero-banner.png.
Five pillars bar in gold/royal/navy.
All 10 initiative cards with stat badges and exact copy.
Each card: large number badge, stat pill, 2-sentence
problem, 4-5 action bullets, "why this matters" callout.
```

### PROMPT 6 — First 100 Days and Community pages
```
Build first-100-days.html using PAGE 4 spec:
Three phase blocks as vertical timeline, gold badges,
city-city-hall.jpg background with overlay,
headshot right column, closing quote royal blue.

Build community.html using PAGE 5 spec:
Hero with overlay, filter bar (7 categories),
gallery-filter.js wired to buttons,
4 placeholder event cards using exact template,
CTA strip royal blue at bottom.
```

### PROMPT 7 — Get Involved, Donate, Contact
```
Build get-involved.html, donate.html, contact.html
using PAGE 6, 7, 8 specs.

All forms use Formspree — add placeholder action URL:
action="https://formspree.io/f/REPLACE_WITH_REAL_ID"

get-involved.html: volunteer form, Mailchimp embed
placeholder, three ways section, lawn sign modal.

donate.html: LEGAL DISCLAIMER must appear ABOVE
donation amounts. Impact buttons. How to donate.
Donation record form.

contact.html: contact form with subject dropdown,
contact details panel, media section, Google Maps
embed placeholder.

Add honeypot to all forms.
```

### PROMPT 8 — SEO, privacy, 404, sitemap
```
Add SEO meta tags from Section 9 to all pages.
Create privacy.html with PIPEDA-compliant policy.
Create 404.html with campaign branding and
return to homepage button.
Update sitemap.xml with all 8 page URLs.
```

### PROMPT 9 — Final audit
```
Audit every page for:
1. Mobile responsive at 375px, 768px, 1024px
2. All hex colours match design system exactly
   (--navy #0D2040, --royal #1A4FA0, --gold #C49A00)
3. headshot-main.png correct on homepage, about,
   first-100-days, contact pages
4. Legal disclaimer on donate.html ABOVE amounts
5. All 3 forms have Formspree action and honeypot
6. Countdown targets October 26 2026
7. City showcase images load correctly
8. Video section shows placeholder correctly
9. All external links: target="_blank" rel="noopener"
10. Skip-to-content link on every page
List all issues then fix them all.
```

---

## 12. FORMSPREE SETUP GUIDE

### After building — connect real Formspree IDs:

1. Go to **formspree.io**
2. Sign up with **anthony4mayorstc@gmail.com**
3. Create 3 forms:
   - **Volunteer Form** — name it "Volunteer Signups"
   - **Contact Form** — name it "General Contact"
   - **Lawn Sign Form** — name it "Lawn Sign Requests"
4. Copy each form's ID (looks like: `xrgjabnk`)
5. Update HTML files:

```
In get-involved.html:
action="https://formspree.io/f/YOUR_VOLUNTEER_ID"

In contact.html:
action="https://formspree.io/f/YOUR_CONTACT_ID"

In donate.html:
action="https://formspree.io/f/YOUR_DONATE_ID"
```

6. Test each form by submitting once
7. Check anthony4mayorstc@gmail.com for confirmation

Free tier allows 50 submissions per month per form.
Upgrade to paid ($10/month) when campaign gets busy.

---

## 13. OUTSTANDING ITEMS BEFORE LAUNCH

### Must complete
- [ ] hero-banner.png saved to assets/images/
- [ ] headshot-main.png saved to assets/images/
- [ ] headshot-circle.png (circular crop) created
- [ ] og-image.jpg (1200×630) cropped from banner
- [ ] City images downloaded to assets/images/city/
      (see Section 3 for download sources)
- [ ] Formspree account created with 3 form IDs
- [ ] Mailchimp account created — audience set up
- [ ] Campaign video uploaded to YouTube — URL confirmed
- [ ] Google Analytics 4 ID created — replace G-XXXXXXXXXX
- [ ] Domain anthony4mayorstc.ca DNS configured
- [ ] Netlify account created — connected to GitHub

### Complete when available
- [ ] Endorsement quotes from business owners
- [ ] Faith community endorsements
- [ ] Campaign office address
- [ ] First event photos for community.html
- [ ] Campaign video URL from YouTube

### After launch
- [ ] Add event photos after every community activity
- [ ] Update endorsements section as they come in
- [ ] Monitor Formspree inbox (or it emails anthony4mayorstc@gmail.com)
- [ ] Send campaign updates via Mailchimp

---

## 14. DEVELOPER RULES — NON-NEGOTIABLE

1. **No coalition references** — not in copy, nav, meta, or footer
2. **"Arise St. Catharines" is Anthony's individual brand only**
3. **All copy is final** — do not rewrite or paraphrase any text
4. **Hex colours must match design system exactly**
5. **No backend** — all forms use Formspree only
6. **Legal disclaimer on donate.html MUST be above donation amounts**
7. **Video section shows placeholder** until real YouTube URL provided
8. **City images go in assets/images/city/** — not the root images folder
9. **Endorsement cards stay as placeholders** until quotes are confirmed
10. **All forms need honeypot field** for spam protection

---

*Handoff document — Anthony A. Adeoye Mayoral Campaign*
*City of St. Catharines — October 26, 2026 Election*
*Prepared June 2026 — All content approved by campaign*
*8 pages · Formspree forms · Mailchimp newsletter ·*
*YouTube video · St. Catharines city imagery · No backend required*
