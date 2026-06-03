# Alice in Wonderland AR — The Mad Hatter Experience

An interactive web experience inspired by **Alice in Wonderland**, where the user enters Wonderland through the rabbit hole, solves a “Drink Me” puzzle, explores a Wonderland map and plays a Mad Hatter tea party mini-game.

The project combines storytelling, 3D models, animations, sound effects, responsive screens and AR-inspired interaction to create a playful digital Wonderland experience.

---

## ✨ Concept

**Welcome to Wonderland — The Mad Hatter Experience** is a fantasy-themed interactive website. The user is guided through different scenes:

1. **Rabbit Hole Intro**  
   The user starts on the welcome screen and enters Wonderland by clicking the “Into the rabbit hole” button.

2. **Drink Me & Discover Room**  
   The user arrives in a room full of doors. A small door cannot be entered at first because the user is too big. By interacting with the **Drink Me** bottle, the user becomes smaller and can continue.

3. **Wonderland Map**  
   The map works as the main navigation. The user can choose different places to explore.

4. **Mad Hatter’s Tea Party**  
   The user enters a playful 3D tea party environment and has to find five glowing teacups before the madness begins.

5. **AR-inspired Wonderland Objects**  
   3D objects such as the Drink Me bottle, teacups, rabbit, Cheshire Cat and tea party table support the immersive Wonderland experience.

---

## 🎮 Features

- Interactive 3D intro scene
- Rabbit hole transition with sound
- “Drink Me” puzzle interaction
- Door feedback system
- Wonderland map with animated buttons
- Locked/unlocked location structure
- Mad Hatter tea party mini-game
- Collectable glowing teacups
- Timer and score counter
- Sparkle effects and visual feedback
- Background music toggle
- Responsive landscape layout
- Mobile orientation warning
- Three.js 3D model loading
- Fallback objects when a model fails to load

---

## 🧭 User Flow

```text
Start screen
   ↓
Rabbit Hole intro
   ↓
Drink Me & Discover room
   ↓
Solve the Drink Me puzzle
   ↓
Wonderland Map
   ↓
Mad Hatter’s Tea Party
   ↓
Find all 5 teacups
   ↓
Tea Party complete
```

---

## 🕹️ Controls

### General
- Click or tap buttons to continue through the experience.
- Use the back button to return to the previous screen.

### Drink Me Room
- Click/tap the small door to trigger feedback.
- Click/tap the **Drink Me** bottle to solve the puzzle.

### Wonderland Map
- Click/tap a numbered location to navigate.
- Location 3 opens the **Mad Hatter’s Tea Party**.
- Location 4 is locked for a future mission.

### Tea Party Game
- Click **Start the hunt** to begin.
- Move with the on-screen arrows or keyboard:
  - `W` / `Arrow Up` = forward
  - `A` / `Arrow Left` = left
  - `S` / `Arrow Down` = backward
  - `D` / `Arrow Right` = right
- Drag the screen to look around.
- On supported mobile devices, turn the phone to look around.
- Tap glowing teacups to collect them.

---

## 🛠️ Built With

- **HTML5**
- **CSS3**
- **JavaScript**
- **Three.js**
- **GLTFLoader** for loading `.glb` 3D models
- **DRACOLoader** and **MeshoptDecoder** for optimized 3D assets
- **Git LFS** for large `.glb` files

No build tools are required. The project runs as a static website.

---

## 📁 Project Structure

```text
AR-AliceInWonderland-The-mad-Hatter-Experience-main/
│
├── index.html                 # Rabbit hole intro screen
├── drink-me.html              # Drink Me puzzle scene
├── map.html                   # Wonderland map navigation
├── tea-party.html             # Mad Hatter teacup hunt game
│
├── js/
│   └── orientation-guard.js   # Mobile landscape orientation warning
│
├── img/
│   ├── Doors.png              # Background image for Drink Me room
│   └── maps-background.png    # Background image for Wonderland map
│
└── assets/
    ├── *.glb                  # 3D models
    ├── falling.mp3            # Rabbit hole sound effect
    └── drink-me-sound.mp3     # Drink Me interaction sound
```

---

## 🚀 How to Run the Project

Because the project uses JavaScript modules and loads 3D models, it should be opened through a local server instead of directly opening the HTML file.

### Option 1: Run with Python

Open the project folder in a terminal and run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2: Run with VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

---

## 📦 Important: Git LFS

The `.glb` files are stored with **Git LFS**. If the 3D models do not load correctly after cloning the repository, install Git LFS and pull the files again:

```bash
git lfs install
git lfs pull
```

Without Git LFS, the `.glb` files may only appear as small pointer files instead of the real 3D models.

---

## 📱 Responsive Design

The experience is designed mainly for **landscape mode**, especially on mobile devices. If the user opens the project in portrait mode, an orientation warning appears asking them to rotate the device.

This keeps the interactive scenes playable and prevents the layout from becoming too cramped.

---

## 🎨 Visual Style

The visual design uses a magical Wonderland-inspired style with:

- Dark fantasy backgrounds
- Purple, pink, gold and teal color accents
- Glowing buttons
- Sparkle effects
- Irregular paper-like UI shapes
- Playful typography
- Surreal 3D objects

The goal is to balance Wonderland chaos with clear interaction, so the user feels surprised without getting lost.

---

## 🔮 Future Improvements

Possible next steps for the project:

- Add a real WebXR AR mode using the device camera
- Add more interactive Wonderland locations
- Unlock the Queen of Hearts mission
- Add more voice lines or character dialogue
- Improve loading performance for larger 3D models
- Add accessibility options such as captions and reduced motion
- Add a final ending screen or story conclusion

---

## 👩‍💻 Author

**Alicia Fernandes**  
Project: **Alice in Wonderland AR — The Mad Hatter Experience**

---

## 📄 License

This project was created for educational purposes.  
Alice in Wonderland-inspired characters and visual references belong to their respective copyright owners.
