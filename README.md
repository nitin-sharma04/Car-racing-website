# Car Racing Game

This project contains a simple car racing game and its Kubernetes deployment configuration.

## Structure

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

## Usage
- Build the Docker image using the Dockerfile.
- Deploy to Kubernetes using the manifests in `k8s/`.
- The game runs in the browser from `src/index.html`.
