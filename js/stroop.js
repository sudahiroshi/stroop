const c_name = [ "黒", "青", "赤", "紫", "緑", "橙" ];
const color = [ "black", "blue", "red", "pruple", "green", "orange" ];
const page_name = [ "練習用", "1回目", "2回目", "3回目", "4回目", "5回目", "6回目", ]
let counts = [];
let count = 0;
const page_max = 6;

names = [
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 練習用
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 1回目
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
];

colors = [
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 練習用
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 1回目
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
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

//fill_display( 1 );
clear_display( counts );