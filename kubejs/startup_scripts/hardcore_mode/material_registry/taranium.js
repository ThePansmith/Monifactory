//! Hardcore Mode mode taranium line
//? Keep in sync with
//? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsTaraniumLine.java

// Taranium Line Stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isHardcoreMode) {
        return;
    }

    event.create('stone_residue')
        .dust()
        .color(0x4d4d4d).iconSet('rough')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('uncommon_residue')
        .dust()
        .color(0x4d4ded).iconSet('fine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('oxidised_residue')
        .dust()
        .color(0xad4d4d).iconSet('fine')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('refined_residue')
        .dust()
        .color(0x2a8a21).iconSet('shiny')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

    event.create('clean_inert_residue')
        .dust()
        .color(0x3bbd2f).iconSet('shiny')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})