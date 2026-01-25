document.addEventListener('DOMContentLoaded', () => {
  const chat     = document.getElementById('chatbot');
  const list     = document.getElementById('cbMessages');
  const input    = document.getElementById('cbInput');
  const form     = document.getElementById('cbForm');
  const launcher = document.getElementById('chatbot-launcher') || document.getElementById('cbLauncher');
  const btnClose = document.querySelector('.cb-close');

  if (!chat || !list || !input || !form || !launcher) {
    console.warn('[Chatbot] Faltan nodos requeridos (#chatbot, #cbMessages, #cbInput, #cbForm, #chatbot-launcher).');
    return;
  }

  // ===== Bloqueo de scroll del body =====
  const lockBody = (lock) => {
    document.body.classList.toggle('cb-lock', !!lock);
  };

  // ===== Abrir / cerrar =====
  const openChat = () => {
    chat.classList.add('open');
    chat.classList.remove('cb-hidden');
    lockBody(true);
    setTimeout(() => input.focus(), 120);
  };

  const closeChat = () => {
    chat.classList.remove('open');
    chat.classList.add('cb-hidden');
    lockBody(false);
  };

  launcher.addEventListener('click', () => {
    chat.classList.contains('open') ? closeChat() : openChat();
  });

  if (btnClose) btnClose.addEventListener('click', closeChat);

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chat.classList.contains('open')) {
      closeChat();
    }
  });

  // Evitar que el scroll dentro del chat arrastre la página
  ['touchstart','touchmove','wheel'].forEach(evt => {
    list.addEventListener(evt, (e) => {
      e.stopPropagation();
    }, { passive: true });
  });

  // Limpiar historial viejo (por si había algo guardado antes)
  try {
    localStorage.removeItem('chatbot_history');
    sessionStorage.removeItem('chatbot_history');
  } catch(e){}

  // ===== Utils =====
  const scrollBottom = () => {
    list.scrollTop = list.scrollHeight;
  };

  const addMsg = (text, who = 'bot', asHTML = false) => {
    const el = document.createElement('div');
    el.className = who === 'bot' ? 'cb-msg bot' : 'cb-msg user';
    if (asHTML) el.innerHTML = text; else el.textContent = text;
    list.appendChild(el);
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    scrollBottom();
  };

  const goTo = (hash) => {
    const node = document.querySelector(hash);
    if (node) {
      node.scrollIntoView({ behavior:'smooth', block:'start' });
      return true;
    }
    window.location.hash = hash;
    return false;
  };

  const quick = (items) => {
    const wrap = document.createElement('div');
    wrap.className = 'msg-quick';
    items.forEach(({label, hash}) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.textContent = label;
      b.addEventListener('click', () => {
        addMsg(label, 'user');
        setTimeout(() => {
          goTo(hash);
          addMsg('Listo, te llevé a ' + label.toLowerCase() + '.', 'bot');
          // Al navegar, cerramos el chat para devolver el scroll
          closeChat();
        }, 120);
      });
      wrap.appendChild(b);
    });
    list.appendChild(wrap);
    scrollBottom();
  };

  // ===== Textos =====
  const PRESENTACION = `
Te cuento un poco sobre mí: soy <strong>Técnico Superior en Redes Informáticas</strong>, egresado del Instituto <strong>Teclab</strong>.<br><br>
Actualmente formo parte de la empresa <strong>Conectar SRL</strong>, en <strong>Sunchales, Santa Fe</strong>, donde trabajo tanto en <strong>redes y soporte técnico</strong> como en el <strong>desarrollo y mantenimiento de software</strong>.<br><br>
Combino infraestructura y programación para crear soluciones que optimizan procesos y mejoran la eficiencia operativa.
`;

  const SERVICIOS_INFO = `
Desarrollo soluciones tecnológicas a medida que combinan <strong>programación, automatización y redes informáticas</strong> para optimizar procesos y reducir tiempos.<br><br>
🔹 <strong>Software Full-Stack:</strong> Python, Django, C#, HTML, CSS, JS, SQL.<br>
🔹 <strong>Automatización:</strong> Python + Selenium para ONUs, OLTs, reportes y tareas repetitivas.<br>
🔹 <strong>Soporte Técnico:</strong> diagnóstico, reparación, mantenimiento preventivo, instalación de sistemas.<br>
🔹 <strong>Ciberseguridad & Redes:</strong> prácticas de hacking ético, Kali, FTTH/GPON, hardening de infraestructuras.
`;

  // ===== Intents =====
  const intents = [
    {
      test: t => /^(hola|buenas?|hey|hi|qué tal)/i.test(t),
      run: () => {
        addMsg('¡Hola! ¿Qué querés ver?', 'bot');
        quick([
          {label:'Servicios',   hash:'#servicios'},
          {label:'Certificados',hash:'#certificados'},
          {label:'Curriculum',  hash:'#curriculum'},
          {label:'Proyectos',   hash:'#proyectos'},
          {label:'Contacto',    hash:'#contacto'}
        ]);
      }
    },
    {
      test: t => /(proyecto|proyectos)/i.test(t),
      run: () => {
        addMsg('Te llevo a Proyectos…', 'bot');
        addMsg(PRESENTACION, 'bot', true);
        goTo('#proyectos');
        closeChat();
      }
    },
    {
      test: t => /(certificado|certificados)/i.test(t),
      run: () => {
        addMsg('Te llevo a Certificados…', 'bot');
        addMsg(PRESENTACION, 'bot', true);
        goTo('#certificados');
        closeChat();
      }
    },
    {
      test: t => /(cv|curriculum|currículum|hoja de vida)/i.test(t),
      run: () => {
        addMsg('Te llevo al Curriculum…', 'bot');
        addMsg(PRESENTACION, 'bot', true);
        goTo('#curriculum');
        closeChat();
      }
    },
    {
      test: t => /(contacto|email|correo|mail|whatsapp|linkedin)/i.test(t),
      run: () => {
        addMsg('Te llevo a Contacto…', 'bot');
        addMsg(PRESENTACION, 'bot', true);
        goTo('#contacto');
        closeChat();
      }
    },
    {
      test: t => /(servicio|servicios)/i.test(t),
      run: () => {
        addMsg('Te llevo a Servicios…', 'bot');
        addMsg(SERVICIOS_INFO, 'bot', true);
        goTo('#servicios');
        closeChat();
      }
    },
    {
      test: t => /(ayuda|help|menú|menu)/i.test(t),
      run: () => {
        addMsg('Elegí una opción:', 'bot');
        quick([
          {label:'Servicios',   hash:'#servicios'},
          {label:'Certificados',hash:'#certificados'},
          {label:'Curriculum',  hash:'#curriculum'},
          {label:'Proyectos',   hash:'#proyectos'},
          {label:'Contacto',    hash:'#contacto'}
        ]);
      }
    }
  ];

  const fallback = () => {
    addMsg(
      'Puedo llevarte a una sección. Decime: “Servicios”, “Proyectos”, “Certificados”, “Curriculum”, “Contacto” o “Ayuda”.',
      'bot'
    );
  };

  // Mensaje de bienvenida
  addMsg(
    '👋 ¡Hola! Soy el asistente de Luis. Puedo ayudarte a conocer sus proyectos, certificaciones o cómo contactarlo. ¿Por dónde te gustaría empezar?',
    'bot'
  );

  // Envío
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = (input.value || '').trim();
    if (!text) return;
    addMsg(text, 'user');
    input.value = '';
    const intent = intents.find(i => i.test(text));
    setTimeout(() => intent ? intent.run() : fallback(), 140);
  });
});
