var socket;
function solve(cnf) {
    socket = io('localhost:55556');
    console.log('test');
    socket.on('connect', function(){
        console.log('hi sent');
        socket.send('hi');
    });
    socket.send('hi');
    console.log('test2');
}

socket.on('connect', () => {
    socket.send('hi');
});

function solve1() {
    var answer = solve("p cnf 4 2\n4 1 -3 0\n4 2 -3 0");
}

function solve2() {
    var answer = solve("p cnf 4 4\n4 1 0\n2 0\n3 0\n3 -1 0");
}

function solve3() {
    var answer = solve("p cnf 4 5\n1 0\n-1 0\n2 0\n3 0\n4 0")
}

