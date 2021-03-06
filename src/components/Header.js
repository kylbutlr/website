import React from 'react';
import ContactIcon from './ContactIcon';

export default function Header() {
  return (
    <div className='Header' id='Header'>
      <div className='title'>
        <h1>kb</h1>
        <h2>|</h2>
        <h3 className='kyl'>kyl</h3>
        <div className='flashing-title'>
          <h3 className='kylbutlr'>butlr</h3>
          <h3 className='kylebutler'>e butler</h3>
        </div>
      </div>
      <div className='contact-link'>
        <ContactIcon type={'email'} link={'mailto:kylbutlr@gmail.com'} desc={'Send me an email'} />
        <ContactIcon type={'github'} link={'https://github.com/kylbutlr'} desc={'Go to my GitHub'} />
        <ContactIcon type={'linkedin'} link={'https://www.linkedin.com/in/kylbutlr/'} desc={'Go to my LinkedIn'} />
        <ContactIcon type={'resume'} link={'https://kylbutlr.github.io/my-resume/'} desc={'See my Resume/Cv'} />
        {/*<ContactIcon type={'instagram'} link={'https://www.instagram.com/kylbutlr/'} desc={'Go to my Instagram'} />*/}
      </div>
    </div>
  );
}
