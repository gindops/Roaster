# Roaster Backend API

Backend API untuk **Roaster**, dibangun dengan performa tinggi menggunakan:
- **Runtime:** [Bun](https://bun.sh/)
- **Framework:** [ElysiaJS](https://elysiajs.com/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** PostgreSQL

## 🚀 Getting Started

### 1. Install Dependencies
```bash
bun install
```

### 2. Environment Setup
Salin file konfigurasi environment dan sesuaikan URL koneksi PostgreSQL Anda:
```bash
cp .env.example .env
```

### 3. Database Migration (Drizzle Kit)
Generate dan push skema ke database PostgreSQL:
```bash
# Generate file SQL migrasi
bun run db:generate

# Push skema langsung ke database
bun run db:push
```

### 4. Run Development Server
```bash
bun run dev
```

Server akan berjalan di `http://localhost:3000`.

## 📌 Available Endpoints
- `GET /` - Root Welcome message
- `GET /health` - Status dan uptime API server
- `GET /api/users` - Mengambil semua data users dari PostgreSQL
- `POST /api/users` - Menambahkan user baru
- `GET /api/roasts` - Mengambil semua data roasts dari PostgreSQL
