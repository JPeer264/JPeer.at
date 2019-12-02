import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin);

config.autoReplaceSvg = 'nest';
dom.watch();
