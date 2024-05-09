PlayerEvents.loggedIn(event => {
    event.player.tell(['Welcome to ', Text.blue('Monifactory Alpha'), ` on ${capitalize(`${global.packmode}`)} mode.`]); // force recast to string
    event.player.tell(['Report issues to ', Text.blue('the github').underlined().clickOpenUrl('https://github.com/ThePansmith/Monifactory').hover('Click to open'), '.']);
})
