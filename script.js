const startingMinutes = 10;
let time = startingMinutes * 60;
setTimeout(() => {
    document.getElementById("coutntdown").innerText = "10";
    setTimeout(() => {
      document.getElementById("coutntdown").innerText = "9";
      setTimeout(() => {
        document.getElementById("coutntdown").innerText = "8";
        setTimeout(() => {
          document.getElementById("coutntdown").innerText = "7";
          setTimeout(() => {
            document.getElementById("coutntdown").innerText = "6";
            setTimeout(() => {
              document.getElementById("coutntdown").innerText = "5";
              setTimeout(() => {
                document.getElementById("coutntdown").innerText = "4";
                setTimeout(() => {
                  document.getElementById("coutntdown").innerText = "3";
                  setTimeout(() => {
                    document.getElementById("coutntdown").innerText = "2";
                    setTimeout(() => {
                      document.getElementById("coutntdown").innerText = "1";
                      setTimeout(() => {
                        document.getElementById("coutntdown").innerText =
                          "Happy Independence day";

                          setInterval(updateCountdown,1000);
                          function updateCountdown(){
                            const minutes=Math.floor(time/60);
                            let seconds = time %60;
                            CountdownEL.innerHTMl = '${minutes}; ${seconds}';
                            time--;
                          }
                        }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);