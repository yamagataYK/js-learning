ok = true && false;
// && かつ
ok = true || false
// ||　または　

const userInput = '';
const userName = userInput || 'user';
// ログインなどで、userInputに何も入れない時、左側がfalseとなり、右を返す

ok = x = 15;
ok = x > 10 && x < 20;

{
    const hi = 'hello';
    {

        console.log(hi);
    }
}

if (ok) {

} else
    ok = false
ok = ok ? 'ok' : 'No';

// if文でかいたバージョン

function vegetableColor(vegetable) {
    if (vegetable === 'tomato') {
        console.log('tomato is red');

    } else if (vegetable === 'pumpkin') {
        console.log('pum is orange');
    } else if (vegetable === 'onion') {
        console.log('onion is white');
    }
}
vegetableColor('pumpkin')

function vegetableColor(vegetable) {
    switch (vegetable) {
        case 'tomato': {
            const message = 'tomato is red';
            console.log(message);
            break;
        }
        case 'carrot':
        case 'pumpkin': {
            const message = `${vegetable} is orange`;
            break;
        }
        case 'onion': {
            console.log('onion is white');
            break;
        }
        default: {
            const message = 'not found'
            console.log('not found');
        }

    }
}
vegetableColor('tomato')

let count = 100;
while (count < 10) {
    console.log(count);
    count += 1;
}

let tomtoCount = 100;
do {
    tomatoCount += 1;
} while (tomatoCount < 10);



for (let pumpkinCount = 0, i = 0, ; pumpkinCount < 10; pumpkinCount += 1) {

}

