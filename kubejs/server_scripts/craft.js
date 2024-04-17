/**
 ** craft.js -- a craft.zs equivalent?
 *! Created by Theonlytazz
 * Date - 06.04.2024
 *? Thanks to Lexxie for her amazing utils <3
 *? Thanks to Daddy Aurug for all their help
 *? Thanks to many many more <3
 *
 * For all Containers with 9 Slots per Row, use 1 triggerItem
 * if a Container has more than 9 Slots, use n-Amount of triggerItems 
 * (ex 12 triggerItems for a Diamond Chest)
 */

BlockEvents.rightClicked(event => {
	const { block,item,player,level,server,target,entity, hand } = event
	if(hand != 'MAIN_HAND') return
	if(!player.isCrouching()) return


	//------------------------SETTINGS----------------------------
	const triggerItem = 'minecraft:nether_star'
	const typeRemoval = 'minecraft:iron_nugget'
	const allRemoval = 'minecraft:lava_bucket'
	//------------------------SETTINGS----------------------------
	
	// If Container smaller than Vanilla Chest, return
	let totalsize = block.inventory?.width * block.inventory?.height ?? 0

	if (item != triggerItem ||
		totalsize < 27) return

    
	let keys = 'ABCDEFGHI'
	let inv = block.inventory
	let spacingW 
	let spacingH

	// Variable Width, useable if more than 9 slots per row
	let width = block.inventory.width
    let height = block.inventory.height
	
	let maxOffsetX = Math.floor(width / 4) 
	let maxOffsetY = Math.floor(height / 3) 
	let allRecipes = []

	player.tell(`\n-------------${Item.of(block.id)}-------------`)

	//Recipe Handler
	for(let offsetY = 0; offsetY < maxOffsetY; offsetY++){
		for(let offsetX = 0; offsetX < maxOffsetX; offsetX++){
			let offset = offsetX*4 + offsetY*(3*width)
			let index = offsetY*2+offsetY+offsetX+1

			// Skip if no Output Item
			let output = inv.getStackInSlot(offset+3 + width)
			if(output.id == 'minecraft:air') continue
            if(output.count > 1) output = `'${output.count}x ${output.id}'`
            else output = `'${output.id}'`

			// Raw Crafting Grid Map
			let mapRaw = {
				1: inv.getStackInSlot(offset+0),2: inv.getStackInSlot(offset+1),3: inv.getStackInSlot(offset+2),
				4: inv.getStackInSlot(offset+0 + width),5: inv.getStackInSlot(offset+1 + width),6: inv.getStackInSlot(offset+2 + width),
				7: inv.getStackInSlot(offset+0 + (width*2)),8: inv.getStackInSlot(offset+1 + (width*2)),9: inv.getStackInSlot(offset+2 + (width*2))
			}


			// Create KeyMap / GridList / Shapeless List
			let itemList = []
			let keyMap = []
			let gridList = []
			let shapelessList = []
			for (let i = 1; i <= Object.values(mapRaw).length; i++) {
				let item = mapRaw[i]
                
				if(item.id != 'minecraft:air') shapelessList.push(`'${item.id}'`)
				if(item.id != 'minecraft:air' && !itemList.includes(item.id)){
					itemList.push(item.id)
					keyMap.push(`${keys[Object.values(keyMap).length]}: '${item.id}'`)
				}
				if(item.id == 'minecraft:air') gridList.push(' ')
				else gridList.push(keys[itemList.indexOf(item.id)])
			}
			let input = gridList.join('').match(/.{1,3}/g).toString().split(',').join(`','`) ?? []


			// Removing Recipe Handler
			let removeStr
			let type
			let removalItem = inv.getStackInSlot(offset+3 + (width*2)) ?? ''
			let modifier = inv.getStackInSlot(offset+3)
			switch(removalItem){
				case typeRemoval:{
					switch(modifier.id){
						case 'minecraft:stonecutter': {type = 'minecraft:stonecutter';break}
						case 'minecraft:campfire': {type = 'minecraft:campfire_cooking';break}
						case 'minecraft:smoker': {type = 'minecraft:smoking';break}
						case 'minecraft:blast_furnace': {type = 'minecraft:blasting';break}
						case 'minecraft:furnace': {type = 'minecraft:smelting';break}
						case 'minecraft:glass_pane': {type = 'minecraft:shapeless';break}
						case 'Item.empty': {type = 'minecraft:shaped';break}
					}
					removeStr = `event.remove({type: '${type}', output: ${output}})`
					break
				}
				case allRemoval:{removeStr = `event.remove({output: ${output}})`;break}	
			}


			// Recipe Handler
			let recipe
			type = "Shaped"
			switch(modifier){
				case 'minecraft:stonecutter': {recipe = `event.stonecutting(${output}, '${mapRaw[5].id}')`; type='Stonecutting'; break}
				case 'minecraft:campfire': {recipe = `event.campfireCooking(${output}, '${mapRaw[5].id}')`; type='Campfire'; break}
				case 'minecraft:smoker': {recipe = `event.smoking(${output}, '${mapRaw[5].id}')`; type='Smoking'; break}
				case 'minecraft:blast_furnace': {recipe = `event.blasting(${output}, '${mapRaw[5].id}')`; type = 'Blasting'; break}
				case 'minecraft:furnace': {recipe = `event.smelting(${output}, '${mapRaw[5].id}')`; type = 'Smelting';break}
				case 'minecraft:glass_pane':{recipe = `event.shapeless(${output}, [${shapelessList.toString()}])`; type = 'Shapeless'; break}
				default:{recipe = `event.shaped(${output}, ['${input}'], {${keyMap.toString()}})`}
			}
			


			// Printing Lines

			// Removal Recipe String Print
			if(removalItem.id != 'minecraft:air'){
				let removeString
				if (removalItem == allRemoval) removeString = buildString(index, output, recipe, 'All', true)
				else if (removalItem == typeRemoval) removeString = buildString(index, output, recipe, type, true)
				player.tell(removeString)
				allRecipes.push(removeStr)
			}
			allRecipes.push(recipe)
			// Crafting Recipe String Print
			let craftString = buildString(index, output, recipe, type)
			event.player.tell(craftString)
		}
	}
	// All Recipe String Print
	if(allRecipes.length <= 1) return
	player.tell([' ', [Component.darkRed(`\n[A]`).click(`copy:${allRecipes.join('\n')}`).hover(`All Recipes`), 
									Component.white(`- all Recipes`)]])
})


/**
 ** Thanks to ChiefArug and Lexxie
 ** Custom Parser for Components
 * @param {int} index Index of the Recipe to print 
 * @param {ItemStackJS} output Output of Recipe 
 * @param {ListJS} recipe List of Item Inputs
 * @param {String} type Type of Recipe
 * @param {boolean} removal  Optional, only needed for removing Recipes
 * @returns 
 */
function buildString(index, output, recipe, type, removal){
	removal = removal ?? false
	
	let itemName = output
	let clickEvent = 'copy:' + recipe
	let hoverText
	let recipeInfo
	if(removal){
		hoverText = ['', [Component.white(`Removal Recipe of: \n    `),Component.white(`${Item.of(output)}`),Component.white(`\n    Type: ${type.toString()}`)]]
		recipeInfo = Component.white(` - Removal Recipe: `).append(itemName)
	} else {
		hoverText = [' ', [Component.white(`${type}`), Component.white('Recipe of:\n    '), Component.white(`${itemName}`)]]
		recipeInfo = Component.white(` - ${type} Recipe: `).append(itemName)
	}

	let pinkNumber = Component.lightPurple(`[${index}]`).click(clickEvent).hover(hoverText)
	let textOutput = pinkNumber.append(recipeInfo)
	return textOutput

}
