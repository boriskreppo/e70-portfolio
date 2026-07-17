export type Stat = { value: string; suffix?: string; label: string };
export type Feature = { title: string; desc: string };
export type TechSpec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  segment: 'view-ecosystem' | 'fueltrack' | 'flow';
  segmentLabel: string;
  order: number;
  tagline: string;
  shortDescription: string;
  tags: string[];
  problemLabel: string;
  problemTitle: string;
  problemText: string;
  solutionText: string;
  features: Feature[];
  differentiatorLabel: string;
  differentiatorTitle: string;
  differentiatorText: string;
  techSpecs: TechSpec[];
  stats?: Stat[];
  ctaText: string;
  ctaNote: string;
  mockupImage?: string;
};

export const products: Product[] = [
  {
    slug: 'pureview',
    name: 'PureView',
    segment: 'view-ecosystem',
    segmentLabel: 'View Ecosystem',
    order: 1,
    tagline: 'Sve tvoje lokacije, jedan klik do bilo koje kamere.',
    shortDescription: 'Cloud-native platforma koja agregira CCTV sa stotine lokacija u jedan pregledan web interfejs.',
    tags: ['CCTV agregacija', 'Cloud-native', 'Multi-lokacija'],
    problemLabel: 'Problem',
    problemTitle: 'Stotine lokacija, stotine odvojenih pristupa',
    problemText: 'Kad kamere leže na desetinama ili stotinama lokacija, svaki DVR/NVR ima svoj IP, svoju lozinku, svoj način pristupa. Operater ili menadžment nema jedan konzistentan način da pogleda bilo koju kameru sa bilo koje lokacije, bez instalacije klijentskog softvera po uređaju.',
    solutionText: 'PureView agregira sve DVR/NVR uređaje u jedan cloud-native web interfejs. Korisnik bira region, zatim lokaciju, zatim kanal — sve iz browsera, bez plug-inova i bez instalacije, uz automatsko prepoznavanje dostupnih kamera i upravljanje konekcijama u realnom vremenu.',
    features: [
      { title: 'Hijerarhijska navigacija', desc: 'Regija → Lokacija (Shop) → DVR → Kanal — jasna struktura za pristup bilo kojoj kameri u sistemu za nekoliko klikova.' },
      { title: 'Pregled po regionu', desc: 'KPI kartice uživo: broj aktivnih lokacija i CCTV uređaja u odabranom regionu, sa raspodelom po regijama.' },
      { title: 'Pojedinačni pregled kanala', desc: 'Fullscreen prikaz jedne kamere sa listom svih kanala na lokaciji, biranje datuma i jasna sesijska kontrola.' },
      { title: 'Web-based, bez instalacije', desc: 'Radi u kiosk modu direktno iz browsera (Edge/Chrome) — nema klijentske aplikacije ni plug-ina ni na jednoj radnoj stanici.' },
      { title: 'Automatsko upravljanje konekcijama', desc: 'Sistem prepoznaje dostupne kamere i upravlja konekcijama u realnom vremenu, bez ručne intervencije operatera.' },
      { title: 'Podrška ugrađena u interfejs', desc: 'Contact support dostupan direktno iz aplikacije, 24/7 dostupnost tima za pomoć.' },
    ],
    differentiatorLabel: 'Zašto PureView',
    differentiatorTitle: 'Dokazano na razmeri od skoro 6.000 kanala',
    differentiatorText: 'Trenutna implementacija radi sa jednim centralnim serverom i jednom MediaMTX instancom koja pokriva 360 lokacija i oko 5.800 kanala — bez potrebe za redizajnom sistema.',
    techSpecs: [
      { label: 'Klijent', value: 'Web browser (Edge/Chrome), kiosk mod, bez plug-ina' },
      { label: 'Reverse proxy', value: 'NGINX — TLS terminacija, L7 routing, rate limiting' },
      { label: 'Media gateway', value: 'MediaMTX — RTSP ↔ WebRTC/HLS, on-demand streaming' },
      { label: 'Izvor videa', value: 'DVR/NVR uređaji, 8-16 kanala po uređaju, unutar privatne mreže/VPN' },
      { label: 'Server (minimalno)', value: '4 vCPU, 16 GB RAM, SSD 120 GB' },
      { label: 'Server (preporučeno)', value: '6 vCPU, 32 GB RAM, 1 Gbps mreža' },
    ],
    stats: [
      { value: '360', suffix: '', label: 'Lokacija' },
      { value: '5800', suffix: '+', label: 'Kanala' },
      { value: '0', suffix: '', label: 'Plug-ina' },
    ],
    ctaText: 'Zakaži tehničku demonstraciju',
    ctaNote: 'Pogledaj kako izgleda pristup sa tvojim lokacijama.',
  },
  {
    slug: 'sentryview',
    name: 'SentryView',
    segment: 'view-ecosystem',
    segmentLabel: 'View Ecosystem',
    order: 2,
    tagline: 'Šest hiljada kamera. Jedan prozor. Nula propuštenih incidenata.',
    shortDescription: 'CCTV kontrolni centar za stotine objekata i hiljade kamera — u realnom vremenu, iz jednog browsera.',
    tags: ['CCTV kontrolni centar', 'Real-time alerti', 'Multi-lokacija'],
    problemLabel: 'Problem',
    problemTitle: 'Desetak desktop aplikacija nije kontrolni centar',
    problemText: 'Operateri sa distribuiranim lokacijama gube vreme prebacujući se između zasebnih desktop NVR aplikacija po objektu, dok DVR kredencijali cirkulišu van kontrole. Incidenti se primete tek kad je prekasno.',
    solutionText: 'SentryView centralizuje pregled stotina objekata i hiljada kamera u jedan browser prozor. Bez instalacije klijentskog softvera, bez VPN tunela do svakog DVR-a — samo login, pregled, reakcija.',
    features: [
      { title: 'Video Wall', desc: '16-grid live prikaz svih kamera jednog objekta, WebRTC streaming sa latencijom ispod 1 sekunde, bez plugin-a.' },
      { title: 'Master View', desc: '4 nezavisna kvadranta koja kombinuju kanale iz bilo kog objekta. Layout se pamti po operateru.' },
      { title: 'Real-time alert sistem', desc: 'WebSocket push u manje od sekunde za motion, alarm i video loss evente sa svih kamera istovremeno.' },
      { title: 'Fullscreen i digitalni PTZ', desc: 'Zoom i pan bez fizičkog PTZ uređaja, snapshot jednim klikom sa automatskim timestamp-om.' },
      { title: 'Alert history & audit log', desc: 'Filtriranje po tipu, objektu i datumu; bulk acknowledge; svaka akcija u sistemu je logirana.' },
      { title: 'Hijerarhijsko upravljanje', desc: 'Region → Shop → DVR → Kanal, sa bulk import-om 300+ lokacija preko JSON fajla za brz onboarding.' },
    ],
    differentiatorLabel: 'Zašto SentryView',
    differentiatorTitle: 'Testirano na razmeri koju drugi tek planiraju',
    differentiatorText: 'Dizajniran i testiran na 400 DVR uređaja i 6.000 kamera. Browser-based, cross-platform, API-first arhitektura, nativno kompatibilan sa Cloudflare i zero-trust pristupom.',
    techSpecs: [
      { label: 'Frontend', value: 'React 19, TypeScript, Vite, Zustand' },
      { label: 'Backend', value: 'Node.js, Express, TypeScript' },
      { label: 'Baza', value: 'PostgreSQL' },
      { label: 'Streaming', value: 'MediaMTX (WebRTC WHEP, on-demand RTSP)' },
      { label: 'Real-time', value: 'WebSocket (native ws)' },
      { label: 'Deploy', value: 'Docker Compose, Cloudflare Tunnel' },
    ],
    stats: [
      { value: '6000', suffix: '+', label: 'Kamera u sistemu' },
      { value: '400', suffix: '', label: 'DVR uređaja' },
      { value: '1', suffix: 's', label: 'Alert latencija' },
    ],
    ctaText: 'Zakaži tehničku demonstraciju',
    ctaNote: 'Proof-of-concept na vašoj infrastrukturi, bez obaveze.',
    mockupImage: '/dashboard.png',
  },
  {
    slug: 'deepview',
    name: 'DeepView',
    segment: 'view-ecosystem',
    segmentLabel: 'View Ecosystem',
    order: 3,
    tagline: 'Google Analytics za fizičke radnje.',
    shortDescription: 'AI video analitika koja pretvara postojeće kamere u alat za poslovnu analitiku — bez identifikacije, bez novog hardvera.',
    tags: ['AI analitika', 'Retail', 'GDPR by-design'],
    problemLabel: 'Problem',
    problemTitle: 'Fiskalni račun vidi samo onoga ko je kupio',
    problemText: 'Retail lanci donose odluke o rasporedu osoblja, izlozima i asortimanu na osnovu fiskalnih računa — koji ne pokazuju posetioce koji nisu kupili, vreme zadržavanja po zonama, ni demografsku strukturu kupaca.',
    solutionText: 'DeepView koristi postojeće sigurnosne kamere da u realnom vremenu izmeri posetu, ponašanje i strukturu kupaca — potpuno anonimno. Sistem broji i klasifikuje, nikad ne identifikuje.',
    features: [
      { title: 'Brojanje posetilaca', desc: 'AI detekcija i praćenje osoba u realnom vremenu, trendovi po satu/danu/nedelji, poređenje perioda.' },
      { title: 'Demografija posetilaca', desc: 'Polna i starosna struktura, agregirana u trenutku prolaska — nijedna slika lica se ne čuva.' },
      { title: 'Hot-zone i dwell-time analiza', desc: 'Vizuelni editor zona na slici kamere, prosečno vreme zadržavanja, koje police privlače a koje ne.' },
      { title: 'Toplotne mape', desc: 'Vizuelni prikaz kretanja preko tlocrta radnje, trenutna identifikacija mrtvih uglova.' },
      { title: 'Multi-lokacijski dashboard', desc: 'Real-time pregled svih kamera i lokacija na jednom mestu, poređenje radnji u lancu.' },
      { title: 'Bezbednosni dodaci', desc: 'Intrusion detection za zabranjene zone, praćenje prisustva maloletnika u regulisanim prostorima.' },
    ],
    differentiatorLabel: 'Zašto DeepView',
    differentiatorTitle: 'On-premise, GDPR by-design, na kamerama koje već imate',
    differentiatorText: 'Video nikad ne napušta klijentovu infrastrukturu — obrada je lokalna. Nema biometrijske identifikacije, nema baze lica. Radi na postojećim IP kamerama, bez dodatnog CAPEX-a.',
    techSpecs: [
      { label: 'Backend', value: 'Python, FastAPI, Redis, ONNX Runtime GPU' },
      { label: 'AI modeli', value: 'YOLOX, YuNet, FairFace, ByteTrack (Apache-2.0)' },
      { label: 'Frontend', value: 'React SPA + Nginx' },
      { label: 'Baza', value: 'PostgreSQL, particionisano, pgbouncer' },
      { label: 'Video', value: 'FFmpeg sa NVIDIA hardverskim dekodiranjem (NVDEC)' },
      { label: 'Deploy', value: 'Docker Compose, on-premise' },
    ],
    ctaText: 'Pokreni 30-dnevni pilot',
    ctaNote: '2-4 kamere, jedna lokacija — brojevi prodaju sami.',
  },
  {
    slug: 'fueltrack',
    name: 'FuelTrack',
    segment: 'fueltrack',
    segmentLabel: 'FuelTrack',
    order: 1,
    tagline: 'Gorivo, vozila i rokovi — sve na jednom mestu, sa telefona.',
    shortDescription: 'Mobile-first aplikacija za upravljanje voznim parkom i praćenje potrošnje goriva, napravljena za SME flote.',
    tags: ['Fleet management', 'SME', 'Mobile-first'],
    problemLabel: 'Problem',
    problemTitle: 'Flota se prati u Excel-u i na papiru',
    problemText: 'Male i srednje firme sa vozilima najčešće prate potrošnju goriva, registracije i servise ručno. Podaci su raštrkani po vozačima, rokovi se otkriju tek kad isteknu.',
    solutionText: 'FuelTrack centralizuje kompletno upravljanje flotom u jednu mobilnu aplikaciju: unos tačenja u par sekundi preko QR skeniranja računa, automatski izveštaji, i upozorenja pre nego što neki rok istekne.',
    features: [
      { title: 'QR skeniranje računa', desc: 'Tačenje goriva se unosi automatski skeniranjem, bez ručnog kucanja cifara.' },
      { title: 'Fotografisanje računa', desc: 'Svaki unos ima digitalni trag, spreman za knjigovodstvo.' },
      { title: 'Upravljanje vozilima', desc: 'Marka, model, tablice, registracija, servis, gume, dodeljeni vozač — sve na jednom mestu.' },
      { title: 'Pametna upozorenja', desc: 'Sistem prati rokove i vizuelno signalizira šta ističe uskoro, a šta je već isteklo.' },
      { title: 'Role-based pristup', desc: 'Admin vidi celu flotu, vozač vidi samo svoja vozila i svoja tačenja.' },
      { title: 'Izveštaji jednim klikom', desc: 'Potrošnja po vozilu, vozaču ili mesecu, prosečna potrošnja L/100km, export u PDF i Excel.' },
    ],
    differentiatorLabel: 'Zašto FuelTrack',
    differentiatorTitle: 'Napravljen za SME segment, ne za enterprise cenu',
    differentiatorText: 'Globalna konkurencija cilja enterprise segment sa cenama od 17 do 45 dolara po vozilu mesečno. FuelTrack je brz za uvođenje, jednostavan za vozače bez tehničke pozadine, i lokalizovan na srpski jezik.',
    techSpecs: [
      { label: 'Backend', value: 'Node.js, Express' },
      { label: 'Baza', value: 'PostgreSQL' },
      { label: 'Autentikacija', value: 'JWT + bcrypt' },
      { label: 'Izveštaji', value: 'PDFKit (PDF), SheetJS (Excel)' },
      { label: 'QR skeniranje', value: 'html5-qrcode, direktno iz browsera' },
      { label: 'Dizajn', value: 'Mobile-first, dodaje se na Home Screen' },
    ],
    ctaText: 'Isprobaj sa svojom flotom',
    ctaNote: 'Unesi prvo tačenje za manje od minuta.',
  },
  {
    slug: 'flow',
    name: 'Flow',
    segment: 'flow',
    segmentLabel: 'Flow',
    order: 1,
    tagline: 'Jedan pogled na sve projekte, timove i rokove.',
    shortDescription: 'Project management dashboard sa Kanban i Gantt prikazom, napravljen za timove koji upravljaju više paralelnih projekata.',
    tags: ['Project management', 'Kanban', 'Gantt'],
    problemLabel: 'Problem',
    problemTitle: 'Pregled projekta rasut po alatima',
    problemText: 'Timovi koji upravljaju više paralelnih projekata gube pregled kroz rasute alate — email, Excel, chat. Nedostaje im jedno mesto gde vide status svakog projekta, ko šta radi, i šta kasni.',
    solutionText: 'Flow centralizuje projekte, taskove i komunikaciju u jedan dashboard sa vizuelnim pregledom — Kanban i Gantt — tako da menadžment odmah vidi gde su uska grla.',
    features: [
      { title: 'Kanban i Gantt prikaz', desc: 'Drag & drop board po statusu projekta, ili vizuelni timeline sa danas-linijom — biraš prikaz koji ti odgovara.' },
      { title: 'Detaljan pregled projekta', desc: 'Taskovi sa statusima, prioritetima, vlasnicima i rokovima; drag & drop reorder.' },
      { title: 'Bulk akcije', desc: 'Selekcija više taskova odjednom za masovnu promenu statusa ili brisanje.' },
      { title: 'Beleške i aktivnost', desc: 'Thread beleški po projektu i kompletna istorija promena — ko je šta uradio i kada.' },
      { title: 'Notifikacije', desc: 'Bell indikator sa brojačem nepročitanih, klik vodi direktno na relevantan projekat.' },
      { title: 'Globalna pretraga', desc: 'Jedna pretraga koja pokriva projekte, taskove i beleške istovremeno, sa highlight-om rezultata.' },
    ],
    differentiatorLabel: 'Zašto Flow',
    differentiatorTitle: 'Napravljen za timove koji rade, ne za izveštavanje o radu',
    differentiatorText: 'Keyboard shortcuts za brzo označavanje i editovanje, arhiviranje bez brisanja istorije, real-time indikator konekcije — Flow je napravljen da tim koristi svaki dan.',
    techSpecs: [
      { label: 'Frontend', value: 'React, Vite, Tailwind' },
      { label: 'Backend', value: 'Node.js, Express' },
      { label: 'Baza', value: 'SQLite (migracija na PostgreSQL po potrebi)' },
      { label: 'Autentikacija', value: 'Session-based login sa rate-limiting' },
      { label: 'Deploy', value: 'PM2 process manager' },
    ],
    ctaText: 'Zakaži demo',
    ctaNote: 'Vidi kako izgleda sa tvojim projektima.',
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsBySegment(segment: string) {
  return products.filter((p) => p.segment === segment);
}
