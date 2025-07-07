# 🏁 Car Racing Game

[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/r/nitinsharma/car-racing-game)
[![Kubernetes](https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://car-racing-website.netlify.app/)

An exciting car racing game built with vanilla JavaScript, containerized with Docker, and deployed on Kubernetes for production-grade scalability.

## 🎮 Features

- **Real-time Gameplay** - Smooth 60fps racing experience
- **Responsive Controls** - Keyboard-based car movement
- **Obstacle Avoidance** - Dynamic obstacle generation
- **Score Tracking** - Real-time score updates
- **Modern UI** - Clean, mobile-friendly interface

## 🚀 Live Demo

🌐 **Play Now:** [Car Racing Game](https://car-racing-website.netlify.app/)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Game structure |
| **CSS3** | Styling & animations |
| **JavaScript** | Game logic |
| **Docker** | Containerization |
| **Kubernetes** | Orchestration |
| **Nginx** | Web server |

## 📁 Project Structure

```
car-racing-game/
├── 🐳 Dockerfile              # Container build configuration
├── ☸️  k8s/
│   ├── config.yml            # Kind cluster configuration
│   ├── namespace.yml         # Kubernetes namespace
│   ├── deployment.yml        # Pod deployment manifest
│   └── service.yml           # Service exposure configuration
├── 🎮 src/
│   ├── index.html           # Main game file
│   ├── style.css            # Game styling
│   └── script.js            # Game logic
└── 📄 README.md             # This file
```

## 🚀 Quick Start

### Option 1: Docker (Recommended)

```bash
# Pull and run from Docker Hub
docker pull nitinsharma/car-racing-game
docker run -d -p 8080:80 nitinsharma/car-racing-game
```

🌐 **Access:** http://localhost:8080

### Option 2: Local Development

```bash
# Clone repository
git clone https://github.com/your-username/car-racing-game.git
cd car-racing-game

# Serve with any web server
python -m http.server 8000
# OR
npx serve .
```

## ☸️ Kubernetes Deployment

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/) (for local clusters)

### Step 1: Create Kubernetes Cluster

```bash
# Create cluster with port mapping
kind create cluster --name car-game-cluster --config=k8s/config.yml
```

### Step 2: Deploy Application

```bash
# Apply all Kubernetes manifests
kubectl apply -f k8s/namespace.yml
kubectl apply -f k8s/deployment.yml
kubectl apply -f k8s/service.yml
```

### Step 3: Access Application

```bash
# Port forward to access the game
kubectl port-forward service/car-game-service -n car-game 8080:80
```

🎮 **Play at:** http://localhost:8080

## 🔧 Configuration Files

### Dockerfile
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

### Kubernetes Manifests

- **namespace.yml** - Creates isolated namespace for the game
- **deployment.yml** - Defines pod specifications and replicas
- **service.yml** - Exposes the application via NodePort
- **config.yml** - Kind cluster configuration with port mappings

## 📊 Monitoring & Scaling

### Check Deployment Status
```bash
kubectl get pods -n car-game
kubectl get services -n car-game
```

### Scale Application
```bash
# Scale to 3 replicas
kubectl scale deployment car-game-deployment -n car-game --replicas=3
```

### View Logs
```bash
kubectl logs -f deployment/car-game-deployment -n car-game
```

## 🔄 CI/CD Integration

This project is ready for CI/CD integration with:

- **GitHub Actions** - Automated testing and deployment
- **Docker Hub** - Automated image builds
- **ArgoCD** - GitOps deployment to Kubernetes

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using vanilla JavaScript
- Containerized with Docker for portability
- Orchestrated with Kubernetes for scalability
- Deployed on Netlify for global accessibility

---

<div align="center">

**🏎️ Ready to race? Start your engines! 🏁**

[🎮 Play Now](https://car-racing-website.netlify.app/) | [📦 Docker Hub](https://hub.docker.com/r/nitinsharma/car-racing-game) | [⭐ Star this repo](https://github.com/your-username/car-racing-game)

</div>
