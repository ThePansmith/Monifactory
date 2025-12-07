NuclearCraft Custom Fuel Textures
==================================================

This directory contains textures for custom fission fuels.

AUTOMATIC TEXTURE GENERATION:
  Textures are automatically generated from the blank fuel template
  with color tints based on fuel name and type. The system will:
  - Generate unique colors for each fuel based on its name
  - Apply darker tones for depleted fuels
  - Apply variant-specific color shifts (oxide, nitride, etc.)
  - Skip generation if a texture already exists

CUSTOM TEXTURES:
  You can override auto-generated textures by placing your own
  PNG files in the appropriate directories. The generator will
  not overwrite existing textures.

Directory Structure:
  fuel/
    <group>/              (e.g., uranium, thorium, plutonium)
      <name>.png          Active fuel texture
      <name>_ox.png       Oxide variant
      <name>_ni.png       Nitride variant
      <name>_za.png       Zirconium Alloy variant
      <name>_tr.png       TRISO variant
      depleted/
        <name>.png        Depleted fuel texture
        <name>_ox.png     Depleted oxide
        <name>_ni.png     Depleted nitride
        <name>_za.png     Depleted zirconium alloy
        <name>_tr.png     Depleted TRISO

Texture Specifications:
  - Format: PNG with transparency support
  - Size: 16x16 pixels (or 32x32 for HD)
  - Color coding (auto-applied):
    * Base: Bright, vibrant colors (hash-based)
    * Oxide (_ox): Lighter with white/gray tones
    * Nitride (_ni): Blue/purple tones
    * Zirconium Alloy (_za): Metallic silver
    * TRISO (_tr): Warmer tones
    * Depleted: Darker, grayer versions

Registered Custom Fuel Groups:

To regenerate textures:
  1. Delete the texture files you want to regenerate
  2. Run the command: /nc_fuel_models
  3. Press F3+T in-game to reload resources
