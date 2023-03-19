import AppStyle from './App.module.css';
import ShopItemFunc from './components/ShopItemFunc/ShopItemFunc'

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function App() {
  return (
    <div className={AppStyle.container}>
      <div className={AppStyle.backgroundElement}>
      </div>
      <div className={AppStyle.highlightWindow}>
        <div className={AppStyle.highlightOverlay}></div>
      </div>
      <div className={AppStyle.window}>
        <ShopItemFunc item={item} />
      </div>
    </div>
  );
}

export default App;
