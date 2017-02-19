export function arrayToMap(arr) {
    return arr.reduce((acc, entity) => ({
        ...acc, [entity.id]: entity
    }), {})
}

export function mapToArr(map) {
    return Object.keys(map).map(id => map[id])
}

export function guidGenerator() {
    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}