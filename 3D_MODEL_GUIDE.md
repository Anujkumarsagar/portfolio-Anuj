# 3D Model Integration Guide

## Where to Upload Your Car Model

Your 3D car model files should be placed in the `/public/models/` directory.

### Supported Formats
- `.glb` (Recommended - includes texture and materials)
- `.gltf` (Text-based format with separate texture files)
- `.obj` (If you have this format, it needs to be converted to .glb or .gltf)

### Current Setup
The 3D Car Viewer component (`/components/3d/car-viewer.tsx`) is configured to load:
- **Primary**: `/public/models/car.glb` (recommended)
- **Fallback**: A procedurally generated dummy car model

### Steps to Add Your Car Model

1. **Convert Your Model** (if needed)
   - If you have a `.obj` file, use one of these tools to convert to `.glb`:
     - [Babylon.js Sandbox](https://sandbox.babylonjs.com/)
     - [Three.js Editor](https://threejs.org/editor/)
     - Blender (free, professional tool)

2. **Place Your Model**
   - Copy your `car.glb` file to: `/public/models/car.glb`
   - If you have material/texture files, keep them in the same directory

3. **Restart Dev Server**
   - The component will automatically load your model on refresh

### Features Already Implemented

- **Auto-rotation**: Car rotates smoothly by default
- **Interactive Controls**: 
  - Click and drag to rotate
  - Scroll to zoom
  - Right-click and drag to pan
- **Professional Lighting**: Multiple light sources for realistic rendering
- **Responsive**: Works on desktop and mobile

### Model Size Recommendations

- File size: Keep under 10MB for best performance
- Polygon count: 10k-100k polygons (depends on detail level)
- Textures: Use compressed formats (PNG/JPG) when possible

### Troubleshooting

If your model doesn't appear:

1. **Check file path**: Ensure it's at `/public/models/car.glb`
2. **Check format**: Use GLTF/GLB, not OBJ directly
3. **Check file size**: Very large files may take time to load
4. **Browser console**: Look for errors in browser DevTools (F12)
5. **Clear cache**: Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

### Advanced: Customizing the Viewer

Edit `/components/3d/car-viewer.tsx` to customize:

```typescript
// Rotation speed
autoRotateSpeed={3} // Change this value (1-10)

// Camera position
position={[0, 2, 6]} // Adjust camera distance

// Model scale
scale={1} // Adjust if your model is too large/small
```

## Notes

- The component uses React Three Fiber (3D engine built on Three.js)
- Lighting is pre-configured for professional appearance
- The dummy car shows what it looks like before your model is loaded
- All animations are smooth and GPU-accelerated

Good luck with your portfolio! The 3D car viewer will definitely impress visitors.
