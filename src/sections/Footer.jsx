function Footer() {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300  flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Condition</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/Anand-ui45" target="_blank">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="gthub" className="w-1/2 h-1/2 " />
        </div>
        </a>
        <a href="https://www.linkedin.com/in/paramanand-v-274ab2279/" target="_blank">
        <div className="social-icon">
          <img
            src="/assets/linkedin-tile.svg"
            alt="linkedin"
            className="w-1/2 h-1/2 "
          />
        </div>
        </a>
        <a href="https://www.instagram.com/_erron_black_xd/" target="_blank">
        <div className="social-icon">
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2 "
          />
        </div>
        </a>
      </div>
      <p className="text-white-500">&copy; 2024 Anand. All rights reserved.</p>
    </section>
  );
}

export default Footer;
