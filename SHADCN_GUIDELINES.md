# Wytyczne dotyczące używania shadcn/ui

## Podstawowe zasady

1. Wszystkie komponenty UI powinny być budowane w oparciu o bibliotekę shadcn/ui
2. Nie tworzymy własnych podstawowych komponentów UI, gdy istnieje odpowiednik w shadcn/ui
3. Komponenty shadcn należy instalować poprzez CLI:
```bash
npx shadcn-ui@latest add [nazwa-komponentu]
```

## Lista preferowanych komponentów

### Formularze i wprowadzanie danych
- Input - dla pól tekstowych
- Select - dla list wyboru
- Textarea - dla dłuższych tekstów
- Checkbox - dla opcji wielokrotnego wyboru
- RadioGroup - dla pojedynczego wyboru
- Switch - dla przełączników
- DatePicker - dla wyboru daty

### Nawigacja
- Tabs - dla zakładek
- Navigation Menu - dla menu nawigacyjnego
- Dropdown Menu - dla menu rozwijalnego
- Breadcrumb - dla ścieżki nawigacji

### Informacje zwrotne
- Toast - dla powiadomień
- Alert - dla komunikatów
- Dialog - dla modali
- Progress - dla pasków postępu
- Skeleton - dla stanu ładowania

### Wyświetlanie danych
- Table - dla tabel danych
- Card - dla kart zawartości
- Avatar - dla awatarów użytkowników
- Badge - dla etykiet i statusów

## Przykład implementacji

```typescript
// Zamiast:
<button className="px-4 py-2 bg-blue-500 text-white rounded">
  Kliknij mnie
</button>

// Używaj:
import { Button } from "@/components/ui/button"

<Button variant="default">
  Kliknij mnie
</Button>
```

## Modyfikacja stylów

1. Wszystkie modyfikacje stylów powinny być dokonywane w pliku `components/ui/[component]/styles.ts`
2. Używaj predefiniowanych wariantów komponentów
3. W przypadku potrzeby dodania nowego wariantu, rozszerz istniejącą konfigurację

## Dostępność (Accessibility)

1. Komponenty shadcn/ui mają wbudowane wsparcie dla dostępności
2. Zawsze dodawaj odpowiednie atrybuty aria-label gdzie to konieczne
3. Zachowuj wsparcie dla nawigacji klawiaturą

## Dobre praktyki

1. Zawsze importuj komponenty z `@/components/ui/[nazwa-komponentu]`
2. Używaj predefiniowanych wariantów zamiast nadpisywania stylów
3. Zachowaj spójność w używaniu komponentów w całej aplikacji
4. Dokumentuj wszelkie niestandardowe modyfikacje komponentów

## Przydatne linki

- [Oficjalna dokumentacja shadcn/ui](https://ui.shadcn.com)
- [Repozytorium GitHub](https://github.com/shadcn/ui)
- [Przykłady implementacji](https://ui.shadcn.com/examples)

## Uwagi końcowe

1. Przed stworzeniem własnego komponentu, sprawdź czy nie istnieje odpowiednik w shadcn/ui
2. W przypadku wątpliwości, konsultuj się z dokumentacją lub zespołem
3. Regularnie aktualizuj komponenty do najnowszych wersji 