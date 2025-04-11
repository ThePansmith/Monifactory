// Replace all instances of soldering alloy with advanced solder in some areas
ServerEvents.recipes(event => {
    event.replaceInput({ id: /gtceu:assembly_line/ }, Fluid.of("gtceu:soldering_alloy"), Fluid.of("gtceu:advanced_soldering_alloy"))
})
