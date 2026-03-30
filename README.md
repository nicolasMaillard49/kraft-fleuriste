# KRAFT artisan fleuriste

Site vitrine pour **KRAFT artisan fleuriste**, boutique artisanale située au cœur de Bordeaux.

🌸 [kraft-fleurs-et-jouets.fr](https://kraft-fleurs-et-jouets.fr/)

---

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- Polices Google : Playfair Display + Inter

## Design

- Palette : crème `#F5F0E8`, vert sauge `#7C9A7E`, marron kraft `#8B6914`, blanc cassé `#FAFAF7`
- Ambiance artisanale, minimaliste, nature
- Illustrations botaniques SVG inline (aucune image externe)

## Structure

```
kraft-fleuriste/
├── app/
│   ├── layout.tsx       # Metadata + fonts
│   ├── page.tsx         # Assemblage des sections
│   └── globals.css      # Variables CSS + Tailwind
├── components/
│   ├── Hero.tsx          # Hero avec motifs floraux SVG
│   ├── About.tsx         # Histoire & valeurs + illustration botanique
│   ├── Services.tsx      # 3 cards : Bouquets, Compositions, Événements
│   ├── Contact.tsx       # Adresse, téléphone, horaires (Places API)
│   └── Footer.tsx        # Footer minimaliste
└── public/              # Assets statiques
```

## Infos boutique

- **Adresse** : 278 Cours de la Somme, 33000 Bordeaux
- **Téléphone** : 05 57 67 32 59
- **Note Google** : ⭐ 4,8 / 5
- **Horaires** :
  - Lundi : Fermé
  - Mardi–Vendredi : 10h–13h / 16h–19h
  - Samedi : 10h–13h / 15h–19h
  - Dimanche : 9h30–12h30

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

---

*Données récupérées via Google Places API · Place ID : `ChIJwevfna8nVQ0R5xlM2qqf-H4`*
