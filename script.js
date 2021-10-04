function copy(x) {
    let box, color;

    switch (x.id) {
        case 'box-1':
            box = document.getElementById('box-1');
            break;

        case 'box-2':
            box = document.getElementById('box-2');
            break;

        case 'box-3':
            box = document.getElementById('box-3');
            break;

        case 'box-4':
            box = document.getElementById('box-4');
            break;

        case 'box-5':
            box = document.getElementById('box-5');
            break;

        case 'box-6':
            box = document.getElementById('box-6');
            break;

        case 'box-7':
            box = document.getElementById('box-7');
            break;

        case 'box-8':
            box = document.getElementById('box-8');
            break;

        case 'box-9':
            box = document.getElementById('box-9');
            break;

        case 'box-10':
            box = document.getElementById('box-10');
            break;

        case 'box-11':
            box = document.getElementById('box-11');
            break;

        case 'box-12':
            box = document.getElementById('box-12');
            break;

        case 'box-13':
            box = document.getElementById('box-13');
            break;

        case 'box-14':
            box = document.getElementById('box-14');
            break;

        case 'box-15':
            box = document.getElementById('box-15');
            break;

        case 'box-16':
            box = document.getElementById('box-16');
            break;

        case 'box-17':
            box = document.getElementById('box-17');
            break;

        case 'box-18':
            box = document.getElementById('box-18');
            break;

        case 'box-19':
            box = document.getElementById('box-19');
            break;

        case 'box-20':
            box = document.getElementById('box-20');
            break;

        case 'box-21':
            box = document.getElementById('box-21');
            break;

        case 'box-22':
            box = document.getElementById('box-22');
            break;

        case 'box-23':
            box = document.getElementById('box-23');
            break;

        case 'box-24':
            box = document.getElementById('box-24');
            break;

        case 'box-25':
            box = document.getElementById('box-25');
            break;

        case 'box-26':
            box = document.getElementById('box-26');
            break;

        case 'box-27':
            box = document.getElementById('box-27');
            break;

        case 'box-28':
            box = document.getElementById('box-28');
            break;

        case 'box-29':
            box = document.getElementById('box-29');
            break;

        case 'box-30':
            box = document.getElementById('box-30');
            break;

        case 'box-31':
            box = document.getElementById('box-31');
            break;

        case 'box-32':
            box = document.getElementById('box-32');
            break;

        case 'box-33':
            box = document.getElementById('box-33');
            break;

        case 'box-34':
            box = document.getElementById('box-34');
            break;

        case 'box-35':
            box = document.getElementById('box-35');
            break;

        case 'box-36':
            box = document.getElementById('box-36');
            break;

        case 'box-37':
            box = document.getElementById('box-37');
            break;

        case 'box-38':
            box = document.getElementById('box-38');
            break;

        case 'box-39':
            box = document.getElementById('box-39');
            break;

        case 'box-40':
            box = document.getElementById('box-40');
            break;

        case 'box-41':
            box = document.getElementById('box-41');
            break;

        case 'box-42':
            box = document.getElementById('box-42');
            break;

        case 'box-43':
            box = document.getElementById('box-43');
            break;

        case 'box-44':
            box = document.getElementById('box-44');
            break;

        case 'box-45':
            box = document.getElementById('box-45');
            break;

        case 'box-46':
            box = document.getElementById('box-46');
            break;

        case 'box-47':
            box = document.getElementById('box-47');
            break;

        case 'box-48':
            box = document.getElementById('box-48');
            break;

        case 'box-49':
            box = document.getElementById('box-49');
            break;

        case 'box-50':
            box = document.getElementById('box-50');
            break;

        case 'box-51':
            box = document.getElementById('box-51');
            break;

        case 'box-52':
            box = document.getElementById('box-52');
            break;

        case 'box-53':
            box = document.getElementById('box-53');
            break;

        case 'box-54':
            box = document.getElementById('box-54');
            break;

        case 'box-55':
            box = document.getElementById('box-55');
            break;

        case 'box-56':
            box = document.getElementById('box-56');
            break;

        case 'box-57':
            box = document.getElementById('box-57');
            break;

        case 'box-58':
            box = document.getElementById('box-58');
            break;

        case 'box-59':
            box = document.getElementById('box-59');
            break;

        case 'box-60':
            box = document.getElementById('box-60');
            break;

        default:
            break;
    }

    color = getComputedStyle(box).backgroundColor;

    let el = document.createElement('textarea');
    el.value = color;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    let finalResult = el.value;
    alert(`Copied the color:  "${finalResult}"`);
}