# Advanced UI Starter - Strona Wizytówkowa

Prosta strona wizytówkowa zbudowana w React i Vite. Projekt zawiera komponenty wielokrotnego użytku oraz responsywny design.

## Opis Projektu

Aplikacja demonstruje budowanie nowoczesnego interfejsu użytkownika z wykorzystaniem React i bundlera Vite. Zawiera:

- **Header** - Nagłówek strony z informacjami o autorze
- **Footer** - Stopka zawierająca linki i informacje dodatkowe
- **Button** - Przykładowy komponent przycisku wielokrotnego użytku
- **Responsive Design** - Strona dostosowuje się do różnych rozmiarów ekranu

## Struktura Projektu

```
src/
├── components/        # Komponenty wielokrotnego użytku
│   ├── Header.jsx    # Komponent nagłówka
│   ├── Footer.jsx    # Komponent stopki
│   ├── Button.jsx    # Komponent przycisku
│   ├── Header.css
│   ├── Footer.css
│   └── Button.css
├── App.jsx           # Główny komponent aplikacji
├── App.css           # Style głównej aplikacji
├── main.jsx          # Punkt wejścia aplikacji
└── index.css         # Style globalne
```

## Technologie

- **React 19** - Biblioteka do budowania interfejsu użytkownika
- **Vite** - Szybki bundler i dev server
- **CSS3** - Stylizacja komponentów
- **ESLint** - Linter do kontroli jakości kodu
- **Prettier** - Narzędzie do formatowania kodu

## Instalacja

1. Klonowanie repozytorium:

```bash
git clone https://github.com/Italikus/advanced-ui-starter.git
cd advanced-ui-starter
```

2. Instalacja zależności:

```bash
npm install
```

## Uruchomienie

### Tryb projektowania (Development)

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173`

Serwer obsługuje Hot Module Replacement (HMR), co oznacza, że zmiany w kodzie będą widoczne natychmiast po zapisaniu pliku.

### Build produkcyjny

```bash
npm run build
```

Zminimalizowana wersja aplikacji będzie dostępna w folderze `dist/`

### Preview wersji produkcyjnej

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

Sprawdza jakość kodu zgodnie z regułami ESLint.

### Formatowanie kodu

```bash
npm run format
```

Automatyczne formatowanie kodu w projekcie.
