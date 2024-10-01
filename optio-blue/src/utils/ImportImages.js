// rc stands for "require.content"
function importAll(rc) {
    let images = {};
    rc.keys().forEach((item, index) => {
        images[item.replace('./', '')] = rc(item);
    });
    return images;
}

const images = importAll(require.context('../assets/images/carousel', false, /\.(png|jpe?g|svg)$/));

export default images;