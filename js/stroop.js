const c_name = [ "青", "赤", "紫", "緑", "黄色", "白" ];
const color = [ "blue", "red", "pruple", "green", "yellow", "white" ];

const display = document.querySelector( '#display' );

for( let i=0; i<16; i++ ) {
    let cell = document.createElement( 'div' );
    cell.innerText = c_name[ Math.floor( Math.random() * 6 ) ];
    cell.classList.add( color[ Math.floor( Math.random() * 6 ) ] );
    cell.classList.add( 'cell' );
    display.appendChild( cell );
}