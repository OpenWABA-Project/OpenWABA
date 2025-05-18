# OpenWABA

An open-source, white-label WhatsApp Business API platform with template builder and webhook integrations.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 📖 Overview

OpenWABA enables agencies to self-host and provide WhatsApp Business API services to their clients. The platform supports white-labeling, allowing agencies to rebrand the service as their own. With OpenWABA, agencies can create multiple companies, manage user hierarchies, connect multiple WhatsApp Business accounts, and provide messaging services.

## ✨ Features

- **Multi-tenancy Architecture**
  - Agency-level administration
  - Company management under each agency
  - Admin user creation and management
  - Sub-user management with customizable permissions

- **WhatsApp Business Integration**
  - Connect multiple WhatsApp Business accounts
  - Manage multiple phone numbers per account
  - Easy setup with QR code scanning

- **White-labeling Capabilities**
  - Custom branding at agency and company levels
  - Configurable UI elements, colors, and logos

- **Messaging Features**
  - Real-time chat interface
  - Template message creation and approval workflow
  - Single and bulk message sending
  - Media message support (images, documents, audio)

- **Integration Capabilities**
  - Webhook support for lead/conversation pushing
  - CRM integration endpoints
  - API access for custom integrations

## 🛠️ Technology Stack

- **Backend**: Node.js with Express
- **Frontend**: React with Vite, Tailwind CSS, and shadcn UI components
- **Database**: PostgreSQL for reliable data storage
- **Caching**: Redis for performance optimization
- **Deployment**: Docker Compose for easy self-hosting

## 🚀 Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js (for development)
- PostgreSQL (for development without Docker)
- Redis (for development without Docker)

### Installation

```bash
# Clone the repository
git clone https://github.com/OpenWABA-Project/OpenWABA.git
cd OpenWABA

# Optional: Copy example environment variables if you need to override defaults
cp .env.example .env

# Start the application using Docker Compose (includes PostgreSQL and Redis)
docker-compose up -d
```

The application will be available at `http://localhost:3000`

> **Note:** The Docker Compose setup automatically includes and configures PostgreSQL and Redis. The .env file is only needed if you want to override default settings.

### Development Setup

#### Option 1: Using Docker Compose for all services

```bash
# Start all services with Docker Compose
docker-compose up -d
```

This will start the backend, frontend, PostgreSQL, and Redis all using Docker Compose.

#### Option 2: Local development with Docker for databases

```bash
# Start only PostgreSQL and Redis with Docker
docker-compose up -d postgres redis

# Install dependencies for backend
cd backend
npm install

# Install dependencies for frontend
cd ../frontend
npm install

# Run development servers
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

#### Option 3: Fully local development

```bash
# Install dependencies for backend
cd backend
npm install

# Install dependencies for frontend
cd ../frontend
npm install

# Copy and configure environment variables
cp .env.example .env
# Edit .env to point to your local PostgreSQL and Redis instances

# Ensure local PostgreSQL and Redis services are running
# Then start development servers

# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 📁 Project Structure

```
OpenWABA/
├── backend/             # Express backend API
├── frontend/            # React frontend application
├── docker/              # Docker configuration files
├── docs/                # Documentation
└── docker-compose.yml   # Docker Compose configuration
```

## 🤝 Contributing

Contributions are welcome! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Documentation

- [CHANGELOG.md](CHANGELOG.md) - Project version history
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - Community guidelines
- [SECURITY.md](SECURITY.md) - Security policies
- [ROADMAP.md](ROADMAP.md) - Future development plans
