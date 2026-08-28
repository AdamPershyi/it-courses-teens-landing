# IT-курси для підлітків

Лендінг IT-курсів для підлітків. Поки що це стартовий каркас: команда збирає секції з макета на окремих гілках.

## Стек

- Vite
- React 19
- TypeScript
- CSS Modules (`*.module.css`)
- [modern-normalize](https://github.com/sindresorhus/modern-normalize)

## Як запустити

Потрібен Node.js 20+.

```bash
npm install
npm run dev
```

Сайт відкриється на `http://localhost:5173`.

Інші команди:

```bash
npm run build    # перевірка TypeScript + продакшн-збірка
npm run preview  # локально подивитись зібраний сайт
npm run lint     # перевірка коду
```

## Структура

```
src/
  assets/icons/   # SVG з Figma (бургер, соцмережі, телефон, пошта)
  img/            # фото секцій: *-mob / *-tab / *-desc
  components/     # Header, Footer, Button, BurgerMenu, AccordionItem
  data/           # тексти лінків, FAQ
  sections/       # Hero, Faq
  styles/         # глобальні стилі й токени
  App.tsx         # збирає сторінку з секцій
```

Нову секцію кладемо в `src/sections/НазваСекції/`. Не пишемо всю сторінку в `App.tsx`.

## Стилі: що де лежить

Підхід: **mobile-first CSS Modules**. Базові стилі — для мобілки. Планшети й десктоп додаємо через `min-width`.

Брейкпоінти як у Figma:

| Назва | Ширина макета | Медіазапит |
|---|---|---|
| Mobile | 360px | за замовчуванням |
| Tablet | 768px | `@media (min-width: 768px)` |
| Desktop | 1440px | `@media (min-width: 1440px)` |

### Глобальне — `src/styles/`

Це **не** CSS Modules. Класи й змінні доступні скрізь.

| Файл | Що тут |
|---|---|
| `variables.css` | Токени: кольори, шрифт, радіуси, відступи обгорток |
| `globals.css` | `body`, лінки, картинки, `modern-normalize` підключається в `main.tsx` |
| `layout.css` | Клас `.container` — спільна обгортка контенту секцій |

**`.container`** — для внутрішніх блоків секцій (About, FAQ, форма тощо):

- мобілка: `16px` з боків
- планшет: `68px`
- десктоп: `68px`, `max-width: 1440px`

У JSX: `<div className="container">`. Це звичайний глобальний клас, не модуль.

Хедер і футер **не** використовують `.container`: у Figma в них інші відступи (хедер 16 / 68 / 74, футер 16 / 68 / 210). Їхні падінги живуть у власних CSS Modules.

Hero-фото лежать у `src/img/` (`image-hero-mob.png`, `image-hero-tab.png`, `image-hero-desc.png`) і підставляються як `background-image` по брейкпоінтах. **Не накладати** поверх них `rgba(0, 0, 0, 0.35)` — затемнення вже в самих файлах.

### Модульний CSS — поруч із компонентом

Стилі, які стосуються лише одного блока, лежать у `Component.module.css` поруч із `Component.tsx`.

```ts
import styles from './Header.module.css'

<header className={styles.header}>
```

Імена класів після збірки стають унікальними (`Header_header_ab12`), тому `.title` у Hero не зіткнеться з `.title` у Footer.

Правило:

- повторювані відступи сторінки → `.container` у `src/styles/layout.css`
- кольори й шрифт → змінні в `src/styles/variables.css`
- вигляд хедера, футера, картки, кнопки → `*.module.css` цього компонента
- не пишемо інлайн-стилі й не мішаємо Tailwind

Повторювані тексти лінків (навігація, соцмережі) — у `src/data/`, не копіюємо по компонентах.

## Макет

- [Page 1](https://www.figma.com/design/7E5TDDuJHXK8332inZtsWF/Courses-for-teenagers--Copy-?node-id=0-1)
- [UI kit](https://www.figma.com/design/7E5TDDuJHXK8332inZtsWF/Courses-for-teenagers--Copy-?node-id=102-421)
- [Components](https://www.figma.com/design/7E5TDDuJHXK8332inZtsWF/Courses-for-teenagers--Copy-?node-id=5-847)

## Як працюємо з Git

**На `main` ніхто не комітить і не пушить напряму** (після першого пуша власником).  
`main` захищена на GitHub: зміни потрапляють лише через Pull Request.

Команда заходить у репозиторій як **collaborators** з правом Write. Це дозволяє пушити **свої гілки** і відкривати PR. Прямий пуш у `main` GitHub відхилить.

### Як називати гілки

Формат: `тип/коротка-назва`

| Тип | Коли | Приклад |
|---|---|---|
| `feat/` | нова секція або фіча | `feat/hero-section` |
| `fix/` | баг | `fix/header-mobile-menu` |
| `style/` | лише стилі, без логіки | `style/faq-spacing` |
| `chore/` | залежності, дрібна інфра | `chore/add-swiper` |

Ще приклади:

- `feat/faq-section`
- `feat/courses-slider`
- `fix/footer-year`
- `style/hero-colors`

Назва латиницею, через дефіс, без пробілів і без імені автора в гілці. Одне завдання — одна гілка.

### Початок роботи (нова гілка)

Завжди стартуємо від свіжого `main`:

```bash
git checkout main
git pull origin main
git checkout -b feat/faq-section
```

Далі пишемо код, комітимо **у свою гілку**:

```bash
git add .
git commit -m "feat: add FAQ section"
```

### Перед пушем — оновити main

Поки ти працював, у `main` могли з’явитись чужі зміни. Перед пушем підтягни їх у свою гілку:

```bash
git fetch origin
git merge origin/main
```

Якщо Git напише про конфлікти:

1. Відкрий файли з конфліктами і залиш потрібний код.
2. Збережи файли.
3. Далі:

```bash
git add .
git commit -m "chore: merge main into feat/faq-section"
```

Після цього пуш **своєї** гілки (не `main`):

```bash
git push -u origin HEAD
```

На GitHub відкрий Pull Request: `feat/faq-section` → `main`. Після рев’ю гілку мерджимо в `main`.

### Чого не робити

- не комітити в `main`
- не пушити в `main`
- не робити `git push --force` у спільні гілки
- не класти в коміт `node_modules`, `.env`, макети з Figma
