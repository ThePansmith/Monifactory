BlockEvents.rightClicked(event =>
    {
        const player = event.getEntity();
        const heldItemStack = player.getMainHandItem();

        // Check if the player is sneaking and the held item is the specific tool needed (e.g., "controller_extension")
        if (player.isCrouching() && heldItemStack.getItem().id === 'functionalstorage:controller_extension') {

            /**
             * @type {Internal.BlockContainerJS} 
             */
            const targetBlock = event.block;
            const targetPos = event.block.getPos();
            const blockID = targetBlock.id;

            const drawer_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'warped', 'crimson'];
            const drawer_sizes = ['1', '2', '4'];

            const matches = blockID.match(new RegExp(`^storagedrawers:(${drawer_types.join('|')})_(full|half)_drawers_(${drawer_sizes.join('|')})$`));


            if (matches) {
                const woodType = matches[1]; // Extract the wood type
                // const drawerType = matches[2]; // Extract 'full' or 'half'
                const drawerSize = matches[3]; // Extract the size of the drawer

                const nbtData = targetBlock.getEntityData();

                const facing = targetBlock.getBlockState().getValue(targetBlock.getBlockState().getProperties().toArray()[0]).name().toLowerCase();
                const locked = !!nbtData.getByte("Lock")

                const drawersData = nbtData.getList("Drawers", 10);
                const drawersDataSize = drawersData.size();
                const targetNBTs = [];

                for (let i = 0; i < drawersDataSize; ++i) {
                    let itemCount = drawersData.getCompound(i).getInt("Count");
                    let itemId = drawersData.getCompound(i).getCompound("Item").getString("id");

                    targetNBTs.push(`${drawersDataSize - i - 1}: {Amount: ${itemCount}, Stack: {id: "${itemId}", Count: 1b}}`);
                }

                const newBlock = `functionalstorage:${woodType}_${drawerSize}`;

                event.server.runCommandSilent(`execute in ${event.level.dimension} run setblock ${targetPos.x} ${targetPos.y} ${targetPos.z} ${newBlock}[locked=${locked},subfacing=${facing}]{handler: {BigItems: {${targetNBTs.join(',')}}}}`);
                event.player.tell("Drawer converted to Functional Storage");
                if (!player.isCreativeMode()) heldItemStack.setCount(heldItemStack.count - 1);

                event.cancel();
            }
        }
    });