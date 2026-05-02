# 🇨🇺 Bar El Cubanero — Sitio Web Oficial

Sitio web estático del **Bar El Cubanero**, restaurante de cocina cubana auténtica en el barrio de Latina, Madrid.

**Desarrollado por [Antigravity](https://github.com/antigravity)**

---

## 🚀 Deploy

Este proyecto se despliega automáticamente en **Vercel** al hacer push a `main`.

| Branch | URL | Status |
|--------|-----|--------|
| `main` | [elcubanero.es](https://elcubanero.es) | ✅ Production |

### Deploy manual

```bash
# 1. Instala Vercel CLI (si no lo tienes)
npm i -g vercel

# 2. Despliega
vercel --prod
```

---

## 📁 Estructura

```
antigravity-cubanero/
├── index.html          ← Página principal (todo en uno, ~3MB con imágenes)
├── vercel.json         ← Config de Vercel (rutas, cache, región mad1)
├── public/
│   ├── sitemap.xml     ← Sitemap para Google Search Console
│   ├── robots.txt      ← Directivas para crawlers
│   └── .htaccess       ← Config Apache (fallback hosting tradicional)
└── README.md
```

---

## 🔧 Variables de entorno

Antes de publicar, reemplaza estos placeholders en `index.html`:

| Placeholder | Dónde obtenerlo |
|-------------|----------------|
| `GTM-XXXXXXX` | [Google Tag Manager](https://tagmanager.google.com) |
| `AW-XXXXXXXXXX` | [Google Ads](https://ads.google.com) → Conversiones |
| `LABEL_reserva_completada` | Google Ads → Acción de conversión |
| `LABEL_reserva_iniciada` | Google Ads → Acción de conversión |
| `LABEL_contacto_enviado` | Google Ads → Acción de conversión |
| `LABEL_whatsapp_click` | Google Ads → Acción de conversión |
| `LABEL_menu_explorado` | Google Ads → Acción de conversión |
| `LABEL_mapa_click` | Google Ads → Acción de conversión |
| `LABEL_llamada_click` | Google Ads → Acción de conversión |

---

## 📊 SEO / SEM / GEO

### SEO implementado
- ✅ Title tag optimizado (keyword principal + ubicación)
- ✅ Meta description con CTA y rating
- ✅ Keywords locales (restaurante cubano madrid, latina madrid...)
- ✅ Canonical URL
- ✅ Robots meta tag con directivas de indexación
- ✅ Open Graph completo (Facebook, WhatsApp, LinkedIn)
- ✅ Twitter Cards
- ✅ Sitemap XML con imágenes
- ✅ robots.txt

### Schema.org / Rich Results
- ✅ `Restaurant` — con menú, horarios, rating, reseñas
- ✅ `LocalBusiness` — con coordenadas GPS exactas
- ✅ `BreadcrumbList`
- ✅ `AggregateRating` — 4.5★ / 714 reseñas

### GEO (Local SEO)
- ✅ `geo.region`, `geo.placename`, `geo.position`, `ICBM`
- ✅ Dublin Core metadata
- ✅ Coordenadas en OG y JSON-LD
- ✅ Google Maps iframe con CID real
- ✅ NAP consistente (Name, Address, Phone) en todo el documento

### SEM (Calidad página para Google Ads)
- ✅ Google Tag Manager integrado
- ✅ gtag.js con 7 conversiones configuradas
- ✅ Scroll depth tracking (25/50/75/90%)
- ✅ Tiempo en página (30s/60s/120s/300s)
- ✅ Conversión principal `reserva_completada` → valor 35€
- ✅ CRM localStorage con 540 días de retención
- ✅ UTM tracking automático
- ✅ Panel admin: `/?admin=crm` → exportar CSV para remarketing

---

## 🛒 E-commerce (Pedidos por WhatsApp)

- Carrito lateral con todos los platos de la carta
- Formulario con nombre, teléfono, dirección y notas
- Pedido formateado enviado directamente a WhatsApp (+34 640 04 60 52)
- Registro automático en CRM local (540 días)
- Google Ads conversion firing al completar pedido

---

## 📞 Datos del negocio

| Campo | Valor |
|-------|-------|
| **Nombre** | Bar El Cubanero |
| **Teléfono** | +34 640 04 60 52 |
| **Dirección** | C. de la Duquesa de Parcent, 114, Latina, 28047 Madrid |
| **Google Maps CID** | 6103628309661487973 |
| **Rating Google** | 4.5★ / +714 reseñas |
| **Rating TodoBares** | 4.6★ |

---

## ⚡ Performance

| Métrica | Objetivo |
|---------|----------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID | < 100ms |
| Cache imágenes | 1 año (immutable) |
| Región Vercel | `mad1` (Madrid) |

> Las imágenes están embebidas en base64 en el HTML (~3MB total). Para producción de alta escala, considera mover las imágenes a `/public/images/` y referenciarlas por ruta relativa.

---

## 🏗️ Desarrollado por Antigravity

```
Antigravity Studio
Web · Branding · Digital Strategy
```
