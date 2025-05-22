    (function () {
      const tabs = document.querySelectorAll('.tab');
      const tabContents = document.querySelectorAll('.tab-content');

      function activateTab(index) {
        tabs.forEach((tab, i) => {
          const selected = i === index;
          tab.classList.toggle('active', selected);
          tab.setAttribute('aria-selected', selected);
          tab.tabIndex = selected ? 0 : -1;
          tabContents[i].classList.toggle('active', selected);
        });
        tabContents[index].focus();
      }

      tabs.forEach((tab, idx) => {
        tab.addEventListener('click', () => activateTab(idx));
        tab.addEventListener('keydown', e => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const next = (idx + 1) % tabs.length;
            activateTab(next);
            tabs[next].focus();
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = (idx - 1 + tabs.length) % tabs.length;
            activateTab(prev);
            tabs[prev].focus();
          }
        });
      });

      window.goToGithub = function () {
        const githubUrl = 'https://github.com/Ravialbano';
        window.open(githubUrl, '_blank', 'noopener,noreferrer');
      };
    })();
    function typeWriter(elemento){
        const textoArray = elemento.innerHTML.split("");
        elemento.innerHTML = "";
        textoArray.forEach((letra, i) => {
            setTimeout(function(){
                elemento.innerHTML += letra

            },75 * i)
        }
    )
    }
    const nome = document.getElementById("namewriter")
    typeWriter(nome) 
      
