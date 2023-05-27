import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons/faShareAlt';

library.add(faGithub, faLinkedin, faEnvelope, faShareAlt);

config.autoReplaceSvg = 'nest';
dom.watch();
