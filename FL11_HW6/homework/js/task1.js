                let a1 = prompt('enter didgit a1');
                let a2 = prompt('enter didgit a2');
                let b1 = prompt('enter didgit b1');
                let b2 = prompt('enter didgit b2');
                let c1 = prompt('enter midpoint c1');
                let c2 = prompt('enter midpoint c2');

                let myMidpoint, a, b, c, d, i=2;
                if (a1 === a2 && b1 === b2 && c1 === c2) {
                  a = parseInt(a1, 10);
                  b = parseInt(b1, 10);
                  c = parseInt(c1, 10);
                  myMidpoint = (a + b)/i;
                  d = myMidpoint === c ? 'true' : 'false';
                 console.log(d);
                } else {
                  console.log('false');
                }
                
