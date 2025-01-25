const GTRecipeType = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipeType");
const IO = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.IO");
const ItemRecipeCapability = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability");
const FluidRecipeCapability = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.FluidRecipeCapability");
const IItemHandlerModifiable = Java.loadClass("net.minecraftforge.items.IItemHandlerModifiable");
const CombinedInvWrapper = Java.loadClass("net.minecraftforge.items.wrapper.CombinedInvWrapper");
const IFluidHandler = Java.loadClass("net.minecraftforge.fluids.capability.IFluidHandler")
const GTStringUtils = Java.loadClass("com.gregtechceu.gtceu.utils.GTStringUtils")

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // ??? This is after gtceu:receipe_type

    GTRecipeTypes.get('canner').addCustomRecipeLogic(
        new JavaAdapter(GTRecipeType.ICustomRecipeLogic, {
            createCustomRecipe: (holder) => {
                // TODO: Simplify conversion
                const itemInputs = Array.from(holder.getCapabilitiesProxy().get(IO.IN, ItemRecipeCapability.CAP).toArray())
                    .filter(p => p instanceof IItemHandlerModifiable).map(p => IItemHandlerModifiable(p));
                const fluidInputs = holder.getCapabilitiesProxy().get(IO.IN, FluidRecipeCapability.CAP);
                const inputs = new CombinedInvWrapper(itemInputs);
                let inputStack = null;
                for (let i = 0; i < inputs.getSlots(); i++) {
                    let item = inputs.getStackInSlot(i);
                    console.log(item);
                    if (!item.isEmpty() && item == 'kubejs:infinity_cell_base') {
                        inputStack = item.copy()
                        inputStack.count = 1;
                        break;
                    }
                }
                if (!inputStack) {
                    return;
                }

                for (const fluidInput of fluidInputs) {
                    let fluidStack = fluidInput.getFluidInTank(0);
                    if (fluidStack.isEmpty() || fluidStack.amount < 1000) {
                        continue;
                    }
                    let fluidId = Fluid.getId(fluidStack.fluid);
                    console.log(fluidId);
                    let outputStack = Item.of('expatternprovider:infinity_cell')
                        .withNBT({ record: { "#c": "ae2:f", id: fluidId.toString() } })
                    console.log(outputStack)
                    return GTRecipeTypes.CANNER_RECIPES["recipeBuilder(net.minecraft.resources.ResourceLocation,java.lang.Object[])"](new ResourceLocation('kubejs', 'infinity_cell_' + fluidId.namespace + '_'+ fluidId.path))
                        ["inputItems(net.minecraft.world.item.ItemStack)"](inputStack)
                        ["inputFluids(net.minecraftforge.fluids.FluidStack)"](fluidStack)
                        ["outputItems(net.minecraft.world.item.ItemStack)"](outputStack)
                        .duration(16).EUt(4)
                        .buildRawRecipe();

                }
            },
        })
    )
})
