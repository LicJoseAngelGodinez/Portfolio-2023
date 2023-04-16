import monkey from '../../assets/icons-monkey/full-monkey.webp';
import Banner from '../../components/banner/banner';
import DesktopButton from '../../components/buttons/desktop-buttons/desktop-button';

export default function Home() {
  return (
    <div className="container">
        <object data={monkey} className="logo" width="100" height="100"> </object>
        <Banner>
            <span>{import.meta.env.VITE_APP_DOMAIN}</span>
            <DesktopButton text="This is a WIP" url="/#/test" />
        </Banner>
    </div>
  )
}
