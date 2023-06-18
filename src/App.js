import './App.css';
import QRCodeReader from './component/QRCodeReader';

function App() {
    return (
        <div className="container">
            <h1 className="text-center mt-5">Lecteur de code QR</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <QRCodeReader />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
