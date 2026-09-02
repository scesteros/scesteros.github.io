# Analytics del sitio

Setup montado el 2026-09-02. Este archivo es interno (no está linkeado desde el sitio).

## Herramientas

| Herramienta | Qué mide | Dashboard |
|---|---|---|
| **Umami** (principal) | Visitas con ciudad/país, referrers, UTM, eventos personalizados | [cloud.umami.is](https://cloud.umami.is) |
| **GoatCounter** (respaldo) | Conteo independiente de visitas y referrers | [scesteros.goatcounter.com](https://scesteros.goatcounter.com) |
| **Google Search Console** | Con qué búsquedas te encuentran en Google, impresiones, posición | [search.google.com/search-console](https://search.google.com/search-console) |

Ambos contadores son cookieless: no requieren banner de consentimiento (RGPD-safe, datos de Umami en región UE).

## Eventos personalizados (Umami → pestaña "Events")

| Evento | Qué significa | Desagregación |
|---|---|---|
| `cv-download` | Click en Download CV | `source`: nav / hero |
| `contact-email` | Click en el mailto | `source`: hero / contact |
| `contact-linkedin` | Click en el perfil de LinkedIn | — |
| `conference-link` | Click en el link del 10th PhD Meeting (tarjeta Research) | — |
| `pub-click` | Click en una publicación | `pub`: honduras-taxation |
| `resource-click` | Click en un recurso de Claude Code | `resource`: blattman-setup, santanna-workflow, cesteros-template, spina-slides, goldsmith-pinkham-posts, cunningham-newsletter, aslim-beam-course, markus-academy |

## Links UTM — usar estos al compartir el sitio

En Umami se ven en la pestaña de UTM (source / medium / campaign).

| Dónde lo compartís | Link a usar |
|---|---|
| Firma de email | `https://scesteros.github.io/?utm_source=email&utm_medium=signature` |
| Perfil de LinkedIn (sección de contacto/web) | `https://scesteros.github.io/?utm_source=linkedin&utm_medium=profile` |
| Post puntual en LinkedIn | `https://scesteros.github.io/?utm_source=linkedin&utm_medium=post&utm_campaign=NOMBRE-DEL-POST` |
| Bio de X/Twitter | `https://scesteros.github.io/?utm_source=twitter&utm_medium=profile` |
| Bio de Bluesky | `https://scesteros.github.io/?utm_source=bluesky&utm_medium=profile` |
| Slides / QR de conferencia | `https://scesteros.github.io/?utm_source=conference&utm_medium=slides&utm_campaign=NOMBRE-VENUE-AÑO` |
| CV en PDF (link clickeable) | `https://scesteros.github.io/?utm_source=cv&utm_medium=pdf` |
| Perfil de GitHub | `https://scesteros.github.io/?utm_source=github&utm_medium=profile` |

Convención: `utm_source` = plataforma, `utm_medium` = formato, `utm_campaign` = instancia concreta (en kebab-case, ej. `phd-meeting-2026`). Los visitantes orgánicos (que tipean la URL o llegan por Google) quedan sin UTM — eso también es información.

## Excluir tus propias visitas

En cada navegador que uses, abrí la consola del navegador (F12) en el sitio y ejecutá una vez:

```js
localStorage.setItem('umami.disabled', '1');
```

GoatCounter ignora visitas desde `localhost` automáticamente, pero no tus visitas al sitio publicado; su número va a quedar levemente por encima del de Umami si navegás tu propio sitio seguido.
