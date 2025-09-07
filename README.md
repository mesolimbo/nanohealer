# Nanohealer 🚑

An isometric medical puzzle game where you guide an ambulance through infected tissue to heal patients.

## Game Features

- **Isometric puzzle gameplay** - Navigate a 10×10 grid healing infected tiles
- **Strength management** - Complete levels within 25 strength points
- **Power-ups** - Collect pill power-ups (💊) to gain extra strength
- **3D visuals** - Layered isometric graphics with shadows and depth
- **Medical theme** - Help heal patients by clearing infected tissue

## Getting Started

### Development
```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to play the game.

### Production Build
```bash
npm run build
```

This creates a `dist/` directory with all files needed for deployment.

### Production run
```bash
# You can run the following command via run.sh
npm run start
```

### Verification
Visit `/version` endpoint to see runtime information and confirm the server is running.

## Game Controls

### Desktop
- **Arrow keys** or **WASD** - Move ambulance
- **Enter** - Restart game (when game over)

### Mobile
- **Swipe/drag** on the game canvas to move ambulance
- **Swipe directions match isometric grid:**
  - Swipe down-right → Move right
  - Swipe down-left → Move down
  - Swipe up-left → Move left
  - Swipe up-right → Move up

### Goal
- **Heal all infected (red) tiles to win**
- **Collect pill power-ups (💊) for extra strength**

## Technical Details

- Built with HTML5 Canvas and vanilla JavaScript
- Node.js/Express backend for hosting
- Isometric coordinate system with proper shadows
- Responsive design optimized for phone aspect ratio

## Files

- `index.html` - Main game file
- `logo.svg` - Game logo
- `server.js` - Express server
- `version.json` - Version metadata
- `build.js` - Build script for packaging

Enjoy healing the world! 🏥✨
