import { AppConfig } from "../utils/AppConfig";

const FooterCopyright = () => (
  <>
    <div>433 Lạc Long Quân, phường 5, quận 11, thành phố Hồ Chí Minh</div>
    <br />
    <div className="footer-copyright">
      © Copyright {new Date().getFullYear()} {AppConfig.title}.
    </div>
  </>
);

export { FooterCopyright };
