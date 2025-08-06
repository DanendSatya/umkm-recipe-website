# UMKM Resep Nusantara

Website UMKM untuk berbagi resep makanan tradisional dan modern Indonesia.

## Fitur Utama

- 🍽️ **Koleksi Resep Lengkap** - 15 resep tradisional Indonesia dengan gambar asli
- 🔍 **Pencarian Interaktif** - Cari resep berdasarkan nama, masakan, atau tingkat kesulitan
- 📱 **Responsive Design** - Optimal di desktop, tablet, dan mobile
- 🎨 **Atomic Design** - Struktur komponen yang terorganisir
- ⚡ **Next.js 15** - Performance optimal dengan App Router
- 🎯 **SEO Optimized** - Metadata dinamis dan static generation

## Teknologi

- **Framework**: Next.js 15 dengan App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Architecture**: Atomic Design Pattern

## Struktur Project

├── app/                    # App Router pages
│   ├── recipes/           # Recipe pages
│   ├── about/            # About page
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── components/           # Atomic Design components
│   ├── atoms/           # Basic components
│   ├── molecules/       # Composite components
│   └── organisms/       # Complex components
├── lib/                 # Utilities and data
│   ├── recipes-data.ts  # Recipe data
│   └── utils.ts         # Helper functions
└── public/              # Static assets
    └── images/          # Recipe images

## Halaman Tersedia

- **`/`** - Beranda dengan hero dan resep pilihan
- **`/recipes`** - Daftar semua resep dengan pencarian
- **`/recipes/[id]`** - Detail resep individual
- **`/about`** - Tentang kami

## Fitur Interaktif

- ✅ Search bar dengan clear button
- ✅ Mobile menu toggle
- ✅ Error handling dan 404 pages
- ✅ Loading states
- ✅ Responsive design

## Kontribusi

1. Fork repository
2. Buat feature branch
3. Commit changes
4. Push ke branch
5. Buat Pull Request
