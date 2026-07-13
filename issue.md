# Planning & Task Breakdown: ElysiaJS + Drizzle ORM + PostgreSQL Project Setup

## Objective
Menginisialisasi proyek backend baru menggunakan runtime **Bun** di direktori ini (`Roaster`), dengan stack **ElysiaJS** sebagai framework API dan **Drizzle ORM** yang terhubung ke database **PostgreSQL**.

Dokumen ini disusun sebagai panduan implementasi tingkat tinggi (*high-level guidance*) yang dapat diikuti secara bertahap oleh programmer atau model AI.

---

## Tech Stack Overview
- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **Web Framework:** [ElysiaJS](https://elysiajs.com/)
- **ORM & Migrations:** [Drizzle ORM](https://orm.drizzle.team/) & `drizzle-kit`
- **Database Driver:** PostgreSQL (misalnya menggunakan driver `postgres` untuk Drizzle)

---

## Implementation Roadmap (High-Level Checklist)

### 1. Project Initialization
- [ ] Inisialisasi proyek Bun baru di direktori root saat ini (`bun init -y`).
- [ ] Pastikan konfigurasi `package.json` dan `tsconfig.json` sudah mendukung TypeScript modern (ESM).
- [ ] Siapkan struktur direktori proyek yang modular dan rapi (misal: `src/db`, `src/routes`, `src/models` atau modular features).

### 2. Dependencies Installation
- [ ] Install framework API utama: **ElysiaJS**.
- [ ] Install ORM utama dan driver database PostgreSQL: `drizzle-orm` serta driver koneksi Postgres (`postgres`).
- [ ] Install *development dependencies* untuk migrasi database: `drizzle-kit` dan tipe/tools pendukung jika diperlukan.

### 3. Environment & Database Configuration
- [ ] Buat file `.env.example` dan `.env` untuk menyimpan kredensial database (`DATABASE_URL`, `PORT`, dll.).
- [ ] Buat file konfigurasi Drizzle (`drizzle.config.ts`) yang menunjuk ke skema database dan kredensial koneksi.
- [ ] Buat modul koneksi database (`src/db/index.ts`) yang menginisialisasi *client* PostgreSQL dan *instance* Drizzle ORM.

### 4. Schema & Migration Setup
- [ ] Definisikan skema tabel awal sebagai contoh/fondasi di `src/db/schema.ts` (misalnya tabel `users` atau tabel *health/demo* sederhana).
- [ ] Tambahkan script NPM/Bun di `package.json` untuk menjalankan migrasi / *generate schema* Drizzle (misal: `db:generate`, `db:migrate`, `db:push`).

### 5. Elysia API Server & Routing Setup
- [ ] Buat *entry point* aplikasi di `src/index.ts`.
- [ ] Inisialisasi *instance* Elysia server dan konfigurasikan port server.
- [ ] Buat endpoint dasar:
  - `GET /` atau `GET /health` untuk mengecek status API server.
  - Endpoint demo (opsional) yang menunjukkan interaksi read/write sederhana ke PostgreSQL melalui Drizzle ORM.

### 6. Verification & Quality Check
- [ ] Pastikan server dapat berjalan dalam *development mode* (`bun run dev`).
- [ ] Verifikasi endpoint API berjalan normal tanpa ada error tipe TypeScript atau runtime error.
- [ ] Verifikasi koneksi Drizzle ke PostgreSQL bekerja dengan baik.

---

## Acceptance Criteria (Definition of Done)
1. Proyek dapat dijalankan menggunakan perintah `bun run dev` tanpa error konfigurasi.
2. Server merespons HTTP request pada endpoint *health check*.
3. Drizzle ORM terkonfigurasi dengan benar dan siap digunakan untuk skema/migrasi PostgreSQL berikutnya.
