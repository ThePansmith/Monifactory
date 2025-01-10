let placeholder = 'steve'
let credits = [
    { name: "Pansmith", uuid: "e8e08277-cc3d-4b35-8ac9-da0af044815c", creditHover: "Main Developer" },
    { name: "Cyb0124", uuid: "0171c998-50a5-4e31-9277-4516f1643d3e", creditHover: "Contributor" },
    { name: "Jamiscus", uuid: "56db0044-9fc8-4ae3-83d6-1adee75aa799", creditHover: "Contributor" },
    { name: "Deepacat", uuid: "15d2f1b4-dd16-405e-a4d4-a89ecbeeb593", creditHover: "Contributor" },
    { name: "CubeBotFan", uuid: "848590fb-a983-4e05-acb0-f6e3f0cde4b7", creditHover: "Contributor" },
    { name: "EpicPuppy613", uuid: "a1e6faac-7bfa-4f5c-b5df-06942518d218", creditHover: "Contributor" },
    { name: "LetterN", uuid: "3f529105-93b0-491b-b545-b4fbcf8a6902", creditHover: "Contributor" },
    { name: "Ciggymunch", uuid: "fa544035-5c57-49c9-8c8f-f44deaa086eb", creditHover: "Contributor" },
    { name: "WithersChat", uuid: "13d0aeda-c1e9-4d91-a9b7-4d4e6a19128e", creditHover: "Contributor" },
    { name: "JuiceyBeans", uuid: "d7dfa467-51b9-4beb-9a40-24ec2c2b8759", creditHover: "Contributor" },
    { name: "Xefyr0", uuid: "a3b08192-f19b-4037-abcd-15093454d905", creditHover: "Contributor" },
    // { name: "SparkedTheorem", uuid: placeholder, creditHover: "Contributor" },
    // { name: "IamNotBrianZ", uuid: placeholder, creditHover: "Contributor" },
    // { name: "tomprince", uuid: placeholder, creditHover: "Contributor" },
    // { name: "StarskyXIII", uuid: placeholder, creditHover: "Contributor" },
    // { name: "glektarssza", uuid: placeholder, creditHover: "Contributor" },
    // { name: "zcarp7220", uuid: placeholder, creditHover: "Contributor" },
    // { name: "Echoloquate", uuid: placeholder, creditHover: "Contributor" },
    // { name: "Titop54", uuid: placeholder, creditHover: "Contributor" },
    // { name: "owleee", uuid: placeholder, creditHover: "Contributor" },
    // { name: "lzzc87", uuid: placeholder, creditHover: "Contributor" },
    // { name: "Spicierspace153", uuid: placeholder, creditHover: "Contributor" },
    // { name: "globalista-dev", uuid: placeholder, creditHover: "Contributor" },
    // { name: "omergunr100", uuid: placeholder, creditHover: "Contributor" },
    // { name: "Blackalf14", uuid: placeholder, creditHover: "Contributor" },
    // { name: "threefold", uuid: placeholder, creditHover: "Contributor" },
    // { name: "RushanM", uuid: placeholder, creditHover: "Contributor" },
    // { name: "Midius", uuid: placeholder, creditHover: "Contributor" },
    // { name: "eve336", uuid: placeholder, creditHover: "Contributor" },
    // { name: "Zhaocl1997", uuid: placeholder, creditHover: "Contributor" },
    // { name: "Giovanni-NL", uuid: placeholder, creditHover: "Contributor" },
    // { name: "SillyAsriel", uuid: placeholder, creditHover: "Contributor" },
    // { name: "AubreyFumo", uuid: placeholder, creditHover: "Contributor" },
    // { name: "esmenard", uuid: placeholder, creditHover: "Contributor" },
]

let startX = 20; // Initial x position
let startY = 20; // Initial y position
const stepX = 25; // X increment for each element
const maxX = 450; // X limit before resetting
const stepY = 50; // Y increment when resetting X
const hoverOffsetX = -6; // X offset for hover button
const hoverOffsetY = 5; // Y offset for hover button

let result = "";

credits.forEach(contributor => {
    const { name, uuid, creditHover } = contributor;

    // Add Player Entity Element
    result += `
    element {
        copy_client_player = false
        playername = ${uuid}
        auto_skin = true
        auto_cape = true
        slim = false
        skin_source = ${uuid}
        scale = 15
        is_baby = false
        crouching = false
        showname = false
        head_follows_mouse = false
        body_follows_mouse = false
        headrotationx = -26.470589
        headrotationy = 0.0
        bodyrotationx = -26.470589
        bodyrotationy = -26.470589
        head_z_rot = 0.0
        left_arm_x_rot = 0.0
        left_arm_y_rot = 0.0
        left_arm_z_rot = 0.0
        right_arm_x_rot = 0.0
        right_arm_y_rot = 0.0
        right_arm_z_rot = 0.0
        left_leg_x_rot = 0.0
        left_leg_y_rot = 0.0
        left_leg_z_rot = 0.0
        right_leg_x_rot = 0.0
        right_leg_y_rot = 0.0
        right_leg_z_rot = 0.0
        element_type = fancymenu_customization_player_entity
        instance_identifier = ${generateUUID()}-player
        base_opacity = 1.0
        x = ${startX}
        y = ${startY}
        width = 9
        height = 27
        anchor_point = mid-centered
    }
    `;

    // Add Button Element
    result += `
    element {
        nine_slice_custom_background = false
        restartbackgroundanimations = true
        loopbackgroundanimations = true
        nine_slice_border_x = 5
        nine_slice_border_y = 5
        description = ${name}
        element_type = custom_button
        instance_identifier = ${generateUUID()}-button
        backgroundnormal = [source:local]/config/fancymenu/assets/button.bg.png
        backgroundhovered = [source:local]/config/fancymenu/assets/button.bg.png
        navigatable = true
        custom_element_layer_name = Patreon
        appearance_delay_seconds = 1.0
        base_opacity = 1.0
        x = ${startX + hoverOffsetX}
        y = ${startY + hoverOffsetY}
        width = 21
        height = 19
        auto_sizing = true
        auto_sizing_base_screen_width = 1920
        auto_sizing_base_screen_height = 1080
        stay_on_screen = true
        anchor_point = top-left
        sticky_anchor = false
        creditHover = ${creditHover}
    }
    `;

    // Update x and y positions
    startX += stepX;
    if (startX > maxX) {
        startX = 20;
        startY += stepY;
    }
});

console.log(result);

// Helper function to generate unique identifiers
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
