"use strict";
let mainArr = [],
    zMainArr = [],
    xMainArr = [];

const
    askNumber = () => {
        let userNumber = +prompt("Number? (1-17)", "");
        if (!userNumber || isNaN(userNumber) || userNumber <= 0 || userNumber > 17) {
            askNumber();
        } else {
            return userNumber;
        }
    },

    start = () => {
        let
            N = askNumber(),
            n = 0,
            button = document.querySelector('.resetButton'),
            bigAlph = [],
            abc = [],
            zyx = [];


        if (!N) {
            n = 3;
        } else {
            switch (N) {
                case 1:
                    n = 1;
                    break;
                case 2:
                    n = 1;
                    break;
                case 3:
                    n = 2;
                    break;
                case 4:
                    n = 2;
                    break;
                case 5:
                    n = 3;
                    break;
                case 6:
                    n = 3;
                    break;
                case 7:
                    n = 4;
                    break;
                case 8:
                    n = 4;
                    break;
                case 9:
                    n = 5;
                    break;
                case 10:
                    n = 5;
                    break;
                case 11:
                    n = 6;
                    break;
                case 12:
                    n = 6;
                    break;
                case 13:
                    n = 7;
                    break;
                case 14:
                    n = 7;
                    break;
                case 15:
                    n = 8;
                    break;
                case 16:
                    n = 8;
                    break;
                case 17:
                    n = 9;
                    break;
                default:
                    n = 9;
                    break;
            }
        }
        for (let i = 65; i <= 90; i++) {
            bigAlph[i - 65] = String.fromCharCode(i);

        }

        let m = (n - 1);


        for (let i = n; i > 1; i--) {
            for (let z = 1; z <= i; z++) {
                zyx.push(bigAlph[z - 1]);
            }
            mainArr.push(zyx.join("   "));
            zyx.length = 0;

        }

        for (let i = 1; i <= n; i++) {

            for (let j = 1; j <= i; j++) {
                abc.push(bigAlph[j - 1]);
            }

            mainArr.push(abc.join("   "));
            abc.length = 0;


        }



        for (let i = m; i > 0; i--) {
            for (let z = 1; z <= i; z++) {
                zyx.push(bigAlph[bigAlph.length - z]);
            }
            zMainArr.push(zyx.join("   "));
            zyx.length = 0;
        }


        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= i; j++) {
                abc.push(bigAlph[bigAlph.length - j]);
            }
            zMainArr.push(abc.join("   "));
            abc.length = 0;
        }



        const ARR = zMainArr.length + mainArr.length;

        for (let i = 1; i <= ARR; i++) {

            xMainArr.push(mainArr[i - 1]);

            xMainArr.push("  " + zMainArr[i - 1]);

        }


        for (let i = 0; i < xMainArr.length; i++) {

            let q = xMainArr.indexOf("  undefined");
            xMainArr.splice(q, 1);

        }


        xMainArr.forEach((item, value) => {
            let bigH2 = document.createElement("p");
            bigH2.innerHTML = item;
            button.before(bigH2);
            console.log(item);
        });




    },

    reset = () => {
        setTimeout(() => {
            location.reload();
        }, 500);
    };
start();