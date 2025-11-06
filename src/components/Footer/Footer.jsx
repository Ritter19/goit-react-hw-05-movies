import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <p className={css.footerText}>
        &copy; {new Date().getFullYear()}{' '}
        <span className={css.developerName}>Joey Barbacena</span>. All rights
        reserved.
      </p>
    </footer>
  );
};
