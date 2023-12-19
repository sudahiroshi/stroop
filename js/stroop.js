const c_name = [ "黒", "青", "赤", "紫", "緑", "橙" ];
const color = [ "black", "blue", "red", "purple", "green", "orange" ];
const page_name = [ "練習用", "1回目", "2回目", "3回目", "4回目", "5回目", "6回目", ]
let counts = [];
let count = 0;
const page_max = 6;

names = [
    [ 0, 1, 2, 3, 4, 5, 3, 1 ], // 練習用
    [2, 4, 0, 1, 5, 3, 1, 3, 5, 2, 4, 0, 1, 0, 3, 4], // 1回目
    [4, 1, 5, 0, 2, 3, 5, 0, 2, 4, 1, 3, 1, 2, 4, 5],
    [3, 5, 1, 2, 0, 4, 2, 0, 3, 5, 1, 4, 0, 1, 3, 0],
    [0, 2, 1, 5, 4, 3, 2, 5, 4, 0, 3, 1, 5, 4, 0, 3],
    [1, 3, 2, 4, 0, 5, 3, 2, 1, 3, 4, 0, 2, 1, 3, 4],
    [5, 0, 4, 1, 3, 2, 4, 1, 3, 5, 0, 1, 4, 0, 2, 1],
];

colors = [
    [5, 3, 4, 2, 1, 2, 4, 0, 5], // 練習用
    [1, 3, 0, 4, 3, 0, 2, 4, 1, 0, 3, 5, 4, 1, 2, 3], // 1回目
    [5, 2, 4, 1, 3, 0, 3, 1, 4, 5, 2, 0, 2, 3, 1, 0],
    [0, 3, 5, 1, 4, 5, 4, 5, 0, 2, 4, 3, 5, 2, 0, 4],
    [4, 0, 2, 3, 1, 2, 5, 1, 2, 4, 5, 0, 2, 3, 1, 4],
    [2, 4, 1, 5, 2, 3, 0, 3, 2, 1, 3, 2, 5, 4, 1, 0],
    [3, 1, 5, 2, 4, 0, 2, 5, 0, 3, 1, 4, 1, 5, 4, 0],
];
names2= [
    [2, 2, 1, 3, 4, 5, 5, 2, 2, 3, 3, 1, 0, 2, 1, 5],//1st
    [3, 2, 4, 1, 3, 1, 0, 1, 4, 0, 5, 0, 3, 2, 5, 0],
    [4, 1, 3, 4, 0, 3, 0, 4, 1, 1, 2, 5, 3, 0, 3, 0],
    [1, 1, 0, 5, 4, 1, 0, 2, 3, 4, 1, 1, 5, 5, 5, 4],
    [1, 1, 1, 5, 4, 0, 4, 4, 0, 2, 1, 5, 4, 5, 1, 1],
    [1, 2, 3, 2, 2, 2, 5, 4, 5, 5, 0, 2, 4, 2, 1, 5],
];

colors2=[
    [5, 0, 3, 2, 3, 1, 0, 3, 0, 4, 0, 2, 3, 4, 0, 2],
    [0, 4, 3, 4, 0, 2, 4, 5, 2, 1, 0, 1, 2, 4, 3, 4],
    [5, 3, 5, 0, 1, 5, 3, 5, 2, 4, 0, 3, 1, 1, 0, 4],
    [3, 0, 2, 2, 0, 0, 1, 4, 5, 0, 4, 5, 1, 4, 0, 5],
    [2, 5, 3, 0, 5, 1, 2, 2, 4, 5, 3, 0, 0, 1, 5, 3],
    [5, 3, 1, 4, 4, 0, 3, 3, 2, 3, 1, 0, 5, 0, 2, 4],
];

names3= [
    [1, 4, 1, 1, 1, 0, 2, 5, 4, 4, 5, 5, 4, 2, 3, 1],
    [4, 1, 1, 4, 1, 5, 2, 5, 4, 1, 2, 2, 3, 0, 2, 4],
    [0, 2, 3, 4, 2, 1, 0, 1, 3, 3, 1, 0, 1, 5, 1, 1],
    [0, 5, 5, 5, 4, 3, 1, 5, 0, 4, 4, 2, 1, 2, 4, 0],
    [5, 5, 1, 5, 4, 5, 1, 3, 5, 5, 3, 4, 5, 4, 4, 5],
    [5, 3, 1, 0, 1, 3, 4, 4, 4, 5, 5, 4, 0, 1, 4, 2],
];
colors3=[
    [3, 1, 4, 5, 2, 5, 0, 3, 5, 2, 4, 2, 1, 3, 1, 0],
    [5, 2, 2, 3, 5, 4, 4, 4, 1, 0, 4, 4, 2, 2, 3, 5],
    [5, 1, 1, 1, 1, 5, 5, 0, 2, 0, 5, 1, 3, 3, 2, 4],
    [5, 0, 2, 0, 2, 2, 4, 0, 3, 0, 1, 5, 0, 1, 3, 1],
    [1, 1, 4, 3, 2, 1, 2, 5, 0, 2, 1, 3, 4, 0, 0, 3],
    [3, 1, 0, 2, 2, 2, 1, 3, 1, 4, 2, 1, 2, 5, 2, 1],
];

const display = document.querySelector( '#display' );


function fill_display( page ) {
    const title = document.querySelector( '#title' );
    title.innerText = page_name[ page ];

    const inner = document.createElement('div');
    inner.setAttribute( 'id', 'inner' );
    display.appendChild( inner );

    for( let i in names[ page ] ) {
        let cell = document.createElement( 'div' );
        cell.innerText = c_name[ names[page][i] ];
        cell.classList.add( color[ colors[page][i] ] );
        cell.classList.add( 'cell' );
        inner.appendChild( cell );
    }

    const next = document.createElement( 'button' );
    next.setAttribute( 'id', 'next2' );
    next.innerText = '完了';
    inner.appendChild( next );

    next.addEventListener( 'click', () => {
        clear_display();
    });

    const time_disp = document.createElement( 'p' );
    time_disp.setAttribute( 'id', 'time_disp' );
    inner.appendChild( time_disp );
    const startTime = Date.now();
    const count = () => {
        const currentTime = new Date( Date.now() - startTime );
        const m = String( currentTime.getMinutes()).padStart(2,'0');
        const s = String( currentTime.getSeconds()).padStart(2,'0');       
        time_disp.innerText = m + ':' + s;
    }
    setInterval( count, 100 );
}

function clear_display() {
    const title = document.querySelector( '#title' );
    title.innerText = 'Stroop Test';

    const time_disp = document.querySelector( '#time_disp' );
    if( time_disp ) {
        counts.push( time_disp.innerText );
    }

    const inner = document.querySelector( '#inner' );
    console.log( inner );
    if( inner ) {
        inner.remove();
    }

    if( count <= page_max ) {
        const display = document.querySelector( '#display' );
        const next = document.createElement( 'button' );
        next.setAttribute( 'id', 'next' );
        next.innerText = '次に進む';
        display.appendChild( next );

        next.addEventListener( 'click', () => {
            next.remove();
            fill_display( count );
            count += 1;
        });
    } else {
        const display = document.querySelector( '#display' );
        const result = document.createElement( 'textarea' );
        result.setAttribute( 'rows', page_max + 1 );
        display.appendChild( result );
        result.value = counts.join( '\n' );;
    }
}

function check() {
    for( let i in names ) {
        for( let j in names[i] ) {
            if( names[i][j] == colors[i][j] ) console.log( "It's same at " + i + ", " + j );
        }
    }
}

function generate() {
    let a = [];
    for( let i=0; i<16; i++ ) {
        a.push( Math.floor( Math.random() * 6 ) );
    }
    console.log( a );
}

check();
clear_display( counts );