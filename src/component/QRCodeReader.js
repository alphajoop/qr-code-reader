import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

function QRCodeReader() {
    const [result, setResult] = useState('');
    const [cameraOpen, setCameraOpen] = useState(false);

    const handleScan = (data) => {
        if (data) {
            setResult(data);
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    const toggleCamera = () => {
        setCameraOpen(!cameraOpen);
    };

    return (
        <div>
            {!cameraOpen && (
                <div className="text-center">
                    <p>Caméra fermée</p>
                    <button className="btn btn-primary" onClick={toggleCamera}>Ouvrir la caméra</button>
                </div>
            )}
            {cameraOpen && (
                <div>
                    <QrReader
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                    />
                    <p>{result}</p>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={toggleCamera}>Fermer la caméra</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QRCodeReader;